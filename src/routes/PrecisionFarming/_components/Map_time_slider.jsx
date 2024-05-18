import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapRef = useRef(null);
  const ndviLayerRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);  // Default to today's date

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('mapid', {
        center: [52.2297, 21.0122],
        zoom: 13,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          })
        ]
      });

      ndviLayerRef.current = L.tileLayer.wms("https://services.sentinel-hub.com/ogc/wms/f50ad068-c3e0-470d-9122-ce712b89fc27", {
        layers: 'NDVI',
        format: 'image/png',
        transparent: true,
        attribution: 'NDVI Data © Sentinel Hub | Satellite data © Copernicus'
      }).addTo(mapRef.current);

      addControls();  // Adding UI controls
    }

    return () => mapRef.current?.remove();
  }, []);

  const updateLayer = (date) => {
    if (ndviLayerRef.current) {
      mapRef.current.removeLayer(ndviLayerRef.current);
    }
    ndviLayerRef.current = L.tileLayer.wms("https://services.sentinel-hub.com/ogc/wms/f50ad068-c3e0-470d-9122-ce712b89fc27", {
      layers: 'NDVI',
      format: 'image/png',
      transparent: true,
      attribution: 'NDVI Data © Sentinel Hub | Satellite data © Copernicus',
      time: `${date}/${date}`  // YYYY-MM-DD/YYYY-MM-DD
    }).addTo(mapRef.current);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    updateLayer(newDate);
  };

  const addControls = () => {
    const controlDiv = L.control({ position: 'topright' });

    controlDiv.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      const label = L.DomUtil.create('label', '', div);
      label.innerHTML = 'Select Date: <input type="date" value="' + selectedDate + '" onchange="handleDateChange(event)">';

      return div;
    };

    controlDiv.addTo(mapRef.current);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div id="mapid" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default MapComponent;