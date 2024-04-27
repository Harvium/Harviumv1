import React from 'react';
import './ButtonTrade.css';

const ButtonTrade = ({ children }) => {
  return (
    <button className="button">
      {children}
    </button>
  );
};

export default ButtonTrade;
