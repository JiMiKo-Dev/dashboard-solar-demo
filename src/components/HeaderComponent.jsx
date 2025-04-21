import React from 'react';
import '../index.css';

const HeaderComponent = () => {
    return (
        <div className="flex items-center justify-between pb-4 border-b border-neonBlue">
            <h1 className="text-xl font-bold text-neonBlue">EGP Demo - Energy Management System</h1>
            <div className="text-sm">
                <span className="mr-4">🌡️ Temp: 32°C</span>
                <span className="mr-4">💨 Wind: 18 km/h</span>
                <span>☀️ Irradiance: 200 lux</span>
            </div>
        </div>
    );
};

export default HeaderComponent;