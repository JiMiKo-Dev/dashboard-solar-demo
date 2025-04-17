import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss';

const NavbarComponent = () => {
    const contentRef = useRef(null);
    const [svgWidth, setSvgWidth] = useState(700);

    useEffect(() => {
        if (contentRef.current) {
            const contentWidth = contentRef.current.offsetWidth;
            const newWidth = contentWidth + 100; // padding ซ้ายขวา
            setSvgWidth(Math.max(600, newWidth));
        }
    }, []);

    const svgHeight = 100;
    const pathHeight = 70;

    return (
        <div className="bg-[#0b0c2a] flex justify-center py-6">
            <svg
                width={svgWidth}
                height={svgHeight}
                viewBox={`0 0 600 ${svgHeight}`}
                preserveAspectRatio="none"
                className="glow-svg"
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

                {/* PATH กรอบ */}
                <path
                    d={`
                        M0,0 
                        L40,0 
                        Q60,0 80,20 
                        L100,${pathHeight - 20} 
                        Q120,${pathHeight} 150,${pathHeight} 
                        L450,${pathHeight} 
                        Q480,${pathHeight} 500,${pathHeight - 20} 
                        L520,20 
                        Q540,0 560,0 
                        L600,0`}
                    stroke="url(#glowGradient)"
                    strokeWidth="2"
                    fill="none"
                    filter="url(#glow)"
                />

                {/* TEXT CONTENT ครอบด้วย foreignObject */}
                <foreignObject
                    x="0"
                    y="10"
                    width="600"
                    height={svgHeight - 20}
                >
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
