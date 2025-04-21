import React from 'react';
import '../../index.css';
import HeaderComponent from '../../components/HeaderComponent';
import ChartPanelComponent from '../../components/ChargePanelComponent';
import EnergyCardComponent from '../../components/EnergyCardComponent';

const DashboardComponent = () => {
    return (
        <div className="p-4 md:p-10">
            <svg className="fixed top-0 left-0 z-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="glow" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#00f7ff" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00f7ff" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                <rect x="2%" y="2%" width="96%" height="96%" rx="20" ry="20" stroke="url(#glow)" strokeWidth="2" fill="none" />
            </svg>
            <div className="relative z-10">
                <HeaderComponent />
                <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
                    <EnergyCardComponent title="Solar Panel Installation Size" value="35.64" unit="kWp" />
                    <EnergyCardComponent title="Battery Capacity" value="10" unit="kWp" />
                    <EnergyCardComponent title="Solar Energy Today" value="398.99" unit="kWh" />
                    <EnergyCardComponent title="Battery Discharge Today" value="20" unit="kWh" />
                    <EnergyCardComponent title="Energy Purchased Today" value="15" unit="kWh" />
                    <EnergyCardComponent title="Energy Consumption Today" value="418.99" unit="kWh" />
                </div>
                <ChartPanelComponent />
            </div>
        </div>
    );
};

export default DashboardComponent;