//说明把排产对象插入到对应index的位置
////@Params
//gridData,//未排除数据
//hotData,//已排产数据，包括资源
//doneData,//已排产对象的未排产数据
//gridDataIds,//未排产数据id数组，有顺序
//hot//handsontable对象
//hotIndex,//插入的位置（不是该位置的下一个位置！）

var saveAll = function () {
    allSaveFuntion(hotData, DayCount);

}

var allSaveFuntion = function (hotData, DayCount) {
    //0-处理hotData，Day1，Day2 变成数组
    //1-先保存数据到后天
    //2-如果成功，返回日期等数据
    //3-根据返回的数据重新加载前台数据
    var postStr = []; //JSON.stringify(hotData); //待回传的JSONstring
    var saveSucceed = false;
    var callBackInfoObj = "";

    $.each(hotData, function () {
        var currentObj = {};
        var currentArray = [];
        for (pro in this) {
            if (pro.substr(0, 3) !== "Day") {
                currentObj[pro] = this[pro];
            }
        }
        for (var i = 0; i < DayCount; i++) {
            //if no this property then push "undifinde"
            currentArray.push(this["Day" + i]);
        }
        currentObj["Day"] = currentArray;
        postStr.push(currentObj);
    })



    $.ajax({
        type: "POST",
        url: LimitedSchedule.helper.getServiceAddress("/WebForm1.aspx?Method=PostScheduleSave"),
        contentType: 'text/json',
        data: JSON.stringify(postStr),
        //async: false, //暂时不用异步的方式
        success: function (backdata) {
            //LimitedSchedule.helper.alertWin("保存成功！");

            //U9在Response的出来的字符串后面带一个网页，通过字符串分割的方式去掉            
            saveSucceed = true;
            if (typeof (backdata) === "string" && backdata.length > 0) {
                callBackInfo = eval(backdata.substr(0, backdata.indexOf("<!DOCTYPE")));
                if (hotData.length === callBackInfo.length) {
                    for (var i = 0; i < callBackInfo.length; i++) {
                        if (callBackInfo[i].StartDateTime && callBackInfo[i].EndDateTime) {
                            hotData[i].ScheduledDateTime = callBackInfo[i].StartDateTime + "\t\n" + callBackInfo[i].EndDateTime;
                        }
                        else {
                            hotData[i].ScheduledDateTime = "";
                        }
                        if (callBackInfo[i].OriginalStartDateTime ||
                         callBackInfo[i].OriginalEndDateTime) {
                            hotData[i].OriginalDateTime = callBackInfo[i].OriginalStartDateTime + "\t\n" + callBackInfo[i].OriginalEndDateTime;
                        }
                        else {
                            hotData[i].OriginalDateTime = "";
                        }
                    }
                    hot.render();
                }

            }

            //保存成功后跳转新页面
            if (nextUrl) {
                window.open(nextUrl, "_blank");
                nextUrl = "";
            }

        },
        error: function (request, errorInfor) {
            LimitedSchedule.helper.alertWin("保存失败！");
            window.console && window.console.log(errorInfor);
        }
    });



};



