////文件代码说明（）
//最开始是一些没用的注释
//然后几个提取数据的方法（通过ajax但是用的事同步的）
//页面控件的设置和添加(部分控件的方法单独放在后面)


////全局变量，运行的时候需要注释掉；写代码的时候有提示
//var hot; //handsontable
//var maxRow = 102; //最大行，防止拖拽填充的时候 自动增加row
//var gridData, dataSource = [], //排产对象数据，已排产信息
//        hotHeaders = [], hotColunms = [], //Data4hot
//        hotData = [], //hot Data  表头，表列定义，表数据
//        doneData = [];  //用来备份待排产资源等信息，如果将该对象进行排产后
//var DayCount = 0, StartDate = ""; //格式 “2015-12-12”
//var lastInsertedScheduleId;


var getData = function () {

    //    var hot; //handsontable
    //    var maxRow = 102; //最大行，防止拖拽填充的时候 自动增加row
    //    var gridData, dataSource = [], //排产对象数据，已排产信息
    //        hotHeaders = [], hotColunms = [], hotData = [], //hot Data  表头，表列定义，表数据
    //        doneData = [];  //用来备份待排产资源等信息，如果将该对象进行排产后

    $.ajax({
        type: "GET",
        //url: "../../WebForm1.aspx?Method=GetScheduleObj",
        url: LimitedSchedule.helper.getServiceAddress("/WebForm1.aspx?Method=GetScheduleObj"),
        contentType: 'text/json',
        async: false, //暂时不用异步的方式
        success: function (data) {
            //U9在Response的出来的字符串后面带一个网页，通过字符串分割的方式去掉
            //gridData 
            objData = eval(data.substr(0, data.indexOf("<!DOCTYPE")));
        },
        error: function (request, errorInfor) {
            window.console && window.console.log(errorInfor);
        }
    });

    for (var i = 0; i < objData.length; i++) {
        if (objData[i].IsScheduled) {
            doneData.push(objData[i]);
        } else {
            gridData.push(objData[i]);
        }

    }


    $.ajax({
        type: "GET",
        //url: "../../WebForm1.aspx?Method=GetScheduledInfo",
        url: LimitedSchedule.helper.getServiceAddress("/WebForm1.aspx?Method=GetScheduledInfo"),
        contentType: 'text/json',
        async: false, //暂时不用异步的方式
        success: function (data) {
            //console.log(data);
            dataSource = eval(data.substr(0, data.indexOf("<!DOCTYPE"))); // msg;
        },
        error: function (request, errorInfor) {
            window.console && window.console.log(errorInfor);
        }

    });
    //根据设置显示列
    hotHeaders = ["资源", 
//    "编码",
//    "资源编码",
//    "最后占用时间",
    "订单-工序",
    "计划时间",
    "排程时间"
    ]; //资源编码后续需要隐藏  "工时",
    hotColunms = [

            { data: 'ResourceName', readOnly: true },
//            { data: 'Id', readOnly: true },
//            { data: 'ResourceID', readOnly: true },
//            { data: 'LastOccupiedDate', readOnly: true },
            { data: 'DocName', readOnly: true },
            { data: 'OriginalDateTime' , readOnly: true},//
            { data: 'ScheduledDateTime', renderer: DatecolorRenderer, readOnly: true }
            ];
    //var columnCurrentLength = hotColunms.length;
    for (var i = 0; i < dataSource.length; i++) {
        var myDataSource = {};
        if (i === 0) {
            maxRow = dataSource.length;
        }
        myDataSource.Id = dataSource[i].Id;
        myDataSource.ResourceID = dataSource[i].ResourceID;
        myDataSource.ResourceName = dataSource[i].ResourceName;
        myDataSource.LastOccupiedDate = dataSource[i].LastOccupiedDate;
        myDataSource.DocName = dataSource[i].DocName;
        myDataSource.OriginalDateTime = dataSource[i].OriginalStartDate + "\t\n" + dataSource[i].OriginalEndDate;
        myDataSource.ScheduledDateTime = dataSource[i].PlanStartDate + "\t\n" + dataSource[i].PlanEndDate;

        for (var j = 0; j < dataSource[i].MyScheduledInfoDatas.length; j++) {
            myDataSource["Day" + j] = dataSource[i].MyScheduledInfoDatas[j].Value;
            if (0 === i) {
                //hotHeaders.push(dataSource[i].MyScheduledInfoDatas[j].Date);
                hotHeaders.push(dataSource[i].MyScheduledInfoDatas[j].Date.substr(5,5));
                hotColunms.push({ data: "Day" + j, renderer: colorRenderer });
                DayCount = dataSource[i].MyScheduledInfoDatas.length; //天数
                StartDate = dataSource[i].MyScheduledInfoDatas[0].Date; //起始日期 string type
            }
        }

        hotData.push(myDataSource);

    }



    //window.console && console.log(hotData);
}



