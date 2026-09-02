/* Shared CARTO Positron Light No Labels basemap configuration */

const cartoKey = 'cb1_2s1u_1_8f25e8f342fa438d46d69300';
  
const cartoAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ' +
  '&copy; <a href="https://carto.com/attributions">CARTO</a>';

function addCartoLightNoLabels(map, options = {}) {
  return L.tileLayer(
    `https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png?key=${cartoKey}`,
    {
      attribution: cartoAttribution,
      subdomains: 'abcd',
      maxZoom: 18,
      ...options
    }
  ).addTo(map);
}

function createCartoLightOnlyLabels(options = {}) {
  return L.tileLayer(
    `https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png?key=${cartoKey}`,
    {
      attribution: cartoAttribution,
      subdomains: 'abcd',
      maxZoom: 18,
      ...options
    }
  );
}