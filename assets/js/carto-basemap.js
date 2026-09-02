/* Shared CARTO Positron Light No Labels basemap configuration */

const cartoKey = 'cb1_2s1u_1_8f25e8f342fa438d46d69300';
  
  L.tileLayer(
    `https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png?key=${cartoKey}`,
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ' +
        '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 18
    }
  ).addTo(map);
  
}