//更新数据
//depend on jquery,LimitedSchedule.helper.alertWin
//isBeforReschedule bool flag.if true,it is invoked by the funtion "Reschedule"
//无参数只刷新；有参数则刷新数据后重拍

var refreshData = function (ReScheduleInResource) {

    $.ajax({
        type: "GET",
        //url: "../../WebForm1.aspx?Method=ScheduleDataSync",
        url: LimitedSchedule.helper.getServiceAddress("/WebForm1.aspx?Method=ScheduleDataSync"),
        contentType: 'text/json',
        //async: false, //暂时不用异步的方式
        success: function (data) {
            if ("True" === data.substr(0, 4)) {

                //同步数据后重新 从后台去数据再更新到前台 #4
                //更新hot和jqgrid 的方式不一样；hot是数据reference，所以需要重新builthot 指向新的数据；jqgrid只要重新跟新一下数据源就行
                hotData = gridData = dataSource = objData = []; //排产对象数据，已排产信息
                hotHeaders = [];
                hotColunms = [];
                hotData = [];
                doneData = [];
                hot.destroy();
                //$grid.GridUnload();

                getData();

                //setJqGrid();
                refreshJqGrid();

                //放grid的容器


                hot = builtHot(document.getElementById('example1'), hotData, doneData);
                //setDraggable();//这个在refreshJqGrid里面已经有了
                setDroppable(gridData, doneData, hot);

                //计算资源汇总量单元格合并
                //reCalcUsage(hotData);
                reMerge(hotData);

                LimitedSchedule.helper.alertWin("同步成功！");
                //如果有参数，且传过来的参数是个函数  则是重拍逻辑的函数
                if (arguments.length > 0 && $.isFunction(ReScheduleInResource)) {
                    ReScheduleInResource(hotData, DayCount, doneData);
                }
                
                
               


            } else {
                LimitedSchedule.helper.alertWin("已同步，但是有些问题！看后台日志！");
               throw new Error("已同步，但是有些问题！看后台日志！");
            }
        },
        error: function (request, errorInfor) {
            window.console && window.console.log(errorInfor);
            throw new Error("errorInfor");
        }
    });

};

var setLayout = function () {
    //页面布局
    $('body').layout({
        applyDefaultStyles: true
        , west__size: 380
        // , west__initClosed: true
        , west__spacing_closed: 8
        , west__spacing_open: 8
        , north__spacing_closed: 0
        , north__spacing_open: 0
        //, west__togglerContent_open: '<div class="ui-icon"></div>' //加箭头 未实现

    });

};

var setJqGrid = function () {
    $grid.jqGrid({
        data: gridData,
        regional: "cn",
        datatype: "local",
        autoresizeOnLoad: true,
        colModel: [
            { label: '隐藏 ', name: 'Id', width: 20, hidden: true },
            {
                label: '单号', name: 'Doc', autoResizable: true, //width: 70,
                searchoptions: {
                    // dataInit is the client-side event that fires upon initializing the toolbar search field for a column
                    // use it to place a third party control to customize the toolbar
//                    dataInit: function (element) {
//                        $(element).autocomplete({
//                            id: 'AutoComplete',
//                            source: ["MO10-工序1", "MO10-工序2", "MO10-工序3", "MO10-工序4", "MO10-工序5", "MO11-工序1", "MO11-工序2", "MO11-工序3", "MO11-工序4", "MO12-工序1", "MO12-工序2", "MO12-工序3"],
//                            autoFocus: true
//                        });
                //                    }

                    sopt: ["cn"]//ge=greater or equal;le= less or equal;eq=qual; cn=contain
                }
            },
        { label: '物料', name: 'Item',  autoResizable: true, searchoptions: { sopt:["cn"]} },//stype: "select",  cn=contain
        {label: '数量', name: 'ProductionQty', sorttype: "number", autoResizable: true, width: 80, searchoptions: { sopt: ["ge", "le", "eq"]} }, //  sorttype: 'number'width: 40, 
        {label: '交期', name: 'DeliveryDate', autoResizable: true, searchoptions: { sopt: ["ge", "le", "eq"]}}//, width: 80sorttype: 'integer' 
        ],
        loadonce: true,
        multiSort: true,
        multiselect: true,
        gridComplete: function () {
            setDraggable();
        },
        width:358,// "auto",//, //
        height: "auto",
        rowNum: 1000,
        //viewrecords: true,
        pager: "#jqGridPager"
        //, caption: "Amounts of each product category"
    });
    $grid.jqGrid("navGrid", "#jqGridPager", {
        edit: false, add: false, del: false, search: true, refresh: false
    });
    $grid.jqGrid('filterToolbar',{searchOnEnter:false,stringResult:true,defaultSearch:"cn"});// 显示符号,searchOperators:true
    // 参考 http://www.guriddo.net/demo/guriddojs/  searching/Filtering
};

