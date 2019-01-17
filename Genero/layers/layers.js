var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Genero1_0 = new ol.format.GeoJSON();
var features_Genero1_0 = format_Genero1_0.readFeatures(json_Genero1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Genero1_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Genero1_0.addFeatures(features_Genero1_0);var lyr_Genero1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Genero1_0, 
                style: style_Genero1_0,
    title: 'Genero1<br />\
    <img src="styles/legend/Genero1_0_0.png" />  0.0 - 20.0 <br />\
    <img src="styles/legend/Genero1_0_1.png" />  20.0 - 40.0 <br />\
    <img src="styles/legend/Genero1_0_2.png" />  40.0 - 60.0 <br />\
    <img src="styles/legend/Genero1_0_3.png" />  60.0 - 80.0 <br />\
    <img src="styles/legend/Genero1_0_4.png" />  80.0 - 100.0 <br />'
        });

lyr_Genero1_0.setVisible(true);
var layersList = [baseLayer,lyr_Genero1_0];
lyr_Genero1_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Libro1_Fem': 'Libro1_Fem', 'Gráfica': 'Gráfica', 'Género_Año': 'Género_Año', 'Género_Fem': 'Género_Fem', });
lyr_Genero1_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Libro1_Fem': 'Hidden', 'Gráfica': 'Photo', 'Género_Año': 'TextEdit', 'Género_Fem': 'Hidden', });
lyr_Genero1_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Gráfica': 'no label', 'Género_Año': 'header label', });
lyr_Genero1_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});