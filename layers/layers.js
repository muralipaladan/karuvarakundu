ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8496467.915323, 1245093.702383, 8497246.296103, 1245482.582661]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_VillageBoundary_3 = new ol.format.GeoJSON();
var features_VillageBoundary_3 = format_VillageBoundary_3.readFeatures(json_VillageBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VillageBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillageBoundary_3.addFeatures(features_VillageBoundary_3);
var lyr_VillageBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillageBoundary_3, 
                style: style_VillageBoundary_3,
                popuplayertitle: 'Village Boundary',
                interactive: false,
                title: '<img src="styles/legend/VillageBoundary_3.png" /> Village Boundary'
            });
var format_Surveyline_4 = new ol.format.GeoJSON();
var features_Surveyline_4 = format_Surveyline_4.readFeatures(json_Surveyline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surveyline_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surveyline_4.addFeatures(features_Surveyline_4);
var lyr_Surveyline_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surveyline_4, 
                style: style_Surveyline_4,
                popuplayertitle: 'Survey line',
                interactive: false,
                title: '<img src="styles/legend/Surveyline_4.png" /> Survey line'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_VillageBoundary_3.setVisible(true);lyr_Surveyline_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleRoad_1,lyr_GoogleHybrid_2,lyr_VillageBoundary_3,lyr_Surveyline_4];
lyr_VillageBoundary_3.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'District': 'District', 'LSGD': 'LSGD', 'Lsgd_Type': 'Lsgd_Type', 'Mob_No': 'Mob_No', 'ORIG_FID': 'ORIG_FID', 'Remarks': 'Remarks', 'Shape_Area': 'Shape_Area', 'Shape_Leng': 'Shape_Leng', 'Surveyor': 'Surveyor', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'id': 'id', });
lyr_Surveyline_4.set('fieldAliases', {'name': 'name', });
lyr_VillageBoundary_3.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Mob_No': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Remarks': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Surveyor': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'id': 'TextEdit', });
lyr_Surveyline_4.set('fieldImages', {'name': 'TextEdit', });
lyr_VillageBoundary_3.set('fieldLabels', {'name': 'no label', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Lsgd_Type': 'no label', 'Mob_No': 'no label', 'ORIG_FID': 'no label', 'Remarks': 'no label', 'Shape_Area': 'no label', 'Shape_Leng': 'no label', 'Surveyor': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'id': 'no label', });
lyr_Surveyline_4.set('fieldLabels', {'name': 'inline label - always visible', });
lyr_Surveyline_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});