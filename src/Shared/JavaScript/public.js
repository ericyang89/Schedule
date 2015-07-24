var LimitedSchedule = {};
LimitedSchedule.helper = {};

LimitedSchedule.helper.ScheudleAddress = "../../LimitedSchedule/Schedule/schedule.html";
LimitedSchedule.helper.CalendarAddress = "../../LimitedSchedule/Calendar/calendar.html";
LimitedSchedule.helper.SetupAddress = "../../LimitedSchedule/Setup/Setup.html";




LimitedSchedule.helper.getServiceAddress = function (relativePath) {
    var result;
    var baseAddress = "/Portal"; //U9 portal 的路径 ,如果不是本地，前面需要ip
    result = baseAddress + relativePath;
    //通过url传值的方式 把当前方案传到后台
    if (localStorage.getItem("scenario") && relativePath != "/ScheduleSetup.xml") {
        result = result+"&scenario=" + localStorage.getItem("scenario");
    }
    return result;
}

LimitedSchedule.helper.checkUserInfo = function () {
    if (!localStorage.getItem("scenario")) {
        //alert("没有找到用户信息！");
        //导航到设置页面
        location.href = LimitedSchedule.helper.SetupAddress;
    }
};

//address navigate
//排产
LimitedSchedule.helper.toSchedule = function () {
    location.href = LimitedSchedule.helper.ScheudleAddress;
};

//产能调整
LimitedSchedule.helper.toCalendar = function () {
    //location.href = LimitedSchedule.helper.CalendarAddress
        //判断当前页面是否是排产页面
        if (typeof(hotData)!="undefined") {

    
        var result = confirm("当前页面未保存，保存后跳转？");
        if (result) {
            nextUrl = LimitedSchedule.helper.CalendarAddress;
            saveAll();//排产界面
        } else {
            window.open(LimitedSchedule.helper.CalendarAddress);
        }
    } 
    else {
            location.href = LimitedSchedule.helper.CalendarAddress;
    }

};
//设置
LimitedSchedule.helper.toSetup = function () {
    location.href = LimitedSchedule.helper.SetupAddress;
};


//alert a window ,and close in 3 seconds
//depend on Jquery UI

LimitedSchedule.helper.alertWin = function (text) {
//find a div as a container of alert window;if no div,create one
    if (!$("#alertWin").length) {
        $("body").append("<div id='alertWin'></div>")
    }

    $("#alertWin").html(text);
    $("#alertWin").dialog({
        title: "3秒后自动窗口",
        height: 140,
        modal: true,
        hide: { effect: "fade", duration: 500 },
        open: function (event, ui) {
            setTimeout("$('#alertWin').dialog('close')", 3000);
        }
    });

};

///通过Id 从对象数字中获取对象  一定是Id属性
LimitedSchedule.helper.getObjFromObjArrayByID = function (ObjList, id) {

    for (var i = 0; i < ObjList.length; i++) {
        if (ObjList[i].Id == id)
        { return ObjList[i]; }

    }
    return null;

};

//通过资源ID获取对应资源对象，包括该资源的日占用量
//ResourceArray 为hotData，或其clone
//返回一个对象，有Index和Obj两个属性 分别为数字和对象类型
LimitedSchedule.helper.getResouceByID = function (ResourceArray, resourceId) {

    for (var i = 0; i < ResourceArray.length; i++) {
        if (ResourceArray[i].Id == 0 && ResourceArray[i].ResourceID == resourceId)
        { return { "Index": i, "Obj": ResourceArray[i] }; }
    }

    return null;


};

//减，解决小数计算不准确的问题
//返回a-b的值；
LimitedSchedule.helper.myMinus = function (a, b) {
    return (a * 1e10 - b * 1e10) / 1e10;
};