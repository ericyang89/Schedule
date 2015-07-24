
//the varables  blow are for coding Only
//var ShowFlag = "abnormal";//左则jqgrid展示内容标志
//var DayCount = 0, StartDate = "";//格式 “2015-12-12”
//var ResourceData = [], gridDataAll = [], gridDataAbnormal = [];//资源数据，所有资源数据，异常资源数据
//ResourceData = [{ "Id": 1001505279075961, "ResourceName": "人工", "DefaultWorkHour": 9.000000000, "MyResourceData": [{ "Date": "2015-06-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-08", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-09", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-10", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-11", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-12", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-13", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-31", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }] }, { "Id": 1001505279075962, "ResourceName": "L多工厂协同", "DefaultWorkHour": 9.000000000, "MyResourceData": [{ "Date": "2015-06-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-08", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-09", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-10", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-11", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-12", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-13", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-31", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }] }, { "Id": 1001505279075963, "ResourceName": "资源A", "DefaultWorkHour": 9.000000000, "MyResourceData": [{ "Date": "2015-06-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-08", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-09", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-10", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-11", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-12", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-13", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-31", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }] }, { "Id": 1001505279075964, "ResourceName": "资源B", "DefaultWorkHour": 9.000000000, "MyResourceData": [{ "Date": "2015-06-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-08", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-09", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-10", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-11", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-12", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-13", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-31", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }] }, { "Id": 1001505279075965, "ResourceName": "资源A", "DefaultWorkHour": 9.000000000, "MyResourceData": [{ "Date": "2015-06-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-08", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-09", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-10", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-11", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-12", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-13", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-31", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }] }, { "Id": 1001505279075966, "ResourceName": "资源AA", "DefaultWorkHour": 9.000000000, "MyResourceData": [{ "Date": "2015-06-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-08", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-09", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-10", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-11", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-12", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-13", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-31", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }] }, { "Id": 1001505279075967, "ResourceName": "资源BB", "DefaultWorkHour": 9.000000000, "MyResourceData": [{ "Date": "2015-06-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-08", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-09", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-10", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-11", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-12", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-13", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-31", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }] }, { "Id": 1001505279075968, "ResourceName": "机台1", "DefaultWorkHour": 9.000000000, "MyResourceData": [{ "Date": "2015-06-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-07-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-07-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-07-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-07-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-07-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 1.000000000 }, { "Date": "2015-07-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-08", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-09", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-10", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-11", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-12", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-13", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-31", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }] }, { "Id": 1001505279075969, "ResourceName": "机台2", "DefaultWorkHour": 9.000000000, "MyResourceData": [{ "Date": "2015-06-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 9.000000000 }, { "Date": "2015-06-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 3.000000000 }, { "Date": "2015-06-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-08", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-09", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-10", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-11", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-12", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-13", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-31", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }] }, { "Id": 1001505279075970, "ResourceName": "订单资源", "DefaultWorkHour": 9.000000000, "MyResourceData": [{ "Date": "2015-06-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-06-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-08", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-09", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-10", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-11", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-12", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-13", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-14", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-15", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-16", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-17", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-18", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-19", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-20", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-21", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-22", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-23", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-24", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-25", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-26", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-27", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-28", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-29", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-30", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-07-31", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-01", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-02", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-03", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-04", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-05", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-06", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }, { "Date": "2015-08-07", "ResourceTotalQty": 9.000000000, "ResourceUsedQty": 0.000000000 }] }];

