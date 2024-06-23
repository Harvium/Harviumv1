import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';

const MapComponent = () => {
  const mapRef = useRef(null);
  const layersRef = useRef({
    base: null, NDVI: null, SWIR: null, TrueColor: null, SoilIndex: null, MoistureIndex: null
  });
  const [activeLayer, setActiveLayer] = useState('base');
  const [drawing, setDrawing] = useState(false);

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

      layersRef.current.base.addTo(mapRef.current); // Add the base layer by default

      const drawnItems = new L.FeatureGroup();
      mapRef.current.addLayer(drawnItems);

      const drawControl = new L.Control.Draw({
        draw: {
          polygon: true,
          polyline: false,
          circle: false,
          rectangle: false,
          marker: false,
          circlemarker: false,
        },
        edit: {
          featureGroup: drawnItems,
          remove: false
        }
      });

      mapRef.current.on(L.Draw.Event.CREATED, (event) => {
        const layer = event.layer;
        drawnItems.addLayer(layer);
      });

      mapRef.current.on(L.Draw.Event.EDITED, (event) => {
        const layers = event.layers;
        layers.eachLayer((layer) => {
          // Handle edited layers
        });
      });

      mapRef.current.on(L.Draw.Event.DELETED, (event) => {
        const layers = event.layers;
        layers.eachLayer((layer) => {
          // Handle deleted layers
        });
      });

      layersRef.current.drawControl = drawControl;
      layersRef.current.drawnItems = drawnItems;
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

  const switchLayer = (layerType) => {
    Object.values(layersRef.current).forEach(layer => {
      if (mapRef.current.hasLayer(layer)) {
        mapRef.current.removeLayer(layer);
      }
    });
    layersRef.current[layerType].addTo(mapRef.current);
    setActiveLayer(layerType);
  };

  const toggleDrawing = () => {
    if (drawing) {
      mapRef.current.removeControl(layersRef.current.drawControl);
    } else {
      mapRef.current.addControl(layersRef.current.drawControl);
    }
    setDrawing(!drawing);
  };

  const buttonStyle = (active) => ({
    backgroundColor: active ? 'rgba(255, 215, 0, 0.8)' : 'rgba(9, 14, 46, 0.7)',
    color: 'white',
    border: 'none',
    padding: '6px 10px',
    margin: '2px 0',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    width: '140px',
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '12px',
  });

  return (
    <div>
      <div id="mapid" style={{ width: '100%', height: '100vh' }}></div>
      <div style={{ position: 'absolute', top: '100px', left: '10px', zIndex: 1000, padding: '5px' }}>
        {['base', 'NDVI', 'SWIR', 'TrueColor', 'SoilIndex', 'MoistureIndex'].map((layer) =>
          <button key={layer} style={buttonStyle(activeLayer === layer)} onClick={() => switchLayer(layer)}>
            {layer.replace(/([A-Z])/g, ' $1').trim()}  {/* Add spaces before capital letters for better readability */}
          </button>
        )}
      </div>
      <div style={{ position: 'absolute', top: '100px', right: '10px', zIndex: 1000, padding: '5px' }}>
        <button style={buttonStyle(drawing)} onClick={toggleDrawing}>
          {drawing ? 'Stop Drawing' : 'Draw your field'}
        </button>
      </div>
    </div>
  );
};

export default MapComponent;