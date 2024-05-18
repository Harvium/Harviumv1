import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const SimpleMapComponent = () => {
    useEffect(() => {
      // Inicjalizacja mapy
      const map = L.map('fullScreenMap', {
        center: [52.2297, 21.0122], // Przykładowe współrzędne centrum mapy
        zoom: 13
      });
  
      // Dodanie warstwy tiles (kafelków) z OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
  
      return () => {
        map.remove(); // Usuwanie mapy, gdy komponent jest demontowany
      };
    }, []);
  
    return <div id="fullScreenMap" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}></div>;
  };
  
  export default SimpleMapComponent;