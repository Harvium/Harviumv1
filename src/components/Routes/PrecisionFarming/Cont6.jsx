import React, { useState } from 'react';
import Reveal from "@/components/animations/reveal/reveal";
import Map from "./Map.jsx"
import Map2 from "./Map2.jsx"
import Map3 from "./Map3.jsx"
import SimpleMapComponent from './SimpleMapComponent.jsx';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Cont6 = () => {
    const [showMap, setShowMap] = useState(false); // Stan do kontrolowania widoczności mapy

    return (
        <section className="bg-background-primary text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <Reveal>
                <div className="max-w-xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Wypróbuj za darmo nasze mapy
                    </h2>
                    <button
                        onClick={() => setShowMap(!showMap)} // Przełączanie widoczności mapy
                        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Mapy Demo
                    </button>
                    {showMap && <Map3 />} 
                </div>
            </Reveal>
        </section>
    );
};

export default Cont6;