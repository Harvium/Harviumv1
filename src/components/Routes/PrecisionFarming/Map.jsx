import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initializeMap = L.map('mapid', {
      center: [52.2297, 21.0122],
      zoom: 13,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: 'OpenStreetMap'
        })
      ]
    });

    setMap(initializeMap);

    return () => {
      if (initializeMap) {
        initializeMap.remove();
      }
    };
  }, []);

  // Funkcje do zarządzania mapami
  const showTradingMap = () => {
    // Czyszczenie poprzednich warstw
    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer === false) {
        map.removeLayer(layer);
      }
    });

    // Dodanie markerów handlowych
    const tradingData = [
      { name: "Punkt handlowy 1", coords: [52.2397, 21.0222] },
      { name: "Punkt handlowy 2", coords: [52.2497, 21.0322] },
    ];

    tradingData.forEach((data) => {
      L.marker(data.coords).bindPopup(data.name).addTo(map);
    });

    map.setView([52.2397, 21.0222], 13);
  };

  const showAgroMap = () => {
    // Czyszczenie poprzednich warstw
    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer === false) {
        map.removeLayer(layer);
      }
    });

    // Dodanie warstw agrotechnicznych
    const agroData = [
      { name: "Pole Agro 1", coords: [52.2297, 21.0122] },
      { name: "Pole Agro 2", coords: [52.2197, 21.0022] },
    ];

    agroData.forEach((data) => {
      L.marker(data.coords).bindPopup(data.name).addTo(map);
    });

    map.setView([52.2297, 21.0122], 13);
  };

  return (
    <div>
      <div id="mapid" style={{ height: '600px' }}></div>
      <button onClick={showTradingMap}>Open Street Map</button>
      <button onClick={showAgroMap}>Agro Map</button>
    </div>
  );
};

export default MapComponent;