var setLayout = function () {
    //页面布局
    $('body').layout({
        applyDefaultStyles: true
        , west__size: 350
        // , west__initClosed: true
        , west__spacing_closed: 8
        , west__spacing_open: 8
        , north__spacing_closed: 0
        , north__spacing_open: 0
        //, west__togglerContent_open: '<div class="ui-icon"></div>' //加箭头 未实现

    });

};

var setTabs = function () {
    $("#tabs").tabs();
    if (!localStorage.getItem("scenario")) {
        alert("not login");
        $("#tabs").tabs({ active: 2 }); //如果没有登录信息，到设置页面时激活这个tab，index从0开始
    }
    if (localStorage.getItem("userName") && localStorage.getItem("scenario")) {
        $("#userName").val(localStorage.getItem("userName"));
        $("#scenario").val(localStorage.getItem("scenario"));
    }
};

var setAccordion = function () {
    $("#accordion").accordion({ collapsible: true, active: false, heightStyle: "content" });

    $('.ui-accordion-header').removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top').attr({ 'aria-selected': 'true', 'tabindex': '0' });
    $('.ui-accordion-header .ui-icon').removeClass('ui-icon-triangle-1-e').addClass('ui-icon-triangle-1-s');
    $('.ui-accordion-content').addClass('ui-accordion-content-active').attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }).show();

};

var setSelectivities = function () {
    $('#gridShowItems').selectivity({
        items: ['单号', '物料', '数量', "交期"/*, ...*/],
        multiple: true,
        backspaceHighlightsBeforeDelete: true,
        closeOnSelect: false,
        placeholder: '输入或选择……'
    });



    $('#gridDefaultOrder').selectivity({
        items: [
            { id: 1, text: '单号|升' }, { id: 2, text: '单号|降' },
            { id: 3, text: '物料|升' }, { id: 4, text: '物料|降' },
            { id: 5, text: '单号|升' }, { id: 6, text: '单号|降' },
            { id: 7, text: '物料|升' }, { id: 8, text: '物料|降' }
        ],
        //'数量|升', '数量|降', "交期|升", "交期|降"/*, ...*/],
        multiple: true,
        placeholder: '输入或选择……'
    });

    $('#gridDefaultOrder').on("selectivity-selecting", function myfunction(e) {
        var currentID = e["id"];
        var values = $('#gridDefaultOrder').selectivity('value');
        //升序和降序的只保留一个  id为1 和 2 的不能并存
        if (values.length > 0) {
            for (var i = 0; i < values.length; i++) {
                if (Math.round(values[i] / 2) === Math.round(currentID / 2)) {
                    $('#gridDefaultOrder').selectivity('remove', values[i]);
                }
            }
        }


    });

    $('#hotShowItems').selectivity({
        items: ['单号', '物料', '数量', "交期"/*, ...*/],
        multiple: true,
        backspaceHighlightsBeforeDelete: true,
        closeOnSelect: false,
        placeholder: '输入或选择……'
    });

    $('#capacityUnit').selectivity({
        items: ['时间', '产量'/*, ...*/],
        showSearchInputInDropdown: false,
        // multiple: true,
        backspaceHighlightsBeforeDelete: true,
        // closeOnSelect: false,
        value: '时间',
        placeholder: '输入或选择……'
    });
};


var saveUser = function () {
    "use strict"
    var saveLogic = function () {       
        var scenario = document.getElementById("scenario").value;
        if (scenario) {          
            localStorage.setItem("scenario", scenario);
//            console.log(history.length);
            //history.back();
            location.href="../Schedule/schedule.html";

        }

    };

    var saveBtn = document.getElementById("saveUser");
    saveBtn.addEventListener("click", saveLogic, false);
};

var getScenarios = function () {
    $.get(LimitedSchedule.helper.getServiceAddress("/ScheduleSetup.xml"), function (Scenarioxml) {
        $(Scenarioxml).find("Scenario").each(function () {
            $("#scenario").append("<option>" + this.attributes[0].value + "</option>");
        });
    });
};
