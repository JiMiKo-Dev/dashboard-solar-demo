import React from 'react';
import '../index.css';

const EnergyCardComponent = ({ title, value, unit }) => {
    return (
        <div className="bg-[#12122e] p-4 rounded-2xl shadow-neon border border-neonBlue animate-pulseGlow">
            <h2 className="text-sm text-neonBlue">{title}</h2>
            <div className="mt-2 text-3xl font-bold">{value} <span className="text-sm">{unit}</span></div>
        </div>
    );
};

export default EnergyCardComponent;