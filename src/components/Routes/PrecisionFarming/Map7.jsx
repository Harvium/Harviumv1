import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapRef = useRef(null);
  const layersRef = useRef({
    base: null, NDVI: null, SWIR: null, TrueColor: null, SoilIndex: null, MoistureIndex: null
  });
  const [availableDates, setAvailableDates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState('base');
  const sentinelHubToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3MTcwNzQ2MzQsImlhdCI6MTcxNzA3MTAzNCwianRpIjoiODkwZDUzNjctNDU3OS00ZTA3LWEyOGQtMmQ1YmNlMzc2ZGE4IiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJzdWIiOiJjZGM2NTE4Zi03NjIwLTQ5MmQtYTlhNC1hOTE3YTUwZjBiZTYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJkMzMxNjA1Ny1iNDQ5LTQ0YjYtYWY3YS05NmEzMDgwOGYzMDAiLCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImNsaWVudElkIjoiZDMzMTYwNTctYjQ0OS00NGI2LWFmN2EtOTZhMzA4MDhmMzAwIiwiY2xpZW50SG9zdCI6Ijg0LjMxLjU3LjY3IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWQzMzE2MDU3LWI0NDktNDRiNi1hZjdhLTk2YTMwODA4ZjMwMCIsImNsaWVudEFkZHJlc3MiOiI4NC4zMS41Ny42NyIsImFjY291bnQiOiJhY2U5NDI1Yy1hNDUxLTRjOWItOTYxMi02ODU4NGE3MTMxMzAifQ.lVXUF3sx4lwG_PVU86t78QrT9bYIzWAYRDhoBUUA0s3npvLREMVVdqVWySuoH0PKLKwY4vW7vD6aPMu6cvDud6r5sVZqlz3SrbHvT3p2qO-pZZ1NEObRz9qFfar2RzpgTCVeTSFq22BlZZeGwBaf5uY3yGu4264-Ce3iHjKMex_Vc1K-Sr76YFYGNHpoCTX_bRXwuoVMcbpz3M6eBaVx8uHhrxg1XnZZuToaB0Kfa7kVPQ9DrAr6zIXixa0G6KIDC13CubB-mXlO5NA7-z-nRB5k-H_COa3doVvDsD1TqxOqGJLKunfI4Q03ubwrOrMIjkQQflMs7Qx7-Ek3cMkwpQ'; // Replace with your actual access token

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('mapid', {
        center: [52.2297, 21.0122],
        zoom: 13
      });

      layersRef.current.base = createLayer('base', 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', '© OpenStreetMap contributors');
      layersRef.current.NDVI = createLayer('NDVI');
      layersRef.current.SWIR = createLayer('SWIR');
      layersRef.current.TrueColor = createLayer('NATURAL-COLOR');
      layersRef.current.SoilIndex = createLayer('AGRICULTURE');
      layersRef.current.MoistureIndex = createLayer('MOISTURE-INDEX');

      layersRef.current.base.addTo(mapRef.current);

      // Add image switch control to the map
      const control = L.control({ position: 'topright' });
      control.onAdd = function () {
        const div = L.DomUtil.create('div', 'info');
        div.innerHTML = '<button id="previous-image" style="margin: 5px;">Previous</button><button id="next-image" style="margin: 5px;">Next</button>';
        return div;
      };
      control.addTo(mapRef.current);

      document.getElementById('previous-image').onclick = showPreviousImage;
      document.getElementById('next-image').onclick = showNextImage;

      // Fetch available dates initially for the default layer (NDVI)
      fetchAvailableDates('NDVI'); // Default to NDVI for initial load
    }
  }, []);

  function createLayer(id, url = "https://services.sentinel-hub.com/ogc/wms/e19be309-87d1-4bae-b14d-652549395b29", attribution = 'Data © Sentinel Hub | Satellite data © Copernicus') {
    return id === 'base' ? L.tileLayer(url, { attribution }) : L.tileLayer.wms(url, {
      layers: id,
      format: 'image/png',
      transparent: true,
      attribution
    });
  }

  const switchLayer = async (layerType) => {
    Object.values(layersRef.current).forEach(layer => {
      if (mapRef.current.hasLayer(layer)) {
        mapRef.current.removeLayer(layer);
      }
    });
    layersRef.current[layerType].addTo(mapRef.current);
    setActiveLayer(layerType);
    await fetchAvailableDates(layerType);
    if (availableDates.length > 0) {
      showImage(layerType, availableDates[0]);
    }
  };

  const fetchAvailableDates = async (layerType) => {
    if (layerType === 'base') {
      setAvailableDates([]);
      return;
    }
    try {
      const bounds = mapRef.current.getBounds();
      const coordinates = [
        [bounds.getWest(), bounds.getSouth()],
        [bounds.getWest(), bounds.getNorth()],
        [bounds.getEast(), bounds.getNorth()],
        [bounds.getEast(), bounds.getSouth()],
        [bounds.getWest(), bounds.getSouth()],
      ].map(coord => coord.join(' ')).join(', ');

      const wktPolygon = `POLYGON((${coordinates}))`;
      const url = `https://services.sentinel-hub.com/api/v1/catalog/search`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sentinelHubToken}`
        },
        body: JSON.stringify({
          collections: ["sentinel-2-l2a"],
          datetime: "2020-01-01T00:00:00Z/2024-12-31T23:59:59Z",
          bbox: [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()],
          limit: 100
        })
      });

      if (!response.ok) {
        throw new Error(`Error fetching available dates: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.features) {
        const dates = data.features.map(feature => feature.properties.datetime.split('T')[0]);
        setAvailableDates(dates);
        setCurrentIndex(0);
        showImage(layerType, dates[0]); // Show the first available image
      }
    } catch (error) {
      console.error('Error fetching available dates:', error);
    }
  };

  const showImage = async (layerType, date) => {
    try {
      const bounds = mapRef.current.getBounds().toBBoxString();
      const size = mapRef.current.getSize();
      const url = `https://services.sentinel-hub.com/api/v1/process`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sentinelHubToken}`
        },
        body: JSON.stringify({
          input: {
            bounds: { bbox: bounds.split(',').map(Number) },
            data: [{ type: 'sentinel-2-l2a', dataFilter: { timeRange: { from: `${date}T00:00:00Z`, to: `${date}T23:59:59Z` } } }]
          },
          output: {
            width: size.x,
            height: size.y,
            responses: [{ identifier: 'default', format: { type: 'image/png' } }]
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Error fetching image: ${response.statusText}`);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      const imageLayer = L.imageOverlay(imageUrl, mapRef.current.getBounds());
      imageLayer.addTo(mapRef.current);
    } catch (error) {
      console.error('Error showing image:', error);
    }
  };

  const showNextImage = () => {
    if (currentIndex < availableDates.length - 1) {
      showImage(activeLayer, availableDates[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    } else {
      alert('No more images available.');
    }
  };

  const showPreviousImage = () => {
    if (currentIndex > 0) {
      showImage(activeLayer, availableDates[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    } else {
      alert('No previous images available.');
    }
  };

  const buttonStyle = (layer) => ({
    backgroundColor: activeLayer === layer ? 'rgba(255, 215, 0, 0.8)' : 'rgba(9, 14, 46, 0.7)',
    color: 'white',
    border: 'none',
    padding: '6px 10px',
    margin: '2px 0',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    width: '140px', // Set a fixed width that fits the longest text
    display: 'block', // Ensure buttons are stacked vertically
    textAlign: 'center', // Center the text within each button
    fontWeight: 'bold',
    fontSize: '12px'
  });

  return (
    <div>
      <div id="mapid" style={{ width: '100%', height: '100vh' }}></div>
      <div style={{ position: 'absolute', top: '100px', left: '10px', zIndex: 1000, padding: '5px' }}>
        {['base', 'NDVI', 'SWIR', 'TrueColor', 'SoilIndex', 'MoistureIndex'].map((layer) =>
          <button key={layer} style={buttonStyle(layer)} onClick={() => switchLayer(layer)}>
            {layer.replace(/([A-Z])/g, ' $1').trim()}  {/* Add spaces before capital letters for better readability */}
          </button>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