//获取远程数据
//depend on Jquery
var getdata = function () {

    $.ajax({
        type: "GET",
        url: LimitedSchedule.helper.getServiceAddress("/WebForm1.aspx?Method=GetCalendarEvents"), //"JS/CalendarEvents.json", //
        contentType: 'text/json',
        async: false, //暂时不用异步的方式
        //dataType: "json",
        success: function (data) {
            //U9在Response的出来的字符串后面带一个网页，通过字符串分割的方式去掉
             ResourceData = eval(data.substr(0, data.indexOf("<!DOCTYPE")));
            //ResourceData = data;
            // console.log(data);
        }

    });
 };

 var saveAll = function () {
     allSaveFunction(ResourceData);
 };

 var allSaveFunction = function (ResourceData) {
     $.ajax({
         type: "POST",
         url: LimitedSchedule.helper.getServiceAddress("/WebForm1.aspx?Method=SaveCalendarEvents"),
         contentType: "text/json",
         data: JSON.stringify(ResourceData),
         //async: false,
         success: function (backData) {
             saveSucceed = true;
             alert("保存成功！");
             //....
         },
         error: function myfunction(request, errorInfo) {
             window.console.log(errorInfo);
         }

     });
 };



var setLayout = function () {
    //页面布局
    $('body').layout({
        applyDefaultStyles: true
        , west__size: 300
        // , west__initClosed: true
        , west__spacing_closed: 8
        , west__spacing_open: 8
        , north__spacing_closed: 0
        , north__spacing_open: 0
        //, west__togglerContent_open: '<div class="ui-icon"></div>' //加箭头 未实现

    });

};


