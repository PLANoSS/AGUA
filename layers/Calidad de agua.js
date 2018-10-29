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
});var format_Calidaddeaguaensucantnsehamantenidoigual_4 = new ol.format.GeoJSON();
var features_Calidaddeaguaensucantnsehamantenidoigual_4 = format_Calidaddeaguaensucantnsehamantenidoigual_4.readFeatures(json_Calidaddeaguaensucantnsehamantenidoigual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calidaddeaguaensucantnsehamantenidoigual_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Calidaddeaguaensucantnsehamantenidoigual_4.addFeatures(features_Calidaddeaguaensucantnsehamantenidoigual_4);var lyr_Calidaddeaguaensucantnsehamantenidoigual_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calidaddeaguaensucantnsehamantenidoigual_4, 
                style: style_Calidaddeaguaensucantnsehamantenidoigual_4,
    title: '<b/>Percepción sobre la calidad del agua:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que creen la calidad de agua en su cantón se ha mantenido igual.<br />\
    <img src="styles/legend/Calidaddeaguaensucantnsehamantenidoigual_4_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Calidaddeaguaensucantnsehamantenidoigual_4_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Calidaddeaguaensucantnsehamantenidoigual_4_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Calidaddeaguaensucantnsehamantenidoigual_4_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Calidaddeaguaensucantnsehamantenidoigual_4_4.png" />  80 - 100 <br /><br />'
        });

lyr_Calidaddeaguaensucantnsehamantenidoigual_4.setVisible(true);
var layersList = [baseLayer,lyr_Calidaddeaguaensucantnsehamantenidoigual_4];
lyr_Calidaddeaguaensucantnsehamantenidoigual_4.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'A10_Se man': 'A10_Se man', });
lyr_Calidaddeaguaensucantnsehamantenidoigual_4.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'A10_Se man': 'TextEdit', });
lyr_Calidaddeaguaensucantnsehamantenidoigual_4.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'A10_Se man': 'no label', });
lyr_Calidaddeaguaensucantnsehamantenidoigual_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
	
});