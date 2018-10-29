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
});var format_Elconsumodeaguaseaunserviciopblico_1 = new ol.format.GeoJSON();
var features_Elconsumodeaguaseaunserviciopblico_1 = format_Elconsumodeaguaseaunserviciopblico_1.readFeatures(json_Elconsumodeaguaseaunserviciopblico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elconsumodeaguaseaunserviciopblico_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Elconsumodeaguaseaunserviciopblico_1.addFeatures(features_Elconsumodeaguaseaunserviciopblico_1);var lyr_Elconsumodeaguaseaunserviciopblico_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Elconsumodeaguaseaunserviciopblico_1, 
                style: style_Elconsumodeaguaseaunserviciopblico_1,
    title: '<b/>Percepción sobre el servicio de agua para consumo humano y riego:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que prefieren que el servicio sea público, no privado.<br />\
    <img src="styles/legend/Elconsumodeaguaseaunserviciopblico_1_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Elconsumodeaguaseaunserviciopblico_1_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Elconsumodeaguaseaunserviciopblico_1_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Elconsumodeaguaseaunserviciopblico_1_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Elconsumodeaguaseaunserviciopblico_1_4.png" />  80 - 100 <br /><br />'
        });

lyr_Elconsumodeaguaseaunserviciopblico_1.setVisible(true);
var layersList = [baseLayer,lyr_Elconsumodeaguaseaunserviciopblico_1];
lyr_Elconsumodeaguaseaunserviciopblico_1.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'A14_Públic': 'A14_Públic', });
lyr_Elconsumodeaguaseaunserviciopblico_1.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'A14_Públic': 'TextEdit', });
lyr_Elconsumodeaguaseaunserviciopblico_1.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'A14_Públic': 'no label', });