//DEPENDS LimitedSchedule.helper.getResouceByID,reCalcUsage,reMerge,DeleteBelowScheduleObj4Reschedule,schedulingObj2ScheduledObj
var scheduleFuntion = function (gridData, hotData, doneData, Ids, hot, hotIndex) {



    //拖拽目的地
    var rowIndex = hotIndex;
    var resourceName = hot.getDataAtCell(rowIndex - 1, 0); //hotData 的Index
    var resourceID = hot.getDataAtRowProp(rowIndex - 1, "ResourceID"); //it is a string

    var tempObj = LimitedSchedule.helper.getResouceByID(hotData, resourceID); //临时对象，帮助函数返回多个参数
    var resourceObj = tempObj.Obj;
    var resourceIndex = tempObj.Index;



    //获取拖拽对象
    var schedulingList = [];

    for (var i = 0; i < Ids.length; i++) {
        if (Ids[i] > 0) {
            schedulingList.push(LimitedSchedule.helper.getObjFromObjArrayByID(gridData, Ids[i]));
        }

    }

    // All TODO
    //1、把该资源后面的单空，资源做对应的更新
    //2、排产，子对象每个减去（从后面往前找的第一个被占用的开始拍）
    //3、后续单重新排产
    //TODO:


    //1、把该资源后面的单空，资源做对应的更新;然后把清空的资源放到本次需要排产对象的队列后面
    //@Param 资源ID，插入行Index，待排产对象列表，handsontable的数据，handsontable对象，排产对象已排产的备选数量（对象数组）
    DeleteBelowScheduleObj4Reschedule(resourceID, rowIndex, schedulingList, hotData, hot, doneData);





    //2、排产，子对象每个减去
    //
    for (var i = 0; i < schedulingList.length; i++) {

        //1内部变量的赋值
        var isUsableResource = false, ReqiredAccount = 0; //是否可用资源，需求量（工时单位）
        //console.log(schedulingList[i]);
        //console.log(i);
        if (typeof (schedulingList[i]) === "undefined") return;
        for (var j = 0; j < schedulingList[i].MyScheduleResource.length; j++) {
            if (schedulingList[i].MyScheduleResource[j].ResourceID == resourceID) {
                isUsableResource = true;
                //ReqiredAccount = schedulingList[i].MyScheduleResource[j].Account;  考虑换季时间（换机时间可能为0）
                ReqiredAccount = schedulingList[i].MyScheduleResource[j].Account + schedulingList[i].MachineReplacementTimeSpan;
            }
        }



        //2检查资源是否适用于该对象
        if (!isUsableResource || ReqiredAccount <= 0) {
            LimitedSchedule.helper.alertWin("[" + schedulingList[i].Doc + "]不是一个可用资源！");
            lastInsertedScheduleId = "";//免得第二次不能重排这个单
            continue; //下一个待排产对象
        }
        else {


            //构建已排产对象   待排产对象--->已排产对象
            var SchdeduledObj = schedulingObj2ScheduledObj(schedulingList[i], ReqiredAccount, resourceID, resourceName, resourceIndex, DayCount);

            //将数据更新到Hot上
            //先修改最大行数，再插入一行，再修改这一行的数值   
            maxRow++;
            hot.updateSettings({ maxRows: maxRow });
            //hot.alter('insert_row', rowIndex, 1);
            hotData.splice(rowIndex, 0, SchdeduledObj);

            //将hotData上的数据更新到hot上去
            var setData = [];
            for (prop in SchdeduledObj) {
                //window.console && console.log(prop);
                setData.push([rowIndex, prop, SchdeduledObj[prop]]);
                hotData[rowIndex][prop] = SchdeduledObj[prop];

            }
            hot.setDataAtRowProp(setData);



            //修改原始数据,备份数据中添加处理的数据对象，
            for (var j = 0; j < gridData.length; j++) {
                //如果是重拍的对象，IsReschedule=true；不处理重排对象
                if (!schedulingList[i].IsReschedule && gridData[j]["Doc"] == schedulingList[i].Doc) {
                    doneData.push(gridData[j]);
                    gridData.splice(j, 1);
                    break;
                }
            }

        }
        reCalcUsage(hotData);
        rowIndex++;
    }

    reMerge(hotData); //合并单元格



};


//删除对应index的位置对象
////Params
//gridData,//未排除数据
//hotData,//已排产数据，包括资源
//doneData,//已排产对象的未排产数据
//Index,//要删除对象编号
//hot//handsontable对象
//hotIndex,//排除位置

