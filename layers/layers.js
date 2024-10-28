ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8564296.792608, 925470.683087, 8592866.657646, 941364.063972]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Geomorphology_1 = new ol.format.GeoJSON();
var features_Geomorphology_1 = format_Geomorphology_1.readFeatures(json_Geomorphology_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorphology_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorphology_1.addFeatures(features_Geomorphology_1);
var lyr_Geomorphology_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorphology_1, 
                style: style_Geomorphology_1,
                popuplayertitle: "Geomorphology",
                interactive: true,
    title: 'Geomorphology<br />\
    <img src="styles/legend/Geomorphology_1_0.png" /> Beach(Coastal Plain)<br />\
    <img src="styles/legend/Geomorphology_1_1.png" /> Channel bar(Flood Plain)<br />\
    <img src="styles/legend/Geomorphology_1_2.png" /> Coastal Plain<br />\
    <img src="styles/legend/Geomorphology_1_3.png" /> Denudational Hills<br />\
    <img src="styles/legend/Geomorphology_1_4.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/Geomorphology_1_5.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/Geomorphology_1_6.png" /> Piedmont Zone<br />\
    <img src="styles/legend/Geomorphology_1_7.png" /> Point bar(Flood Plain)<br />\
    <img src="styles/legend/Geomorphology_1_8.png" /> Residual Hill<br />\
    <img src="styles/legend/Geomorphology_1_9.png" /> Residual Mount<br />\
    <img src="styles/legend/Geomorphology_1_10.png" /> Rock Exposure<br />\
    <img src="styles/legend/Geomorphology_1_11.png" /> Valley Fill<br />\
    <img src="styles/legend/Geomorphology_1_12.png" /> Water Body<br />'
        });
var format_Drainage_2 = new ol.format.GeoJSON();
var features_Drainage_2 = format_Drainage_2.readFeatures(json_Drainage_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drainage_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drainage_2.addFeatures(features_Drainage_2);
var lyr_Drainage_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drainage_2, 
                style: style_Drainage_2,
                popuplayertitle: "Drainage",
                interactive: true,
    title: 'Drainage<br />\
    <img src="styles/legend/Drainage_2_0.png" /> 1<br />\
    <img src="styles/legend/Drainage_2_1.png" /> 2<br />\
    <img src="styles/legend/Drainage_2_2.png" /> 3<br />\
    <img src="styles/legend/Drainage_2_3.png" /> 4<br />\
    <img src="styles/legend/Drainage_2_4.png" /> 0<br />'
        });
var format_Road_3 = new ol.format.GeoJSON();
var features_Road_3 = format_Road_3.readFeatures(json_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_3.addFeatures(features_Road_3);
var lyr_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_3, 
                style: style_Road_3,
                popuplayertitle: "Road",
                interactive: true,
                title: '<img src="styles/legend/Road_3.png" /> Road'
            });
var format_Railway_4 = new ol.format.GeoJSON();
var features_Railway_4 = format_Railway_4.readFeatures(json_Railway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_4.addFeatures(features_Railway_4);
var lyr_Railway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_4, 
                style: style_Railway_4,
                popuplayertitle: "Railway",
                interactive: true,
                title: '<img src="styles/legend/Railway_4.png" /> Railway'
            });
var format_Junctions_5 = new ol.format.GeoJSON();
var features_Junctions_5 = format_Junctions_5.readFeatures(json_Junctions_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Junctions_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Junctions_5.addFeatures(features_Junctions_5);
var lyr_Junctions_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Junctions_5, 
                style: style_Junctions_5,
                popuplayertitle: "Junctions",
                interactive: true,
                title: '<img src="styles/legend/Junctions_5.png" /> Junctions'
            });
var format_ImportantPlaces_6 = new ol.format.GeoJSON();
var features_ImportantPlaces_6 = format_ImportantPlaces_6.readFeatures(json_ImportantPlaces_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImportantPlaces_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImportantPlaces_6.addFeatures(features_ImportantPlaces_6);
var lyr_ImportantPlaces_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImportantPlaces_6, 
                style: style_ImportantPlaces_6,
                popuplayertitle: "Important Places",
                interactive: true,
                title: '<img src="styles/legend/ImportantPlaces_6.png" /> Important Places'
            });
var format_Neyyattinkara_7 = new ol.format.GeoJSON();
var features_Neyyattinkara_7 = format_Neyyattinkara_7.readFeatures(json_Neyyattinkara_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neyyattinkara_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neyyattinkara_7.addFeatures(features_Neyyattinkara_7);
var lyr_Neyyattinkara_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neyyattinkara_7, 
                style: style_Neyyattinkara_7,
                popuplayertitle: "Neyyattinkara",
                interactive: true,
                title: '<img src="styles/legend/Neyyattinkara_7.png" /> Neyyattinkara'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Geomorphology_1.setVisible(true);lyr_Drainage_2.setVisible(true);lyr_Road_3.setVisible(true);lyr_Railway_4.setVisible(true);lyr_Junctions_5.setVisible(true);lyr_ImportantPlaces_6.setVisible(true);lyr_Neyyattinkara_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Geomorphology_1,lyr_Drainage_2,lyr_Road_3,lyr_Railway_4,lyr_Junctions_5,lyr_ImportantPlaces_6,lyr_Neyyattinkara_7];
lyr_Geomorphology_1.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Drainage_2.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_Road_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Length': 'Length', });
lyr_Railway_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'type': 'type', });
lyr_Junctions_5.set('fieldAliases', {'fid': 'fid', 'SETNAME': 'SETNAME', 'LAT0': 'LAT0', 'LONG': 'LONG', });
lyr_ImportantPlaces_6.set('fieldAliases', {'Name': 'Name', 'LinkID': 'LinkID', 'Photo': 'Photo', });
lyr_Neyyattinkara_7.set('fieldAliases', {'admin_leve': 'admin_leve', 'boundary': 'boundary', 'name': 'name', 'name_en': 'name_en', 'name_ml': 'name_ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_Geomorphology_1.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Drainage_2.set('fieldImages', {'fid': 'TextEdit', 'ORDER1': 'Range', });
lyr_Road_3.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_Railway_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'type': 'TextEdit', });
lyr_Junctions_5.set('fieldImages', {'fid': 'TextEdit', 'SETNAME': 'TextEdit', 'LAT0': 'TextEdit', 'LONG': 'TextEdit', });
lyr_ImportantPlaces_6.set('fieldImages', {'Name': 'TextEdit', 'LinkID': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_Neyyattinkara_7.set('fieldImages', {'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'name_ml': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_Geomorphology_1.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Drainage_2.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_Road_3.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'Length': 'no label', });
lyr_Railway_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'type': 'no label', });
lyr_Junctions_5.set('fieldLabels', {'fid': 'no label', 'SETNAME': 'no label', 'LAT0': 'no label', 'LONG': 'no label', });
lyr_ImportantPlaces_6.set('fieldLabels', {'Name': 'no label', 'LinkID': 'no label', 'Photo': 'no label', });
lyr_Neyyattinkara_7.set('fieldLabels', {'admin_leve': 'no label', 'boundary': 'no label', 'name': 'no label', 'name_en': 'no label', 'name_ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_Neyyattinkara_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});