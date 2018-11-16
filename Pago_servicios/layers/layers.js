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
var format_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0 = new ol.format.GeoJSON();
var features_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0 = format_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0.readFeatures(json_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0.addFeatures(features_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0);var lyr_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0, 
                style: style_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0,
    title: 'El degradado de colores en el mapa muestra el porcentaje de personas<br />que creen que el servicio debe ser pagado dependiendo la cantidad que<br />use cada familia, pero con excepciones para evitar problemas sociales.<br />\
    <img src="styles/legend/Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0_4.png" /> 80 - 100<br />'
        });
var group_Percepcinsobreelpagodeserviciodeagua = new ol.layer.Group({
                                layers: [lyr_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0,],
                                title: "Percepción sobre el pago de servicio de agua"});

lyr_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0.setVisible(true);
var layersList = [baseLayer,group_Percepcinsobreelpagodeserviciodeagua];
lyr_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0.set('fieldAliases', {'Cod': 'Cod', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'A12_A12T03': 'A12_A12T03', });
lyr_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0.set('fieldImages', {'Cod': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'A12_A12T03': 'Hidden', });
lyr_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0.set('fieldLabels', {});
lyr_Eldegradadodecoloresenelmapamuestraelporcentajedepersonasquecreenqueelserviciodebeserpagadoperoconexcepcionesparaevitarproblemassociales_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});