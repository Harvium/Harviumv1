import React from 'react';
import './ScrollingBar.css';

const ScrollingBar = () => {
  const items = [
    { name: "Pszenica", priceChange: 0.2 },
    { name: "Kukurydza", priceChange: -0.15 },
    { name: "Ryż", priceChange: 0.05 },
    { name: "Cheddar", priceChange: 0.1 },
    { name: "Sorbitol", priceChange: -0.3 },
    { name: "Cukier", priceChange: 0.15 },
    { name: "Metionina", priceChange: 0.25 },
    { name: "Indory", priceChange: -0.02 },
    { name: "Indyczki", priceChange: 0.04 },
    { name: "Bydło", priceChange: 0.04 },
  ];

  const getColor = (priceChange) => {
    if (priceChange > 0.1) return 'green';
    if (priceChange < -0.1) return 'red';
    return 'white';
  };

  // Duplicate the items to create a continuous loop
  const allItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden2 bg-[rgba(2,6,33,0.85)]">
      <div className="flex space-x-4 px-2 py-1 animate-marquee">
        {allItems.map((item, index) => (
          <div key={index} className="px-2 rounded-md text-xs font-bold" style={{ color: 'white' }}>
            <span>{item.name}: </span> 
            <span style={{ color: getColor(item.priceChange) }}>{item.priceChange}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBar;
