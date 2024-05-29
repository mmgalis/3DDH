ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28992").setExtent([26071.561421, 410654.272764, 199269.013566, 521152.183994]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TBP003_1 = new ol.format.GeoJSON();
var features_TBP003_1 = format_TBP003_1.readFeatures(json_TBP003_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_TBP003_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TBP003_1.addFeatures(features_TBP003_1);
var lyr_TBP003_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TBP003_1, 
                style: style_TBP003_1,
                popuplayertitle: "TBP003",
                interactive: true,
                title: '<img src="styles/legend/TBP003_1.png" /> TBP003'
            });
var format_TBP001_2 = new ol.format.GeoJSON();
var features_TBP001_2 = format_TBP001_2.readFeatures(json_TBP001_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_TBP001_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TBP001_2.addFeatures(features_TBP001_2);
var lyr_TBP001_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TBP001_2, 
                style: style_TBP001_2,
                popuplayertitle: "TBP001",
                interactive: true,
                title: '<img src="styles/legend/TBP001_2.png" /> TBP001'
            });
var format_TBP002_3 = new ol.format.GeoJSON();
var features_TBP002_3 = format_TBP002_3.readFeatures(json_TBP002_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_TBP002_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TBP002_3.addFeatures(features_TBP002_3);
var lyr_TBP002_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TBP002_3, 
                style: style_TBP002_3,
                popuplayertitle: "TBP002",
                interactive: true,
                title: '<img src="styles/legend/TBP002_3.png" /> TBP002'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TBP003_1.setVisible(true);lyr_TBP001_2.setVisible(true);lyr_TBP002_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TBP003_1,lyr_TBP001_2,lyr_TBP002_3];
lyr_TBP003_1.set('fieldAliases', {'id': 'id', 'omschrijvi': 'omschrijvi', });
lyr_TBP001_2.set('fieldAliases', {'id': 'id', 'omschrijvi': 'omschrijvi', });
lyr_TBP002_3.set('fieldAliases', {'id': 'id', 'omschrijvi': 'omschrijvi', });
lyr_TBP003_1.set('fieldImages', {'id': 'TextEdit', 'omschrijvi': 'TextEdit', });
lyr_TBP001_2.set('fieldImages', {'id': 'TextEdit', 'omschrijvi': 'TextEdit', });
lyr_TBP002_3.set('fieldImages', {'id': 'TextEdit', 'omschrijvi': 'TextEdit', });
lyr_TBP003_1.set('fieldLabels', {'id': 'hidden field', 'omschrijvi': 'header label - always visible', });
lyr_TBP001_2.set('fieldLabels', {'id': 'hidden field', 'omschrijvi': 'header label - always visible', });
lyr_TBP002_3.set('fieldLabels', {'id': 'hidden field', 'omschrijvi': 'header label - always visible', });
lyr_TBP002_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});