var refreshJqGrid = function () {

    $grid.jqGrid('clearGridData');
    //sort 排序参考   可以多条件排序  但是是固定条件 http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects; sort 的参数一定是一个function
    $grid.jqGrid('setGridParam', { data: gridData.sort(function (a, b) { return a.Doc == b.Doc ? 0 : (a.Doc > b.Doc ? 1 : -1) }) });
    $grid.trigger('reloadGrid');

    setDraggable();

};

var setDraggable = function () {
    $(".ui-jqgrid-btable tbody tr ").draggable({
        appendTo: "body",
        cursor: 'move',
        revert: 'invalid',
        // helper: "clone"
        helper: function () {
            //显示状态的已选中行
            var selected = $(".ui-jqgrid-btable tbody tr[style!='display: none;'] td input:checked").parents('tr');
            if (selected.length === 0) {
                selected = $(this);
            }
            var container = $('<div/>').attr('id', 'draggingContainer');
            container.append(selected.clone());
            return container;
        }
    });
};

//参数{未排除数据，已排产可以资源信息备份，handsontable}
var setDroppable = function (gridData, doneData, hot) {
    $(".htCore tbody tr ").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        //accept: ".ui-jqgrid-btable tbody tr td:nth-child(2) ",//".MO",
        drop: function (event, ui) {


            //获得基本数据
            var dragIDObj = $("#draggingContainer tr td[aria-describedby='jqGrid_Id']"); //[0].innerHTML
            var hotIndex = parseInt($(this).find(".rowHeader").text());
            var Ids = [];

            for (var i = 0; i < dragIDObj.length; i++) {
                if (dragIDObj[i].innerHTML != "0") {
                    Ids.unshift(parseInt(dragIDObj[i].innerHTML));
                }

            }

            //解决jquery的一个bug，拖拽时候多次调用该函数（实际拖一条数据，显示两条数据）
            if (Ids.length > 0) {
                if (lastInsertedScheduleId == Ids[0]) {
                    console.log("wrong!!!!!!");
                    return;
                } else {
                    lastInsertedScheduleId = Ids[0];
                }
            }

            //
            scheduleFuntion(gridData, hotData, doneData, Ids, hot, hotIndex);
        
            refreshJqGrid();


            //重新 构造 drop对象；因为前面破坏了其结构
            setDroppable(gridData, doneData, hot);



        }
    });
};



