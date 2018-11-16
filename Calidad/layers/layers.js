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
var format_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0 = new ol.format.GeoJSON();
var features_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0 = format_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0.readFeatures(json_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0.addFeatures(features_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0);var lyr_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0, 
                style: style_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0,
    title: '<b/>Percepción sobre la calidad de agua:</b><br />El degradado de colores en el mapa, muestra el porcentaje de personas<br />que creen que la calidad de agua en su cantón se ha mantenido igual<br />\
    <img src="styles/legend/PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0_4.png" />  80 - 100 <br />'
        });

lyr_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0.setVisible(true);
var layersList = [baseLayer,lyr_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0];
lyr_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'A10_Se man': 'A10_Se man', });
lyr_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'A10_Se man': 'TextEdit', });
lyr_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'A10_Se man': 'no label', });
lyr_PercepcinsobrelacalidaddeaguaEldegradadodecoloresenelmapamuestraelporcentajedepersonaquecreenquelacalidaddeaguaensucantnsehamantenidoigual_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});