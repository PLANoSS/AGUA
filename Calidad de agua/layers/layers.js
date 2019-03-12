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
var format_Calidaddeagua_0 = new ol.format.GeoJSON();
var features_Calidaddeagua_0 = format_Calidaddeagua_0.readFeatures(json_Calidaddeagua_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calidaddeagua_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Calidaddeagua_0.addFeatures(features_Calidaddeagua_0);var lyr_Calidaddeagua_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calidaddeagua_0, 
                style: style_Calidaddeagua_0,
    title: '<b/>Percepción sobre la calidad de agua:</b><br />El degradado de colores en el mapa indica el porcentaje de<br />personas que creen que la calidad de agua en su cantón <br />\<b/>se ha mantenido igual.</b><br />\<br />\
    <img src="styles/legend/Calidaddeagua_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Calidaddeagua_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Calidaddeagua_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Calidaddeagua_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Calidaddeagua_0_4.png" />  80 - 100 <br />'
        });

lyr_Calidaddeagua_0.setVisible(true);
var layersList = [baseLayer,lyr_Calidaddeagua_0];
lyr_Calidaddeagua_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Año': 'Año', 'No lo sé (': 'No lo sé (', 'Grafica': 'Grafica', });
lyr_Calidaddeagua_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Año': 'TextEdit', 'No lo sé (': 'Hidden', 'Grafica': 'Photo', });
lyr_Calidaddeagua_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Año': 'header label', 'Grafica': 'no label', });
lyr_Calidaddeagua_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});