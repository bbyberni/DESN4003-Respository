var wms_layers = [];

var format_turkey_0 = new ol.format.GeoJSON();
var features_turkey_0 = format_turkey_0.readFeatures(json_turkey_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_turkey_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_turkey_0.addFeatures(features_turkey_0);
var lyr_turkey_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_turkey_0, 
                style: style_turkey_0,
                popuplayertitle: 'turkey',
                interactive: false,
                title: '<img src="styles/legend/turkey_0.png" /> turkey'
            });
var format_administrativeregion_1 = new ol.format.GeoJSON();
var features_administrativeregion_1 = format_administrativeregion_1.readFeatures(json_administrativeregion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_administrativeregion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_administrativeregion_1.addFeatures(features_administrativeregion_1);
var lyr_administrativeregion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_administrativeregion_1, 
                style: style_administrativeregion_1,
                popuplayertitle: 'administrative region',
                interactive: true,
                title: '<img src="styles/legend/administrativeregion_1.png" /> administrative region'
            });
var format_majorroads_2 = new ol.format.GeoJSON();
var features_majorroads_2 = format_majorroads_2.readFeatures(json_majorroads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_majorroads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_majorroads_2.addFeatures(features_majorroads_2);
var lyr_majorroads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_majorroads_2, 
                style: style_majorroads_2,
                popuplayertitle: 'major roads',
                interactive: false,
                title: '<img src="styles/legend/majorroads_2.png" /> major roads'
            });
var format_rivers_3 = new ol.format.GeoJSON();
var features_rivers_3 = format_rivers_3.readFeatures(json_rivers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rivers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rivers_3.addFeatures(features_rivers_3);
var lyr_rivers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rivers_3, 
                style: style_rivers_3,
                popuplayertitle: 'rivers',
                interactive: true,
                title: '<img src="styles/legend/rivers_3.png" /> rivers'
            });
var format_refugeecamps_4 = new ol.format.GeoJSON();
var features_refugeecamps_4 = format_refugeecamps_4.readFeatures(json_refugeecamps_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_refugeecamps_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refugeecamps_4.addFeatures(features_refugeecamps_4);
var lyr_refugeecamps_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refugeecamps_4, 
                style: style_refugeecamps_4,
                popuplayertitle: 'refugee camps',
                interactive: true,
                title: '<img src="styles/legend/refugeecamps_4.png" /> refugee camps'
            });
var format_previousdisasters_5 = new ol.format.GeoJSON();
var features_previousdisasters_5 = format_previousdisasters_5.readFeatures(json_previousdisasters_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_previousdisasters_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_previousdisasters_5.addFeatures(features_previousdisasters_5);
var lyr_previousdisasters_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_previousdisasters_5, 
                style: style_previousdisasters_5,
                popuplayertitle: 'previous disasters',
                interactive: true,
                title: '<img src="styles/legend/previousdisasters_5.png" /> previous disasters'
            });

