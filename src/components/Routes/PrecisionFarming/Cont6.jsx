import React, { useState } from 'react';
import Reveal from "@/components/animations/reveal/reveal";
import Map from "./Map.jsx"
import Map2 from "./Map2.jsx"
import Map3 from "./Map3.jsx"
import Map7 from "./Map7.jsx"
import Map9 from "./Map9.jsx"

// import Map_time_slider from "./Map_time_slider.jsx"
import SimpleMapComponent from './SimpleMapComponent.jsx';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import ButtonLight from '@/components/custom/Buttons/ButtonLight.jsx';

const Cont6 = () => {
    const [showMap, setShowMap] = useState(false); // Stan do kontrolowania widoczności mapy

    return (
        <section className="bg-background-primary text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <Reveal>
                <div className="mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-center">
                
                    <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                        Wypróbuj za darmo nasze mapy
                    </h2>
                    <button
                        onClick={() => setShowMap(!showMap)} // Przełączanie widoczności mapy
                        className="mt-4 bg-yellow-900 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full mb-8 border border-white"
                    >
                        Mapa demo
                    </button>
                    {showMap && <div className="map-container"><Map9 /></div>} 
                </div>
            </Reveal>
            

        </section>
    );
};

export default Cont6;