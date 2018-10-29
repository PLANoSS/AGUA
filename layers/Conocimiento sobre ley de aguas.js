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
var format_NotieneconocimientosobrelaLeydeAguas_2 = new ol.format.GeoJSON();
var features_NotieneconocimientosobrelaLeydeAguas_2 = format_NotieneconocimientosobrelaLeydeAguas_2.readFeatures(json_NotieneconocimientosobrelaLeydeAguas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NotieneconocimientosobrelaLeydeAguas_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NotieneconocimientosobrelaLeydeAguas_2.addFeatures(features_NotieneconocimientosobrelaLeydeAguas_2);var lyr_NotieneconocimientosobrelaLeydeAguas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NotieneconocimientosobrelaLeydeAguas_2, 
                style: style_NotieneconocimientosobrelaLeydeAguas_2,
    title: '<b/>Conocimiento sobre la Ley de aguas:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que no tienen conocimiento sobre la Ley de aguas.<br />\
    <img src="styles/legend/NotieneconocimientosobrelaLeydeAguas_2_0.png" />  0 - 20 <br />\
    <img src="styles/legend/NotieneconocimientosobrelaLeydeAguas_2_1.png" />  20 - 40 <br />\
    <img src="styles/legend/NotieneconocimientosobrelaLeydeAguas_2_2.png" />  40 - 60 <br />\
    <img src="styles/legend/NotieneconocimientosobrelaLeydeAguas_2_3.png" />  60 - 80 <br />\
    <img src="styles/legend/NotieneconocimientosobrelaLeydeAguas_2_4.png" />  80 - 100 <br /><br />'
        });

lyr_NotieneconocimientosobrelaLeydeAguas_2.setVisible(true);
var layersList = [baseLayer,lyr_NotieneconocimientosobrelaLeydeAguas_2];
lyr_NotieneconocimientosobrelaLeydeAguas_2.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'No': 'No', });
lyr_NotieneconocimientosobrelaLeydeAguas_2.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'No': 'Hidden', });
lyr_NotieneconocimientosobrelaLeydeAguas_2.set('fieldLabels', {'Codigo': 'no label', 'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });