var size = 0;
var placement = 'point';
function categories_Geomorphology_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Beach(Coastal Plain)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,4,3,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Channel bar(Flood Plain)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(184,29,2,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Coastal Plain':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,68,10,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Denudational Hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,126,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Linear ridge(Lower Plateau)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,185,56,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower Plateau (Lateritic) - Dissected':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(218,227,54,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Piedmont Zone':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(164,252,60,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Point bar(Flood Plain)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(88,251,116,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual Hill':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(27,229,181,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual Mount':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(40,188,235,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rock Exposure':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(70,134,251,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Valley Fill':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(67,79,188,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Water Body':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(48,18,59,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Geomorphology_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAME");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Geomorphology_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
