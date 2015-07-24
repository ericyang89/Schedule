


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

    if (result.length===0) {
        alert("没有异常资源！");
    }
    return result;
};


var getResourceById = function (ResourceData, id) {
    for (var i = 0; i < ResourceData.length; i++) {
        if (id&&ResourceData[i].Id==id) {
            return ResourceData[i];            
        }
    }
};