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
var format_Sectoresquesedeberianpotenciarmas_0 = new ol.format.GeoJSON();
var features_Sectoresquesedeberianpotenciarmas_0 = format_Sectoresquesedeberianpotenciarmas_0.readFeatures(json_Sectoresquesedeberianpotenciarmas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectoresquesedeberianpotenciarmas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Sectoresquesedeberianpotenciarmas_0.addFeatures(features_Sectoresquesedeberianpotenciarmas_0);var lyr_Sectoresquesedeberianpotenciarmas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectoresquesedeberianpotenciarmas_0, 
                style: style_Sectoresquesedeberianpotenciarmas_0,
    title: '<b/>Percepción sobre los sectores que se deberían potenciar más:</b><br />El degradado de colores en el mapa indica el porcentaje de<br />personas que creen que el sector que se debería potenciar más<br />es la <b/>Agricultura</b>.<br /><br />\
    <img src="styles/legend/Sectoresquesedeberianpotenciarmas_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Sectoresquesedeberianpotenciarmas_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Sectoresquesedeberianpotenciarmas_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Sectoresquesedeberianpotenciarmas_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Sectoresquesedeberianpotenciarmas_0_4.png" />  80 - 100 <br />'
        });

lyr_Sectoresquesedeberianpotenciarmas_0.setVisible(true);
var layersList = [baseLayer,lyr_Sectoresquesedeberianpotenciarmas_0];
lyr_Sectoresquesedeberianpotenciarmas_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Año': 'Año', 'Agricultur': 'Agricultur', 'Grafica': 'Grafica', });
lyr_Sectoresquesedeberianpotenciarmas_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Año': 'TextEdit', 'Agricultur': 'Hidden', 'Grafica': 'Photo', });
lyr_Sectoresquesedeberianpotenciarmas_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Año': 'header label', 'Grafica': 'no label', });
lyr_Sectoresquesedeberianpotenciarmas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});