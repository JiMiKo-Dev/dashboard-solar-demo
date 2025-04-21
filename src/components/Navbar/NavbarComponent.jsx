import React, { useRef } from 'react';
import './Navbar.scss';

const NavbarComponent = () => {
    const contentRef = useRef(null);


    return (

        <div className="relative flex items-center justify-center w-full py-1">
            <svg
                className="w-full h-[70px] glow-svg z-10"
                viewBox="0 0 1600 70"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#5efcfc" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#5efcfc" stopOpacity="1" />
                        <stop offset="100%" stopColor="#5efcfc" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <path
                    d={`
          M0,0 
          L200,0 
          Q220,0 240,20 
          L280,50 
          Q300,70 340,70 
          L1260,70 
          Q1300,70 1320,50 
          L1360,20 
          Q1380,0 1400,0 
          L1600,0
        `}
                    stroke="url(#glowGradient)"
                    strokeWidth="2"
                    fill="none"
                    filter="url(#glow)"
                />

                <foreignObject x="0" y="10" width="1600" height="50">
                    <div
                        className="flex flex-col items-center justify-center w-full h-full text-center text-white"
                        ref={contentRef}
                    >
                        <h1 className="text-lg text-white-shadow">EGP Demo</h1>
                        <p className="text-sm text-white-shadow">Energy Management System EGP</p>
                    </div>
                </foreignObject>
            </svg>
        </div>
    );
};

export default NavbarComponent;
