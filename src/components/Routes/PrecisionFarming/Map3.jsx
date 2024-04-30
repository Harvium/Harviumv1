import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapRef = useRef(null);  // Use ref to manage the map instance
  const ndviLayerRef = useRef(null); // Reference to the NDVI layer for easy management
  const [loading, setLoading] = useState(false); // State to manage loading status

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map only if it has not been initialized yet
      mapRef.current = L.map('mapid', {
        center: [52.2297, 21.0122],
        zoom: 13,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          })
        ]
      });

      // Initialize the NDVI layer reference and manage its loading events
      ndviLayerRef.current = L.tileLayer.wms("https://services.sentinel-hub.com/ogc/wms/f50ad068-c3e0-470d-9122-ce712b89fc27", {
        layers: 'NDVI',
        format: 'image/png',
        transparent: true,
        attribution: 'NDVI Data © Sentinel Hub | Satellite data © Copernicus'
      });
      ndviLayerRef.current.on('loading', () => setLoading(true));
      ndviLayerRef.current.on('load', () => setLoading(false));

      addMapControls(); // Add the custom controls
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();  // Clean up the map instance when the component unmounts
        mapRef.current = null;
      }
    };
  }, []);

  const addMapControls = () => {
    // Custom control for map switching
    const switchControl = L.control({ position: 'topleft' });
    switchControl.onAdd = function () {
      const controlDiv = L.DomUtil.create('div');
      const createButton = (label, onClick) => {
        const btn = L.DomUtil.create('button', 'leaflet-bar', controlDiv);
        btn.innerText = label;
        btn.type = 'button';
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';  // Ensuring text is visible
        btn.style.width = '100px';
        btn.style.height = '30px';
        btn.style.cursor = 'pointer';
        btn.onclick = onClick;
        return btn;
      };

      createButton('Open Street Map', () => showMap('osm'));
      createButton('Agro Map', () => showMap('ndvi'));

      return controlDiv;
    };
    switchControl.addTo(mapRef.current);

    // Custom control for postal code input
    const postalCodeControl = L.control({ position: 'topright' });
    postalCodeControl.onAdd = function () {
      const controlDiv = L.DomUtil.create('div', 'leaflet-bar');
      controlDiv.style.backgroundColor = 'white';
      controlDiv.style.padding = '2px';
      controlDiv.style.color = 'black';

      const label = L.DomUtil.create('label', '', controlDiv);
      label.innerText = '';
      label.htmlFor = 'postalCodeInput';

      const input = L.DomUtil.create('input', '', controlDiv);
      input.type = 'text';
      input.id = 'postalCodeInput';
      input.placeholder = 'Kod pocztowy';
      input.style.marginTop = '2px';
      input.style.marginBottom = '2px';

      const button = L.DomUtil.create('button', '', controlDiv);
      button.innerText = ' Szukaj';
      button.type = 'button';
      button.onclick = function () {
        geocodePostalCode(input.value);
      };

      return controlDiv;
    };
    postalCodeControl.addTo(mapRef.current);
  };

  const showMap = (mapType) => {
    setLoading(false); // Reset loading state before switching
    const currentCenter = mapRef.current.getCenter();
    const currentZoom = mapRef.current.getZoom();

    mapRef.current.eachLayer((layer) => {
      mapRef.current.removeLayer(layer);
    });

    if (mapType === 'osm') {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current);
    } else if (mapType === 'ndvi') {
      ndviLayerRef.current.addTo(mapRef.current);
      setLoading(true);  // Set loading when switching to NDVI layer
    }

    mapRef.current.setView(currentCenter, currentZoom);
  };

  const geocodePostalCode = (postalCode) => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=pl&postalcode=${postalCode}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          mapRef.current.setView([lat, lon], 13);
        } else {
          alert('Nie znaleziono lokalizacji dla podanego kodu pocztowego.');
        }
      })
      .catch(() => alert('Błąd podczas wyszukiwania lokalizacji.'));
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div id="mapid" style={{ width: '100%', height: '100%' }}></div>
      {loading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(9, 14, 46, 0.6)', padding: '10px', zIndex: 1000 }}>
          Satellite data is loading...
        </div>
      )}
    </div>
  );
};

export default MapComponent;
