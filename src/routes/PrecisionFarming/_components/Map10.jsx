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
  const [polygonCoordinates, setPolygonCoordinates] = useState([]);
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Define the API URL for testing
  const apiUrl = 'https://y09mrrf3dk.execute-api.eu-central-1.amazonaws.com/v1/SaveCoordinatestoDynamo';

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
        const coordinates = layer.getLatLngs()[0].map(latlng => [latlng.lat, latlng.lng]);
        setPolygonCoordinates(coordinates);
        console.log('Polygon coordinates:', coordinates);
      });

      mapRef.current.on(L.Draw.Event.EDITED, (event) => {
        const layers = event.layers;
        layers.eachLayer((layer) => {
          const coordinates = layer.getLatLngs()[0].map(latlng => [latlng.lat, latlng.lng]);
          setPolygonCoordinates(coordinates);
          console.log('Edited polygon coordinates:', coordinates);
        });
      });

      mapRef.current.on(L.Draw.Event.DELETED, (event) => {
        setPolygonCoordinates([]);
        console.log('Polygon deleted');
      });

      mapRef.current.addControl(drawControl);
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

  const handleSendClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmYes = async () => {
    setShowConfirmation(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);



    // Current timestamp
  let dateObj = new Date();
  const timestamp = dateObj.getUTCFullYear() + '-' + 
    (dateObj.getUTCMonth() + 1).toString().padStart(2, '0') + '-' + 
    dateObj.getUTCDate().toString().padStart(2, '0') + ' ' + 
    dateObj.getUTCHours().toString().padStart(2, '0') + ':' + 
    dateObj.getUTCMinutes().toString().padStart(2, '0') + ':' + 
    dateObj.getUTCSeconds().toString().padStart(2, '0') + '.' + 
    dateObj.getUTCMilliseconds().toString().padStart(3, '0');

  let date = timestamp.split(' ')[0];


    // Prepare longitude and latitude
    const latitude = polygonCoordinates.map(coord => coord[0])
    const longitude = polygonCoordinates.map(coord => coord[1])

    // Prepare the data to be sent
    const data = {
      Email: email,
      Date: date,
      Timestamp: timestamp,
      Latitude: latitude,
      Longitude: longitude
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(`Response status code: ${response.status}`);
        console.log('Data stored successfully:', responseData);
      } else {
        console.error('Failed to store data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Log the sending action
    
    console.log(`Sending coordinates: ${JSON.stringify(polygonCoordinates)}`);

    console.log(`Data that has been send: ${JSON.stringify(data)}`);
  };

  const handleConfirmBack = () => {
    setShowConfirmation(false);
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

  const tableStyle = {
    backgroundColor: 'rgba(9, 14, 46, 0.7)',
    color: 'white',
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left',
    fontSize: '12px',
    padding: '5px',
    borderRadius: '4px'
  };

  const thStyle = {
    backgroundColor: 'rgba(255, 215, 0, 0.8)',
    padding: '8px'
  };

  const tdStyle = {
    padding: '8px',
    borderTop: '1px solid white'
  };

  const inputStyle = {
    padding: '8px',
    margin: '8px 0',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid rgba(9, 14, 46, 0.7)',
    fontSize: '12px',
    color: 'rgba(9, 14, 46, 0.7)' // Dark text color for input field
  };

  const popupStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2000,
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px',
    textAlign: 'center',
    color: 'rgba(9, 14, 46, 0.7)',
    fontSize: '14px',
    fontWeight: 'bold'
  };

  return (
    <div>
      <div id="mapid" style={{ width: '100%', height: '50vh' }}></div>
      <div style={{ position: 'absolute', top: '100px', left: '10px', zIndex: 1000, padding: '5px' }}>
        {['Mapa podstawowa', 'NDVI', 'SWIR', 'TrueColor', 'Stan gleby', 'Wilgotność'].map((layer) =>
          <button key={layer} style={buttonStyle(activeLayer === layer)} onClick={() => switchLayer(layer)}>
            {layer.replace(/([A-Z])/g, ' $1').trim()}  {/* Add spaces before capital letters for better readability */}
          </button>
        )}
      </div>
      
      {polygonCoordinates.length > 0 && (
        <div style={{ position: 'absolute', bottom: '10px', right: '10px', zIndex: 1000, padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '4px', width: '250px' }}>
          <h4 style={{ margin: 0, color: 'rgba(9, 14, 46, 0.7)', textAlign: 'center', fontWeight: 'bold' }}>Współrzędne obszaru</h4>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Szerokość</th>
                <th style={thStyle}>Długość</th>
              </tr>
            </thead>
            <tbody>
              {polygonCoordinates.map((coord, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{coord[0].toFixed(6)}</td>
                  <td style={tdStyle}>{coord[1].toFixed(6)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <button style={buttonStyle(true)} onClick={handleSendClick}>
            Wyślij
          </button>
        </div>
      )}
      {showConfirmation && (
        <div style={popupStyle}>
          <p>Czy chcesz wysłać wspołrzędne?</p>
          <button style={buttonStyle(true)} onClick={handleConfirmYes}>
            Tak
          </button>
          <button style={buttonStyle(false)} onClick={handleConfirmBack}>
            Powrót
          </button>
        </div>
      )}
      {showSuccess && (
        <div style={popupStyle}>
          <p>Your coordinates have been sent successfully.</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;