//DEPENDS LimitedSchedule.helper.getResouceByID,reCalcUsage,reMerge,DeleteBelowScheduleObj4Reschedule,schedulingObj2ScheduledObj
var deleteScheduleFuntion = function (gridData, hotData, doneData, hot, Index) {

    //算法
    //1将删除对象数据清零；
    //2删除对象下方对象重排（不重新选资源）
    //3handsontable自己会删除对象


    //拖拽目的地
    var rowIndex = Index;
    var resourceName = hot.getDataAtRowProp(rowIndex, "ResourceName"); //hotData 的Index
    var resourceID = hot.getDataAtRowProp(rowIndex, "ResourceID"); //it is a string

    var tempObj = LimitedSchedule.helper.getResouceByID(hotData, resourceID); //临时对象，帮助函数返回多个参数
    var resourceObj = tempObj.Obj;
    var resourceIndex = tempObj.Index;



    //获取拖拽对象
    var schedulingList = [];

    //    for (var i = 0; i < Ids.length; i++) {
    //        if (Ids[i] > 0) {
    //            schedulingList.push(LimitedSchedule.helper.getObjFromObjArrayByID(gridData, Ids[i]));
    //        }

    //    }

    // All TODO
    //1、把该资源后面的单空，资源做对应的更新
    //2、排产，子对象每个减去（从后面往前找的第一个被占用的开始拍）
    //3、后续单重新排产
    //TODO:


    //1、把该资源后面的单空，资源做对应的更新;然后把清空的资源放到本次需要排除对象的队列后面
    //@Param 资源ID，插入行Index，待排产对象列表，handsontable的数据，handsontable对象，排产对象已排产的备选数量（对象数组）
    //
    //最后一行的话，就不用删除其下方数据，其下方也没有数据
    if (hotData.length - 1 >= rowIndex + 1) {
        DeleteBelowScheduleObj4Reschedule(resourceID, rowIndex + 1, schedulingList, hotData, hot, doneData);
        for (prop in hotData[rowIndex]) {

            if (prop.substr(0, 3) === "Day") {
                hotData[rowIndex][prop] = "";
            }

           

        }
        reCalcUsage(hotData);
        rowIndex++; maxRow++;//插入到删除对象的下一个位置
    }
    else {
        return;
    }



    //hotData.splice(rowIndex, 1);





    //2、排产，子对象每个减去
    //
    for (var i = 0; i < schedulingList.length; i++) {

        //1内部变量的赋值
        var isUsableResource = false, ReqiredAccount = 0; //是否可用资源，需求量（工时单位）
        console.log(schedulingList[i]);
        console.log(i);
        if (typeof (schedulingList[i]) === "undefined") return;
        for (var j = 0; j < schedulingList[i].MyScheduleResource.length; j++) {
            if (schedulingList[i].MyScheduleResource[j].ResourceID == resourceID) {
                isUsableResource = true;
                ReqiredAccount = schedulingList[i].MyScheduleResource[j].Account + schedulingList[i].MachineReplacementTimeSpan;
            }
        }



        //2检查资源是否适用于该对象
        if (!isUsableResource || ReqiredAccount <= 0) {
            LimitedSchedule.helper.alertWin("[" + schedulingList[i].Doc + "]this is not a usable Resource!;");
            continue; //下一个待排产对象
        }
        else {


            //构建已排产对象   待排产对象--->已排产对象
            var SchdeduledObj = schedulingObj2ScheduledObj(schedulingList[i], ReqiredAccount, resourceID, resourceName, resourceIndex, DayCount);

            //将数据更新到Hot上
            //先修改最大行数，再插入一行，再修改这一行的数值   
            maxRow++;
            hot.updateSettings({ maxRows: maxRow });
            //hot.alter('insert_row', rowIndex, 1);
            hotData.splice(rowIndex, 0, SchdeduledObj);

            var setData = [];
            for (prop in SchdeduledObj) {
                //window.console && console.log(prop);
                setData.push([rowIndex, prop, SchdeduledObj[prop]]);
                hotData[rowIndex][prop] = SchdeduledObj[prop];

            }
            //window.console && console.log(setData);
            hot.setDataAtRowProp(setData);



            //修改原始数据,备份数据中添加处理的数据对象，
            for (var j = 0; j < gridData.length; j++) {
                //如果是重拍的对象，IsReschedule=true；不处理重拍对象
                if (!schedulingList[i].IsReschedule && gridData[j]["Doc"] == schedulingList[i].Doc) {
                    doneData.push(gridData[j]);
                    gridData.splice(j, 1);
                    break;
                }
            }

        }
        reCalcUsage(hotData);
        rowIndex++;
    }

    reMerge(hotData); //合并单元格



};


//说明把排产对象插入到对应index的位置
////Params
//gridData,//未排除数据
//hotData,//已排产数据，包括资源
//doneData,//已排产对象的未排产数据
//hot,
// ScheduleId,number 
// ResourceID string
//DEPENDS LimitedSchedule.helper.getResouceByID,reCalcUsage,reMerge,DeleteBelowScheduleObj4Reschedule,schedulingObj2ScheduledObj
//自动排产
//html 调用方法 
var autoSchedule = function () {
    allScheduleFuntion(gridData, hotData, doneData, hot, DayCount);
};