var setJqGrid = function () {


    $("#jqGrid").jqGrid({
        data: ResourceData,
        datatype: "local",
        colModel: [
            { label: '隐藏 ', name: 'Id', hidden: true, key: true },
            { label: '资源', name: 'ResourceName', width: 70 }
            //, { label: '数量', name: 'DefaultWorkHour', width: 40 },
        ],
        //loadonce: true,
        multiSort: true,
        onCellSelect: function (rowId) {
            currentResourceID = rowId;
            currentEvent = calendarEventCreator(ResourceData, rowId);
            var calendar = $('#calendar');
            // Clear all events
            calendar.fullCalendar('removeEvents', function (e) {
                return true;
            });
            // Renew event sources
            calendar.fullCalendar('addEventSource', currentEvent);

        },

        width: 280,
        height: 'auto',
        rowNum: 15,
        //viewrecords: true,
        pager: "#jqGridPager"
        //, caption: "Amounts of each product category"
    });

    jQuery("#jqGrid")
            .navGrid("#jqGridPager", { edit: false, add: false, del: false, search: true, refresh: false })
            .navButtonAdd("#jqGridPager", {
                caption: "异常资源&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", onClickButton: function () {
                    //alert("Deleting Row");
                    //this.buttonicon = "ui-icon-newwin";
                    //this.title = "阿斯蒂芬";
                    if (ShowFlag === "abnormal") {
                        $("#jqGridPager table table td#abnormalResource").attr("title", "显示所有资源");
                        $("#jqGridPager table table td#abnormalResource div.ui-pg-div").html("<span class='ui-icon ui-icon-newwin'></span>所有资源&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                        //TODO
                        //var g = $("#jqGrid");
                        //g.setGridParam({ datatype: 'local', data: gridDataAbnormal });
                        //g[0].refreshIndex();
                        //g.trigger("reloadGrid");
                        // gridDataAbnormal=getAbnormalDataByAll(ResourceData);
                        jQuery('#jqGrid').jqGrid('clearGridData');
                        jQuery('#jqGrid').jqGrid('setGridParam', { data: getAbnormalDataByAll(ResourceData) });
                        jQuery('#jqGrid').trigger('reloadGrid');

                        ShowFlag = "all";

                    } else {
                        $("#jqGridPager table table td#abnormalResource").attr("title", "只显示异常资源");
                        $("#jqGridPager table table td#abnormalResource div.ui-pg-div").html("<span class='ui-icon ui-icon-alert'></span>异常资源&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                        //TODO the code below do NOT work
                        //var g = $("#jqGrid");
                        //g.setGridParam({ data: gridDataAll });
                        //g[0].refreshIndex();
                        //g.trigger("reloadGrid");

                        jQuery('#jqGrid').jqGrid('clearGridData');
                        jQuery('#jqGrid').jqGrid('setGridParam', { data: ResourceData });
                        jQuery('#jqGrid').trigger('reloadGrid');

                        ShowFlag = "abnormal"
                    }

                }, position: "last", title: "只显示异常资源", buttonicon: "ui-icon-alert", cursor: "pointer", id: "abnormalResource"//
            });// buttonicon: "images/doc.png",

};

//依赖jquery
var setFullCalender = function () {

    var addEvents = function (start, end, jsEvent, view) {

        if (!currentResourceID) {
            alert("请线选中资源！");
        } else {
            $("#scheduleDialog").dialog({
                //autoOpen: false,
                height: 200,
                width: 350,
                modal: true,
                buttons: {
                    "确定": function () {
                        var dialogResult;

                        if ($("#adjustQty").val() != 0) {
                            dialogResult = $("#adjustQty").val();
                        }
                        else if ($("#rest").is(":checked")) {
                            dialogResult = "rest";
                        }
                        //                        else if ($("#maintance").is(":checked")) {
                        //                            dialogResult = "maintance";
                        //                        }

                        if (dialogResult) {


                            //TODO 后台处理
                            var currentDaySpan = (end - start) / (1000 * 3600 * 24);
                            var currentResource = getResourceById(ResourceData, currentResourceID);
                            var startDateString = ((start._d.getYear() < 1900) ? (1900 + start._d.getYear()) : start._d.getYear()) + "-" +
                                (start._d.getMonth() >= 9 ? (start._d.getMonth() + 1) : ("0" + (start._d.getMonth() + 1))) + "-" +
                                (start._d.getDate() >= 10 ? start._d.getDate() : ("0" + start._d.getDate()));
                            var endDateString = ((end._d.getYear() < 1900) ? (1900 + end._d.getYear()) : end._d.getYear()) + "-" +
                                (end._d.getMonth() >= 9 ? (end._d.getMonth() + 1) : ("0" + (end._d.getMonth() + 1))) + "-" +
                                (end._d.getDate() >= 10 ? end._d.getDate() : ("0" + end._d.getDate()));


                            for (var i = 0; i < currentResource.MyResourceData.length; i++) {
                                var date = currentResource.MyResourceData[i].Date;
                                if (date >= startDateString && date < endDateString) {

                                    switch (dialogResult) {
                                        case "rest":
                                            currentResource.MyResourceData[i].ResourceTotalQty = -1;
                                            //currentResource.MyResourceData[i].ResourceTotalQty += (parseFloat(dialogResult)+1);
                                            break;
                                        //                                        case "maintance":  
                                        //                                            currentResource.MyResourceData[i].ResourceTotalQty = -2;  
                                        //                                            break;  
                                        default:
                                            //                                            if (parseFloat(dialogResult) < 5) {

                                            if (currentResource.MyResourceData[i].ResourceTotalQty < 0) {

                                                currentResource.MyResourceData[i].ResourceTotalQty = 0;
                                            }
                                            currentResource.MyResourceData[i].ResourceTotalQty += parseFloat(dialogResult);
                                            //如果产能调小后，导致小于0，则为0
                                            if (currentResource.MyResourceData[i].ResourceTotalQty < 0) {
                                                currentResource.MyResourceData[i].ResourceTotalQty = 0;
                                            }

                                   

                                            break;

                                    }



                                }
                            }

                            if (start < StartDate || (end - start > DayCount * 1000 * 3600 * 24)) {
                                alert("超出界限的部分没有做修改！");
                            }

                            var calendar = $('#calendar');
                            calendar.fullCalendar('removeEvents', function (e) {
                                return true;
                            });
                            calendar.fullCalendar('addEventSource', calendarEventCreator(ResourceData, currentResourceID));
                        }





                        $("#scheduleDialog").dialog("close");

                    },
                    "取消": function () {
                        $("#scheduleDialog").dialog("close");
                    }
                },
                close: function () {

                    $("#adjustQty").val("0");
                    $("#maintance").removeAttr("checked");
                    $("#rest").removeAttr("checked");

                }
            });




        }




        //$('#calendar').fullCalendar('unselect');

        //console.log($('#calendar').fullCalendar('clientEvents'));
    }

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month'// 'month,agendaWeek,agendaDay'
        },
        defaultDate: StartDate,
        ///////////////////////////////////for selectable
        selectable: true,
        selectHelper: true,
        select: addEvents//,
        ///////////////////////////////////////////////////
        //businessHours: true, // display business hours
        // editable: true,
        // events: [{}],//[{title:"请先在左侧Grid中选择资源【双击资源名称】",start:StartDate,end:new Date(    StartDate.getTime() + DayCount* 24 * 60 * 60 * 1000)}],
        //eventColor: '#378006'
    });


};