var builtHot = function (example1, hotData, doneData) {

    hot = new Handsontable(example1, {
        data: hotData,
        //dataSource,
        // JSON.parse(JSON.stringify(dataSource)), //Handsontable.helper.createSpreadsheetData(1000, 10)

        rowHeaders: true,
        colHeaders: hotHeaders,
        // ["资源", "订单-工序", "计划时间", "排程时间", "3月01", "3月02", "3月03", "3月04", "3月05", "3月06", "3月07", "3月02", "3月03", "3月04", "3月05", "3月06", "3月07", "3月02", "3月03", "3月04", "3月05", "3月06", "3月07", "3月02", "3月03", "3月04", "3月05", "3月06", "3月07", "3月02", "3月03", "3月04", "3月05", "3月06", "3月07", "3月08"],
        colWidths: [120, 120, 150, 150],
        fillHandle: "horizontal",
        manualRowMove: true,
        maxRows: maxRow,
        strechH: 'all',
        manualColumnResize: true,
        comments: true,
        contextMenu: ['remove_row'],
        fixedColumnsLeft: 2,
        columns: hotColunms,

        afterSelection: function (row, col, row2, col2) {
            // var meta = this.getCellMeta(row2, col2);
            //前4列不让拖拽

            if (col === 0 || col2 === 0 || col === 1 || col2 === 1 || col === 2 || col2 === 2 || col === 3 || col2 === 3) {
                this.updateSettings({ fillHandle: false });
            }
            else {
                this.updateSettings({ fillHandle: true, fillHandle: "horizontal" });
            }
            reMerge(hotData);
        },
        beforeRemoveRow: function (rowIndex, amount) {

            if (hotData[rowIndex]["DocName"] == "")
                return false;
            var confirm1 = confirm("确定要删除选中行?");
            if (confirm1 == false)
                return false;

            //显示左侧grid 对应的row 注意 单号要唯一;多行删除  一定是连续的
            for (var i = rowIndex; i < rowIndex + amount; i++) {
                if (hotData[i]["DocName"] == "") {
                    LimitedSchedule.helper.alertWin("不允许删除资源汇总行！");
                    return false;
                }

                //$(".ui-jqgrid-btable tbody tr:contains('" + hotData[rowIndex]["DocName"] + "')").show();


            }

            for (var i = rowIndex; i < rowIndex + amount; i++) {
                deleteScheduleFuntion(gridData, hotData, doneData, hot, i);
            }
            // deleteScheduleFuntion(gridData, hotData, doneData, hot, rowIndex);
            lastInsertedScheduleId = "";
            // rowIndex -= amount;//还原rowIndex的值

            //            //将未排产的数据 删除的还原
            for (var j = 0; j < doneData.length; j++) {

                for (var k = rowIndex; k < rowIndex + amount; k++) {
                    if (doneData[j]["Id"] === hotData[k]["Id"]) {
                        doneData[j].IsReschedule = false;
                        gridData.push(doneData[j]);
                        doneData.splice(j, 1);
                        j--;

                        break;
                    }
                }
            }


            //            for (var j = doneData.length - 1; j >= 0; j--) {
            //                if (j < 0) { return; }
            //                else if (true) {

            //                }

            //            }

            maxRow -= amount; //最大行做对应调整

            

            refreshJqGrid();
           




        },
        afterRemoveRow: function (rowIndex, amount) {
            reCalcUsage(hotData);
            reMerge(hotData);
            //this.updateSettings({ data: hotData });
        },
        //beforeRowMove是自己注册和添加的；更新handsontable后需要做相应的更新
        beforeRowMove: beforeRowMoveFunction,
        beforeChange: function (changes, source) {

            //资源第一行，不允许填充
            if (changes.length > 0) {

                if (hot.getDataAtCell(changes[0][0], 1) === "" && source == "autofill") {
                    //alert("you can NOT do this!");
                    return false;
                }

                //if (hot.getDataAtCell(changes[0][0], 1) != "" && source == "edit") {

                //}

                //自动求和
                //1.对前两列不做处理
                var changesCount = changes.length;
                for (var i = 0; i < changesCount; i++) {
                    if (changes[i][1] == "RecourceName") continue;
                    else if (changes[i][1] == "DocName" && source == "autofill") changes[i][3] = changes[i][2];
                    else if (source == "autofill" || source == "edit" || source == "paste" 
                    || !source) //考虑直接按delete的情况
                    {// why can't use ===
                    //编辑 为空的话不抛错
                        if (isNaN(parseFloat(changes[i][3])) && changes[i][3]) {
                            LimitedSchedule.helper.alertWin("只允许输入数字!");
                            return false;
                        }

                        if (changes[i][3]!="") {
                            changes[i][3] = (Math.round((parseFloat(changes[i][3])) * 100) / 100).toString();
                        }                        
                        changes = CalcUsage(changes, i, hotData);
                        if (i == changesCount)
                            window.console && console.log(changes);

                    }
                }
            }

            //hot.setDataAtCell(0, 2, hot.getDataAtCell(1, 2) + hot.getDataAtCell(2, 2) + hot.getDataAtCell(3, 2));


        }

    });

    return hot;

};