var allScheduleFuntion = function (gridData, hotData, doneData, hot, DayCount) {
    var chechedIds = []; //勾选的Id（number）数组
    var scheduleObj = []; //待排产对象
    //TODO 后续需要解决一个问题，全选的时候 下一页的内容选不中！！！！！！！！！！


    //chechedIds ,scheduleObj 赋值（先找勾选的id，按照勾选的顺序；再按id给对象赋值）
    var selected = $(".ui-jqgrid-btable tbody tr[style!='display: none;'] td input:checked").parents('tr').find("td[aria-describedby='jqGrid_Id']");
    $.each(selected, function () {
        var thisId = parseInt(this.innerHTML);
        chechedIds.push(thisId);
        for (var i = 0; i < gridData.length; i++) {
            if (gridData[i].Id === thisId && gridData[i].MyScheduleResource.length > 0) {
                scheduleObj.push(gridData[i]);
                break;
            }
        }

    });

    //如果没有勾选，则所有显示的对象排序（支持过滤，排序）
    //这个不起作用 ， 原因未知
    var lastSelectedDatas1 = $grid.jqGrid("getGridParam", "lastSelectedData");
    var lastSelectedDatas = $grid.getGridParam('lastSelectedData');
    console.log(lastSelectedDatas);

    //chechedIds.reverse();

    for (var i = 0; i < scheduleObj.length; i++) {
        var bestResourceDayIndex = DayCount - 1,
        bestResourceID = "";
        //这里按照MyScheduleResource的资源顺序
        for (var j = 0; j < scheduleObj[i].MyScheduleResource.length; j++) {
            var FinishedDateIndex = getFinishedDate(hotData,
            scheduleObj[i].MyScheduleResource[j].ResourceID,
            scheduleObj[i].MyScheduleResource[j].Account + scheduleObj[i].MachineReplacementTimeSpan,//考虑换机时间
            DayCount,
            "单号："+scheduleObj[i].Doc +"；资源："+ scheduleObj[i].MyScheduleResource[j].ResourceName);
            if (FinishedDateIndex>=0 && FinishedDateIndex < bestResourceDayIndex) {
                bestResourceDayIndex = FinishedDateIndex;
                bestResourceID = scheduleObj[i].MyScheduleResource[j].ResourceID;

            }
        }

        //TODO 在最好的资源上进行排产
        var Ids = [scheduleObj[i].Id];
        var hotIndex = getLastOccupiedIndex(hotData, bestResourceID);
        scheduleFuntion(gridData, hotData, doneData, Ids, hot, ++hotIndex);
    }



    refreshJqGrid();
};

//试排，获得完成日期
//@param
//hotData,
//ResourceID,
//RequireAccount,（包括换机时间）
//DayCount
//DEPENDS LimitedSchedule.helper.getResouceByID
//return an json with DayIndex and HotIndex 2 properties
var getFinishedDate = function (hotData, ResourceID, RequireAccount, DayCount, DocResourceName) {

    var result = DayCount;
    //var ResourceID = "";

    //Index Obj
    var currentResourceObj = LimitedSchedule.helper.getResouceByID(hotData, ResourceID);
    var hotIndex = currentResourceObj.Index;
    var hotObj = currentResourceObj.Obj;


    var startIndex = 0;
    for (var j = DayCount - 1; j > 0; j--) {
        //最后一个被占用的资源
        if (hotObj["Day" + j] != "0/0" && eval(hotObj["Day" + j]) > 0) {
            startIndex = j;
            break;
        }
    }

    //ReqiredAccount = 20; ////////////////////////////FFFFor TTTEst
    for (var j = startIndex; j < DayCount; j++) {
        //通过
        //resourceObj

        var currentDayTotalQty = ((hotObj["Day" + j]).split("/"))[1];
        var currentDayUsedQty = ((hotObj["Day" + j]).split("/"))[0];
        var currentDayAcceptableQty = LimitedSchedule.helper.myMinus(currentDayTotalQty , currentDayUsedQty);
        if (currentDayAcceptableQty > 0) {//有剩余量


            if (RequireAccount >= currentDayAcceptableQty) {
                RequireAccount = LimitedSchedule.helper.myMinus(RequireAccount,currentDayAcceptableQty);

                if (j === (DayCount - 1) && RequireAccount > 0) {
                    LimitedSchedule.helper.alertWin("[试排的时候]日历天数不够" + DocResourceName);
                }
            }
            else if (RequireAccount >= 0 && RequireAccount < currentDayTotalQty) {
                result = j;

                break;
            }
        }


    }
    return result;


};

//ResultInde
//@Param 
//HotData, 
//ResourcID string type 
//return Index ,if not found return -1
var getLastOccupiedIndex = function (HotData, ResourcID) {


    for (var i = HotData.length - 1; i >= 0; i--) {
        if (HotData[i].ResourceID === ResourcID) {
            return i;
        }
    }
    return -1;
}


