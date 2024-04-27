import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapRef = useRef(null);  // Use ref to manage the map instance

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
    }

    // Add the NDVI layer
    const ndviLayer = L.tileLayer.wms("https://services.sentinel-hub.com/ogc/wms/f50ad068-c3e0-470d-9122-ce712b89fc27", {
      layers: 'NDVI',
      format: 'image/png',
      transparent: true,
      attribution: 'NDVI Data © Sentinel Hub | Satellite data © Copernicus'
    }).addTo(mapRef.current);

    return () => {
      mapRef.current.remove();  // Clean up the map instance when the component unmounts
      mapRef.current = null;
    };
  }, []);

  const showTradingMap = () => {
    mapRef.current.eachLayer((layer) => {
      if (layer.options.attribution !== '© OpenStreetMap contributors') {
        mapRef.current.removeLayer(layer);
      }
    });

    const tradingData = [
      { name: "Punkt handlowy 1", coords: [52.2397, 21.0222] },
      { name: "Punkt handlowy 2", coords: [52.2497, 21.0322] },
    ];

    tradingData.forEach(data => {
      L.marker(data.coords).bindPopup(data.name).addTo(mapRef.current);
    });

    mapRef.current.setView([52.2397, 21.0222], 13);
  };

  const showAgroMap = () => {
    mapRef.current.eachLayer((layer) => {
      if (layer.options.attribution !== '© OpenStreetMap contributors') {
        mapRef.current.removeLayer(layer);
      }
    });

    const agroData = [
      { name: "Pole Agro 1", coords: [52.2297, 21.0122] },
      { name: "Pole Agro 2", coords: [52.2197, 21.0022] },
    ];

    agroData.forEach(data => {
      L.marker(data.coords).bindPopup(data.name).addTo(mapRef.current);
    });

    mapRef.current.setView([52.2297, 21.0122], 13);
  };

  return (
    <div>
      <div id="mapid" style={{ width: '100%', height: '100vh' }}></div>
      <button onClick={showTradingMap}>Trade Map</button>
      <button onClick={showAgroMap}>Agro Map</button>
    </div>
  );
};

export default MapComponent;