lyr_turkey_0.setVisible(true);lyr_administrativeregion_1.setVisible(true);lyr_majorroads_2.setVisible(true);lyr_rivers_3.setVisible(true);lyr_refugeecamps_4.setVisible(true);lyr_previousdisasters_5.setVisible(true);
var layersList = [lyr_turkey_0,lyr_administrativeregion_1,lyr_majorroads_2,lyr_rivers_3,lyr_refugeecamps_4,lyr_previousdisasters_5];
lyr_turkey_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_administrativeregion_1.set('fieldAliases', {'District': 'District', });
lyr_majorroads_2.set('fieldAliases', {'FID': 'FID', });
lyr_rivers_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FROM_NODE': 'FROM_NODE', 'TO_NODE': 'TO_NODE', 'SUB_BASIN': 'SUB_BASIN', 'Sub_Area': 'Sub_Area', 'MAJOR_AREA': 'MAJOR_AREA', 'TO_BASIN': 'TO_BASIN', 'MAJOR_BASIN': 'MAJOR_BASIN', 'Sub_Name': 'Sub_Name', 'MAJOR_NAME': 'MAJOR_NAME', 'Strahler': 'Strahler', 'Shape_Length': 'Shape_Length', });
lyr_refugeecamps_4.set('fieldAliases', {'cmp_id': 'cmp_id', 'cmp_tr': 'cmp_tr', 'cmp_en': 'cmp_en', 'Type': 'Type', 'Status': 'Status', 'adm2_tr': 'adm2_tr', 'adm2_en': 'adm2_en', 'adm2_code': 'adm2_code', 'adm1': 'adm1', 'adm1_tr': 'adm1_tr', 'adm1_en': 'adm1_en', 'adm1_code': 'adm1_code', 'adm0_tr': 'adm0_tr', 'adm0_en': 'adm0_en', 'pcode': 'pcode', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_previousdisasters_5.set('fieldAliases', {'DisNo.': 'DisNo.', 'Historic': 'Historic', 'Classification Key': 'Classification Key', 'Disaster Group': 'Disaster Group', 'Disaster Subgroup': 'Disaster Subgroup', 'Disaster Type': 'Disaster Type', 'Disaster Subtype': 'Disaster Subtype', 'External IDs': 'External IDs', 'Event Name': 'Event Name', 'ISO': 'ISO', 'Country': 'Country', 'Subregion': 'Subregion', 'Region': 'Region', 'Location': 'Location', 'Origin': 'Origin', 'Associated Types': 'Associated Types', 'OFDA/BHA Response': 'OFDA/BHA Response', 'Appeal': 'Appeal', 'Declaration': 'Declaration', 'AID Contribution (\'000 US$)': 'AID Contribution (\'000 US$)', 'Magnitude': 'Magnitude', 'Magnitude Scale': 'Magnitude Scale', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'River Basin': 'River Basin', 'Start Year': 'Start Year', 'Start Month': 'Start Month', 'Start Day': 'Start Day', 'End Year': 'End Year', 'End Month': 'End Month', 'End Day': 'End Day', 'Total Deaths': 'Total Deaths', 'No. Injured': 'No. Injured', 'No. Affected': 'No. Affected', 'No. Homeless': 'No. Homeless', 'Total Affected': 'Total Affected', 'Reconstruction Costs (\'000 US$)': 'Reconstruction Costs (\'000 US$)', 'Reconstruction Costs, Adjusted (\'000 US$)': 'Reconstruction Costs, Adjusted (\'000 US$)', 'Insured Damage (\'000 US$)': 'Insured Damage (\'000 US$)', 'Insured Damage, Adjusted (\'000 US$)': 'Insured Damage, Adjusted (\'000 US$)', 'Total Damage (\'000 US$)': 'Total Damage (\'000 US$)', 'Total Damage, Adjusted (\'000 US$)': 'Total Damage, Adjusted (\'000 US$)', 'CPI': 'CPI', 'Admin Units': 'Admin Units', 'Entry Date': 'Entry Date', 'Last Update': 'Last Update', });
lyr_turkey_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_administrativeregion_1.set('fieldImages', {'District': 'TextEdit', });
lyr_majorroads_2.set('fieldImages', {'FID': 'TextEdit', });
lyr_rivers_3.set('fieldImages', {'OBJECTID': 'Hidden', 'FROM_NODE': 'Hidden', 'TO_NODE': 'Hidden', 'SUB_BASIN': 'Hidden', 'Sub_Area': 'Hidden', 'MAJOR_AREA': 'Hidden', 'TO_BASIN': 'Hidden', 'MAJOR_BASIN': 'Hidden', 'Sub_Name': 'TextEdit', 'MAJOR_NAME': 'Hidden', 'Strahler': 'Hidden', 'Shape_Length': 'TextEdit', });
lyr_refugeecamps_4.set('fieldImages', {'cmp_id': 'Hidden', 'cmp_tr': 'Hidden', 'cmp_en': 'Hidden', 'Type': 'TextEdit', 'Status': 'TextEdit', 'adm2_tr': 'Hidden', 'adm2_en': 'Hidden', 'adm2_code': 'Hidden', 'adm1': 'Hidden', 'adm1_tr': 'Hidden', 'adm1_en': 'Hidden', 'adm1_code': 'Hidden', 'adm0_tr': 'Hidden', 'adm0_en': 'Hidden', 'pcode': 'Hidden', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_previousdisasters_5.set('fieldImages', {'DisNo.': 'Hidden', 'Historic': 'Hidden', 'Classification Key': 'Hidden', 'Disaster Group': 'Hidden', 'Disaster Subgroup': 'Hidden', 'Disaster Type': 'TextEdit', 'Disaster Subtype': 'Hidden', 'External IDs': 'Hidden', 'Event Name': 'Hidden', 'ISO': 'Hidden', 'Country': 'Hidden', 'Subregion': 'Hidden', 'Region': 'Hidden', 'Location': 'Hidden', 'Origin': 'Hidden', 'Associated Types': 'Hidden', 'OFDA/BHA Response': 'Hidden', 'Appeal': 'Hidden', 'Declaration': 'Hidden', 'AID Contribution (\'000 US$)': 'Hidden', 'Magnitude': 'TextEdit', 'Magnitude Scale': 'Hidden', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'River Basin': 'Hidden', 'Start Year': 'Range', 'Start Month': 'Hidden', 'Start Day': 'Hidden', 'End Year': 'Hidden', 'End Month': 'Hidden', 'End Day': 'Hidden', 'Total Deaths': 'Range', 'No. Injured': 'Hidden', 'No. Affected': 'Hidden', 'No. Homeless': 'Hidden', 'Total Affected': 'Range', 'Reconstruction Costs (\'000 US$)': 'Hidden', 'Reconstruction Costs, Adjusted (\'000 US$)': 'Hidden', 'Insured Damage (\'000 US$)': 'Hidden', 'Insured Damage, Adjusted (\'000 US$)': 'Hidden', 'Total Damage (\'000 US$)': 'Hidden', 'Total Damage, Adjusted (\'000 US$)': 'Hidden', 'CPI': 'Hidden', 'Admin Units': 'Hidden', 'Entry Date': 'Hidden', 'Last Update': 'Hidden', });
lyr_turkey_0.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_administrativeregion_1.set('fieldLabels', {'District': 'inline label - always visible', });
lyr_majorroads_2.set('fieldLabels', {'FID': 'no label', });
lyr_rivers_3.set('fieldLabels', {'Sub_Name': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr_refugeecamps_4.set('fieldLabels', {'Type': 'inline label - always visible', 'Status': 'inline label - always visible', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', });
lyr_previousdisasters_5.set('fieldLabels', {'Disaster Type': 'inline label - always visible', 'Magnitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Start Year': 'inline label - always visible', 'Total Deaths': 'inline label - always visible', 'Total Affected': 'inline label - always visible', });
lyr_previousdisasters_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});