var ReSchedule = function () {
    refreshData(ReScheduleInResource);
    //ReScheduleInResource(hotData, DayCount, doneData);
};


//重排（不改变资源，更新数量）
var ReScheduleInResource = function (hotData, DayCount, doneData) {

    //--logic
    //-1-先清空资源和排产对象的数据
    //-2-根据排产对象的id获得最新的排产数量
    //-3-用新的排产数据量安装原来的顺序重新排产，注意这里要同时更新资源的占用量



    var ReqiredAccount = 0; //最新的排产数量
    var currentResourceID = ""; resourceIndex = 0;
    var deleteIndexArray = [];

    for (var i = 0; i < hotData.length; i++) {

        //-1-先清空资源和排产对象的数据
        //给变量赋值，清空之前的排产的日数据
        //满足if条件为资源，else为排产对象
        if (0 === i || hotData[i].ResourceID !== hotData[i - 1].ResourceID) {
            resourceIndex = i;
            currentResourceID = hotData[i].ResourceID;

            for (var j = 0; j < DayCount; j++) {
                //资源使用量清零
                hotData[resourceIndex]["Day" + j] = "0/" + ((hotData[resourceIndex]["Day" + j]).split("/"))[1];
            }

        }
        else {

            for (var j = 0; j < DayCount; j++) {
                //资源之前的已排产对象
                hotData[i]["Day" + j] = "";
            }
        }




        if (hotData[i].Id > 0 && hotData[i].ResourceID) {
            //-2-根据排产对象的id获得最新的排产数量
            ReqiredAccount = getScheduleQty(hotData[i].Id, hotData[i].ResourceID, doneData);

            //-3-用新的排产数据量安装原来的顺序重新排产，注意这里要同时更新资源的占用量
            var startIndex = 0; // getStartDateIndex(StartDate, resourceObj.LastOccupiedDate);
            for (var j = DayCount - 1; j > 0; j--) {
                //最后一个被占用的资源
                if (hotData[resourceIndex]["Day" + j] != "0/0" && eval(hotData[resourceIndex]["Day" + j]) > 0) {
                    startIndex = j;
                    break;
                }
            }

            if (ReqiredAccount) {

                for (var j = startIndex; j < DayCount; j++) {
                    //通过
                    //resourceObj

                    var currentDayTotalQty = ((hotData[resourceIndex]["Day" + j]).split("/"))[1];
                    var currentDayUsedQty = ((hotData[resourceIndex]["Day" + j]).split("/"))[0];
                    var currentDayAcceptableQty = LimitedSchedule.helper.myMinus(currentDayTotalQty , currentDayUsedQty);
                    if (currentDayAcceptableQty > 0) {//有剩余量


                        if (ReqiredAccount >= currentDayAcceptableQty) {
                            ReqiredAccount =LimitedSchedule.helper.myMinus( ReqiredAccount,currentDayAcceptableQty);
                            //SchdeduledObj["Day" + j] = currentDayAcceptableQty.toString();
                            hotData[i]["Day" + j] = currentDayAcceptableQty.toString();
                            hotData[resourceIndex]["Day" + j] = currentDayTotalQty + "/" + currentDayTotalQty;

                            if (j === (DayCount - 1) && ReqiredAccount > 0) {
                                LimitedSchedule.helper.alertWin("日历天数不够" + SchdeduledObj.DocName);
                                throw new Error("日历天数不够" + SchdeduledObj.DocName);
                            }
                        }

                        //最后一个数据
                        else if (ReqiredAccount > 0 && ReqiredAccount < currentDayTotalQty) {
                            //SchdeduledObj["Day" + j] = ReqiredAccount.toString();
                            hotData[i]["Day" + j] = ReqiredAccount.toString();
                            hotData[resourceIndex]["Day" + j] = ReqiredAccount + "/" + currentDayTotalQty;


                            break;
                        }
                    }

                }

            }
            else {
                deleteIndexArray.push(i);
            }

        }
    }

    //删除待排产量为0的排产对象
    if (deleteIndexArray.length) {
        //Todo 
        throw new Error("not implement 删除已完成的排产对象【未实现】！");

    }

    reMerge(hotData);
    LimitedSchedule.helper.alertWin("重排完成！保存后使得重排结果有效。");
};