var setDefaultValue = function () {
    //getAbnormalDataByAll(ResourceData);

    //DayCount  StartDate 的赋值
    if (ResourceData && ResourceData[0]
        && ResourceData[0].MyResourceData) {
        DayCount = ResourceData[0].MyResourceData.length;
        StartDate = new Date(ResourceData[0].MyResourceData[0].Date);

    }
    else {
        DayCount = 30;
        StartDate = new Date();
    }
};

//@Params:ResourceData,id
//returm an Object Array
var calendarEventCreator = function (ResourceData, id) {
    result = [];
    for (var i = 0; i < ResourceData.length; i++) {
        var a = 1;
        if (id == ResourceData[i].Id) {
            var b = 2;
            for (var j = 0; j < ResourceData[i].MyResourceData.length; j++) {
                var currentEvent = {};
                switch (ResourceData[i].MyResourceData[j].ResourceTotalQty) {
                    case -1:
                        currentEvent.title = ResourceData[i].ResourceName + " -[休息]"
                        currentEvent.start = ResourceData[i].MyResourceData[j].Date;
                        currentEvent.end = ResourceData[i].MyResourceData[j].Date;
                        currentEvent.color = "#CCCCCC";
                        result.push(currentEvent);
                        break;
                    case -2:
                        currentEvent.title = ResourceData[i].ResourceName + " -[设备维护]"
                        currentEvent.start = ResourceData[i].MyResourceData[j].Date;
                        currentEvent.end = ResourceData[i].MyResourceData[j].Date;
                        currentEvent.color = "#FF8F35";
                        result.push(currentEvent);
                        break;


                    default:
                        currentEvent.title = ResourceData[i].ResourceName + " - " +
                            ResourceData[i].MyResourceData[j].ResourceUsedQty + "/"
                            + ResourceData[i].MyResourceData[j].ResourceTotalQty;
                        currentEvent.start = ResourceData[i].MyResourceData[j].Date;
                        currentEvent.end = ResourceData[i].MyResourceData[j].Date;
                        if (ResourceData[i].MyResourceData[j].ResourceUsedQty <=
                            ResourceData[i].MyResourceData[j].ResourceTotalQty) {
                            currentEvent.color = "#007FF7";
                        }
                        else {
                            currentEvent.color = "#FF0000";
                        }
                        result.push(currentEvent);
                        break;
                }

            }

            break;
        }
    }

    return result;
};





var getAbnormalDataByAll = function (ResourceData) {
    var result = [];
    //var isAbnormal = false;
    //this is the ABNORMAL condition
    for (var i = 0; i < ResourceData.length; i++) {
        if (ResourceData[i].MyResourceData) {

            for (var j = 0; j < ResourceData[i].MyResourceData.length; j++) {
                var item = ResourceData[i].MyResourceData[j];
                if (item.ResourceUsedQty > item.ResourceTotalQty && item.ResourceTotalQty > 0) {
                    result.push(ResourceData[i]);
                    break;
                }
            }
        }
    }

    if (result.length === 0) {
        alert("没有异常资源！");
    }
    return result;
};


var getResourceById = function (ResourceData, id) {
    for (var i = 0; i < ResourceData.length; i++) {
        if (id && ResourceData[i].Id == id) {
            return ResourceData[i];
        }
    }
};

