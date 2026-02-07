var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_PedwayBaseMap_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pedway Base Map<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PedwayBaseMap_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9755502.598994, 5142049.313868, -9753286.633133, 5144574.348651]
        })
    });
var format_POIs_2 = new ol.format.GeoJSON();
var features_POIs_2 = format_POIs_2.readFeatures(json_POIs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIs_2.addFeatures(features_POIs_2);
var lyr_POIs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIs_2, 
                style: style_POIs_2,
                popuplayertitle: 'POIs',
                interactive: true,
                title: '<img src="styles/legend/POIs_2.png" /> POIs'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PedwayBaseMap_1.setVisible(true);lyr_POIs_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PedwayBaseMap_1,lyr_POIs_2];
lyr_POIs_2.set('fieldAliases', {'id': 'id', 'POIs': 'POIs', 'Additional': 'Additional', });
lyr_POIs_2.set('fieldImages', {'id': 'TextEdit', 'POIs': 'TextEdit', 'Additional': '', });
lyr_POIs_2.set('fieldLabels', {'id': 'no label', 'POIs': 'inline label - always visible', 'Additional': 'header label - visible with data', });
lyr_POIs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});