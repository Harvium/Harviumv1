import React from 'react';
import './ButtonLight.css';
import { Link } from 'react-router-dom';

const ButtonLight = () => {
    return (
        <div className="container">
            <div className="btn"><Link to="#">Read More</Link></div>
        </div>
    );
};

export default ButtonLight;
