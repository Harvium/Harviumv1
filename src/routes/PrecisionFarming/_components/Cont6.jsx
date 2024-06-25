import React, { useState } from 'react';
import Reveal from "@/components/animations/reveal/reveal";
import Map3 from "./Map3.jsx"
import Map9 from "./Map9.jsx"
import Map10 from "./Map10.jsx"
// import Map_time_slider from "./Map_time_slider.jsx"
import 'leaflet/dist/leaflet.css';
import './Map.css';

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
                        className="mt-4 bg-yellow-900 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full mb-8"
                    >
                        Mapa demo
                    </button>
                    {showMap && <div className="map-container m-4"><Map10 /></div>} 
                </div>
            </Reveal>
            

        </section>
    );
};

export default Cont6;
