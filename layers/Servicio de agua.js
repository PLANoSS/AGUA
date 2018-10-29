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
var format_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0 = new ol.format.GeoJSON();
var features_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0 = format_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0.readFeatures(json_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0.addFeatures(features_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0);var lyr_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0, 
                style: style_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0,
    title: '<b/>Percepción sobre el pago del servicio de agua:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que creen que el servicio debe ser pagado dependiendo la cantidad que<br />use cada familia, pero con excepciones para evitar problemas sociales.<br />\
    <img src="styles/legend/Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0_4.png" />  80 - 100 <br /><br />'
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
        });var format_NotieneconocimientosobrelaLeydeAguas_2 = new ol.format.GeoJSON();
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
        });var format_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3 = new ol.format.GeoJSON();
var features_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3 = format_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3.readFeatures(json_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3.addFeatures(features_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3);var lyr_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3, 
                style: style_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3,
    title: '<b/>Percepción sobre reducir los problemas de agua:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que creen que ser eficientes con el uso de agua en casa, reduciría<br />problemas de agua.<br />\
    <img src="styles/legend/Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3_4.png" />  80 - 100 <br /><br />'
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

lyr_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0.setVisible(false);lyr_Elconsumodeaguaseaunserviciopblico_1.setVisible(true);lyr_NotieneconocimientosobrelaLeydeAguas_2.setVisible(false);lyr_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3.setVisible(false);lyr_Calidaddeaguaensucantnsehamantenidoigual_4.setVisible(false);
var layersList = [baseLayer,lyr_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0,lyr_Elconsumodeaguaseaunserviciopblico_1,lyr_NotieneconocimientosobrelaLeydeAguas_2,lyr_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3,lyr_Calidaddeaguaensucantnsehamantenidoigual_4];
lyr_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Si, pero c': 'Si, pero c', });
lyr_Elconsumodeaguaseaunserviciopblico_1.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'A14_Públic': 'A14_Públic', });
lyr_NotieneconocimientosobrelaLeydeAguas_2.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'No': 'No', });
lyr_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Ser eficie': 'Ser eficie', });
lyr_Calidaddeaguaensucantnsehamantenidoigual_4.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'A10_Se man': 'A10_Se man', });
lyr_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Si, pero c': 'TextEdit', });
lyr_Elconsumodeaguaseaunserviciopblico_1.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'A14_Públic': 'TextEdit', });
lyr_NotieneconocimientosobrelaLeydeAguas_2.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'No': 'Hidden', });
lyr_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Ser eficie': 'TextEdit', });
lyr_Calidaddeaguaensucantnsehamantenidoigual_4.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'A10_Se man': 'TextEdit', });
lyr_Pagarelusodeaguadependiendodelacantidadqueutilicecadafamiliaperoconexcepciones_0.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Si, pero c': 'no label', });
lyr_Elconsumodeaguaseaunserviciopblico_1.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'A14_Públic': 'no label', });
lyr_NotieneconocimientosobrelaLeydeAguas_2.set('fieldLabels', {'Codigo': 'no label', 'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Reducirlosproblemasdeaguasiendoeficientesconsuusoencasa_3.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Ser eficie': 'no label', });
lyr_Calidaddeaguaensucantnsehamantenidoigual_4.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'A10_Se man': 'no label', });
lyr_Calidaddeaguaensucantnsehamantenidoigual_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
	
});