///计算资源占用量(确保按资源排序，资源使用量行在最上方)
//changes beforechange 事件中的changes ;i changes的第i个对象/Array;hotData 当前数据源
//changes[i][rowIndex,"property","Oldvalue"，"NewValue"]
var CalcUsage = function (changes, changesIndex, hotData) {
    var currenRowIndex = changes[changesIndex][0],
        currentResourceID = hotData[currenRowIndex]["ResourceID"],
        currentProperty = changes[changesIndex][1]
    TotalQty = "8";
    //        currentPropertyHead = ((changes[changesIndex][1]).split("."))[0],
    //        currentPropertyTail = ((changes[changesIndex][1]).split("."))[1]
    ;

    var usageRowIndex = -1, // startRowIndex = -1, endRowIndex = -1,
        hotDataCount = hotData.length;
    var usageRowIndexFlag = true; //, startRowIndexFlag = true; endRowIndexFlag = true;
    var usageQty = 0;

    for (var i = 0; i < hotDataCount; i++) {
        if (hotData[i]["ResourceID"] == currentResourceID && usageRowIndexFlag) {
            usageRowIndex = i;
            usageRowIndexFlag = false;
        }
        else if (hotData[i]["ResourceID"] == currentResourceID && !usageRowIndexFlag) {
            var changeIndex = isChange(changes, i, currentProperty);
            if (changeIndex >= 0)
                usageQty += parseFloat((changes[changeIndex][3] == "" || changes[changeIndex][3]==null) ? "0" : changes[changeIndex][3]);
            else
                usageQty += parseFloat((hotData[i][currentProperty] == "" || hotData[i][currentProperty]==null) ? "0" : hotData[i][currentProperty]);
        }
        else if (!usageRowIndexFlag) break;
    }

    if (usageRowIndex >= 0) {
        var existIndex = isChange(changes, usageRowIndex, currentProperty);
        if (existIndex >= 0) {
            TotalQty = ((changes[existIndex][2]).split("/"))[1];
            changes[existIndex][3] = usageQty + "/" + TotalQty;
        }
        else {
            changes.push([usageRowIndex, currentProperty, "", 
            Math.round(usageQty * 100) / 100 + "/" + ((hotData[usageRowIndex][currentProperty]).split("/"))[1]]);
        }

    }


    console.log(usageQty + "/" + TotalQty);
    console.log(changes);
    return changes;

};



//判断对应row 、Property位置是否在本次存在修改
//不存在 返回-1 存在返回在changes中的位置i
var isChange = function (changes, rowIndex, property) {
    for (var i = 0; i < changes.length; i++) {
        if (changes[i][0] === rowIndex && changes[i][1] === property) {
            return i;
        }               // else

    }
    return -1;
};

//重新计算各个使用量的值  
var reCalcUsage = function (hotData) {
    var usageRowIndex = 0,
        dayCount = DayCount, //天数
        usage = 0.0, //使用量
        totalUsage = 0; //总量，每个资源的可使用量(string type)
    

    for (var j = 0; j < dayCount; j++) {

        for (var i = 0; i < hotData.length; i++) {
            if (hotData[i]["ResourceID"] != getPreResource(hotData, i)) {
                if (hotData[usageRowIndex]["Day" + j] == null) {
                    console.log("sss"); return;
                }
                totalUsage = (hotData[usageRowIndex]["Day" + j]).split("/")[1];
               
                hotData[usageRowIndex]["Day" + j] = usage + "/" + totalUsage; //上一个汇总

                usageRowIndex = i;
                usage = 0.0;
            } else {
                usage += parseFloat((hotData[i]["Day" + j] == "" || hotData[i]["Day" + j] == null) ? "0" : hotData[i]["Day" + j])
            }


        }
        //这里有保留两位小数
        hotData[usageRowIndex]["Day" + j] = Math.round(usage * 100) / 100 + "/" + (hotData[usageRowIndex]["Day" + j]).split("/")[1]; //计算最后一个汇总
        usage = 0;
        usageRowIndex = 0;


    }



};

//获得上一格的资源名称，
var getPreResource = function (hotData, i) {
    if (i <= 0) { return " "; }
    return hotData[i - 1]["ResourceID"];

};

//显示颜色
var colorRenderer = function (instance, td, row, col, prop, value, cellProperties) {
    if (value != null && value.indexOf("/") >= 0) {
        var usage = parseFloat(value.split("/")[0]),
        total = parseFloat(value.split("/")[1]);
        if (usage == total) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            td.style.backgroundColor = 'yellow';
        }
        else if (usage > total) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            td.style.backgroundColor = 'red';
        }
        else {
            Handsontable.renderers.TextRenderer.apply(this, arguments);

        }
    }
    else Handsontable.renderers.TextRenderer.apply(this, arguments);

};

//显示颜色
var DatecolorRenderer = function (instance, td, row, col, prop, value, cellProperties) {
  var startDate, endDate, oldStartDate, oldEndDate
        oldDateSpan = hotData[row].OriginalDateTime;
    if (value != null && value.indexOf("\t\n") >= 0&&value.length!=1&&
    oldDateSpan != null && oldDateSpan.indexOf("\t\n") >= 0&&oldDateSpan.length!=1) {  
        
        if (value.indexOf("\t\n") > 0 ) {
            startDate = new Date(value.split('\t\n')[0]);
        }

        if (value.indexOf("\t\n") < value.length) {
            endDate = new Date(value.split('\t\n')[1]);
        }

        if (oldDateSpan.indexOf("\t\n") > 0) {
            oldStartDate = new Date(oldDateSpan.split('\t\n')[0]);
        }

        if (oldDateSpan.indexOf("\t\n") < oldDateSpan.length) {
            oldEndDate = new Date(oldDateSpan.split('\t\n')[1]);
        }

        if (startDate && oldStartDate && startDate < oldStartDate) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            td.style.backgroundColor = 'red';
        }
        else if (endDate&&oldEndDate&&endDate>oldEndDate) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            td.style.backgroundColor = 'red';
        }
        else {
            Handsontable.renderers.TextRenderer.apply(this, arguments);

        }
    }
    else Handsontable.renderers.TextRenderer.apply(this, arguments);

};

//合并单元格
var reMerge = function (hotData) {
    //1 prepare data
    var sumRow = 0, count = 0, merge = new Array();
    for (var i = 0; i < hotData.length; i++) {
        if (hotData[i]["ResourceID"] != getPreResource(hotData, i)) {
            if (i > 0) {
                merge.push({ row: sumRow, col: 0, rowspan: count, colspan: 1 })
            }
            sumRow = i;
            count = 1;
        } else {
            count++;
        }

        if (i == hotData.length - 1) {
            merge.push({ row: sumRow, col: 0, rowspan: count, colspan: 1 })
        }
    }

    //set center middle format居中
    for (var ii = 0; ii < merge.length; ii++) {
        hot.setCellMeta(merge[ii]["row"], 0, "className", "htCenter htMiddle")
    }

    //set merge cells
    hot.mergeCells = new Handsontable.MergeCells(merge);
    hot.render();
    //return merge; 
};




//USED　FUNCTION hotData,reCalcUsage
var beforeRowMoveFunction = function (oldIndex, newIndex) {
    var ScheduleObjIds = [];
    //ScheduleObjId = hotData[oldIndex].Id;
    //是资源，则不让移动
    if (hotData[oldIndex].Id > 0) {
        ScheduleObjIds.push(hotData[oldIndex].Id);
    }
    else {
        return false;
    }

    //如果移动的资源不是可用的目标资源  则 跳出
    var canMove = false;
    var schedulingObj = LimitedSchedule.helper.getObjFromObjArrayByID(doneData, hotData[oldIndex].Id);
    if (schedulingObj) {
        for (var i = 0; i < schedulingObj.MyScheduleResource.length; i++) {
            if (schedulingObj.MyScheduleResource[i].ResourceID === hotData[newIndex].ResourceID) {
                canMove = true;
            }
        }
    }

    if (!canMove) {
        LimitedSchedule.helper.alertWin("不是可用资源，不允许移动！");
        return false;
    }

    if (oldIndex == newIndex) return;
    //这个代码hot里面已经有处理了，所以此处不需要
    //    else if (oldIndex < newIndex) {
    //        newIndex--; //如果旧的数据在上面，下方的index要减去1
    //    }

    //删除旧的数据
    //新的数据进行排产
    deleteScheduleFuntion(gridData, hotData, doneData, hot, oldIndex);

    for (var j = doneData.length - 1; j >= 0; j--) {
        if (doneData[j]["Id"] === hotData[oldIndex]["Id"]) {
            doneData[j].IsReschedule = false;
            gridData.push(doneData[j]);
            doneData.splice(j, 1);
            break;
        }
    }

    hotData.splice(oldIndex, 1);
    lastInsertedScheduleId = "";


    maxRow--; //最大行做对应调整 TODO 目前这个值还是不准确


    scheduleFuntion(gridData, hotData, doneData, ScheduleObjIds, hot, newIndex);


    //reMerge(hotData);
    //setDroppable(gridData, doneData, hot);
    return false; //不执行handsontable后续的操作

};




