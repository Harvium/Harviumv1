import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    // Clear any existing map instance from the container
    const container = L.DomUtil.get('mapid');
    if (container != null) {
      container._leaflet_id = null;
    }

    // Initialize the map
    const map = L.map('mapid').setView([52.2297, 21.0122], 13);

    // Add OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add the NDVI layer using WMS
    const ndviLayer = L.tileLayer.wms("https://services.sentinel-hub.com/ogc/wms/f50ad068-c3e0-470d-9122-ce712b89fc27", {
      layers: 'NDVI',
      format: 'image/png',
      transparent: true,
      attribution: 'NDVI Data © Sentinel Hub | Satellite data © Copernicus'
    }).addTo(map);

    return () => {
      map.remove();  // Clean up the map instance when the component unmounts
    };
  }, []);

  return <div id="mapid" style={{ width: '100%', height: '100vh' }}></div>;
};

export default MapComponent;