//根据排产对象id和资源id获得该对象对应该资源的排产工时需求量（考虑换机时间）
var getScheduleQty=function (itemId,ResourceId,doneData) {

    for (var i = 0; i < doneData.length; i++) {
        if (itemId===doneData[i].Id&&doneData[i].MyScheduleResource) {

            for (var j = 0; j < doneData[i].MyScheduleResource.length; j++) {

                if (doneData[i].MyScheduleResource[j].ResourceID===ResourceId) {
                    return doneData[i].MyScheduleResource[j].Account + doneData[i].MachineReplacementTimeSpan;
                }    
            }
        }    
    
    }
    return 0;
    
};

//1、把该资源后面的单空，资源做对应的更新;然后把清空的资源放到本次需要排产对象的队列后面，并添加标记Obj.IsReschedule = true;
//@Param 资源ID，插入行Index，待排产对象列表，handsontable的数据，handsontable对象，排产对象已排产的备选数量（对象数组）
//INNER　USED FUNCTION  LimitedSchedule.helper.getObjFromObjArrayByID,reCalcUsage
var DeleteBelowScheduleObj4Reschedule = function (resourceID, rowIndex, schedulingList, hotData, hot, doneData) {

    for (var i = hotData.length - 1; i >= rowIndex; i--) {
        if (hotData[i].Id > 0 && hotData[i].ResourceID == resourceID) {
            // 清除数据，
            //            for (property in hotData[i]) {

            //                if (property == "Id") {
            var Obj = LimitedSchedule.helper.getObjFromObjArrayByID(doneData, hotData[i]["Id"]);
            !Obj && (Obj = LimitedSchedule.helper.getObjFromObjArrayByID(hotData, hotData[i]["Id"]));
            Obj.IsReschedule = true; //重排的对象添加一个标志
            schedulingList.push(Obj);
            hotData.splice(i, 1);
            //                }
            //            }
            //最后占用时间的调整  不需要                    

        }
        //资源日数据更新
    }
    //重新计算资源占用，有必要的！！！
    reCalcUsage(hotData);

};

//构建已排产对象   待排产对象--->已排产对象
var schedulingObj2ScheduledObj = function (scheduling, ReqiredAccount, resourceID, resourceName, resourceIndex, DayCount) {

    var SchdeduledObj = new Object(); // for binding hottable

    //Basic Property
    SchdeduledObj.Id = scheduling.Id;
    SchdeduledObj.ResourceID = resourceID; 
    SchdeduledObj.ResourceName = resourceName;
    SchdeduledObj.DocName = scheduling.Doc;
    if (scheduling.OldStartTime || scheduling.OldEndTime) {
        SchdeduledObj.OriginalDateTime = scheduling.OldStartTime + "\t\n" + scheduling.OldEndTime;
    }
    else {
        SchdeduledObj.OriginalDateTime = "";
    }   
    SchdeduledObj.ScheduledDateTime = "";

    //看j从什么时候开始,TODO 根据最后占用日期排产；
    //还有一种模式有空的就排;如果第二种模式  startIndex=0；在for Loop 里面判断
    var startIndex = 0; 
    for (var j = DayCount - 1; j > 0; j--) {
        //最后一个被占用的资源
        if (hotData[resourceIndex]["Day" + j] != "0/0" && eval(hotData[resourceIndex]["Day" + j]) > 0) {
            startIndex = j;
            break;
        }
    }

    //ReqiredAccount = 20; ////////////////////////////For TEst
    for (var j = startIndex; j < DayCount; j++) {
        //通过
        //resourceObj

        var currentDayTotalQty = ((hotData[resourceIndex]["Day" + j]).split("/"))[1];
        var currentDayUsedQty = ((hotData[resourceIndex]["Day" + j]).split("/"))[0];
        var currentDayAcceptableQty = LimitedSchedule.helper.myMinus(currentDayTotalQty, currentDayUsedQty);
        if (currentDayAcceptableQty > 0) {//有剩余量


            if (ReqiredAccount >= currentDayAcceptableQty) {
                ReqiredAccount = LimitedSchedule.helper.myMinus(ReqiredAccount,currentDayAcceptableQty);
                SchdeduledObj["Day" + j] = currentDayAcceptableQty.toString();
                if (j === (DayCount - 1) && ReqiredAccount > 0) {
                    LimitedSchedule.helper.alertWin("日历天数不够" + SchdeduledObj.DocName);
                }
            }
            else if (ReqiredAccount >0 && ReqiredAccount < currentDayTotalQty) {
                SchdeduledObj["Day" + j] = ReqiredAccount.toString();

                break;
            }
        } else {
            continue;
        }


    }


    return SchdeduledObj;
};

