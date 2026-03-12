"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TopographicBgProps {
  className?: string;
  animated?: boolean;
}

export default function TopographicBg({ 
  className = "", 
  animated = true 
}: TopographicBgProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !animated) return;

    // Animate topographic lines with subtle pulse effect
    const paths = svgRef.current.querySelectorAll("path");
    
    paths.forEach((path, index) => {
      gsap.to(path, {
        opacity: 0.5,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3,
      });
    });

    // Subtle horizontal movement
    gsap.to(svgRef.current, {
      x: 20,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [animated]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="topo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3D4A3A" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#3D4A3A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3D4A3A" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Topographic contour lines - abstract organic curves */}
      <g className="animate-topo-pulse">
        {/* Layer 1 - Outer curves */}
        <path
          d="M0,100 Q200,50 400,120 T800,100 T1200,130 T1440,90 L1440,0 L0,0 Z"
          fill="url(#topo-gradient)"
          stroke="#3D4A3A"
          strokeWidth="1"
          opacity="0.3"
        />
        
        <path
          d="M0,150 Q250,100 450,170 T850,150 T1250,180 T1440,140 L1440,50 L0,50 Z"
          fill="url(#topo-gradient)"
          stroke="#3D4A3A"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Layer 2 - Middle curves */}
        <path
          d="M0,250 Q300,200 500,270 T900,250 T1300,280 T1440,240 L1440,150 L0,150 Z"
          fill="url(#topo-gradient)"
          stroke="#3D4A3A"
          strokeWidth="1"
          opacity="0.3"
        />

        <path
          d="M0,350 Q350,300 550,370 T950,350 T1350,380 T1440,340 L1440,250 L0,250 Z"
          fill="url(#topo-gradient)"
          stroke="#3D4A3A"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Layer 3 - Inner curves */}
        <path
          d="M0,450 Q400,400 600,470 T1000,450 T1400,480 T1440,440 L1440,350 L0,350 Z"
          fill="url(#topo-gradient)"
          stroke="#3D4A3A"
          strokeWidth="1"
          opacity="0.3"
        />

        <path
          d="M0,550 Q450,500 650,570 T1050,550 T1440,580 L1440,450 L0,450 Z"
          fill="url(#topo-gradient)"
          stroke="#3D4A3A"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Layer 4 - Bottom curves */}
        <path
          d="M0,650 Q500,600 700,670 T1100,650 T1440,680 L1440,550 L0,550 Z"
          fill="url(#topo-gradient)"
          stroke="#3D4A3A"
          strokeWidth="1"
          opacity="0.3"
        />

        <path
          d="M0,750 Q550,700 750,770 T1150,750 T1440,780 L1440,650 L0,650 Z"
          fill="url(#topo-gradient)"
          stroke="#3D4A3A"
          strokeWidth="1"
          opacity="0.25"
        />
      </g>

      {/* Additional decorative contour lines */}
      <g opacity="0.15">
        <path
          d="M200,0 Q400,100 600,50 T1000,100 T1400,50"
          fill="none"
          stroke="#3D4A3A"
          strokeWidth="0.5"
        />
        <path
          d="M100,200 Q300,300 500,250 T900,300 T1300,250"
          fill="none"
          stroke="#3D4A3A"
          strokeWidth="0.5"
        />
        <path
          d="M0,400 Q200,500 400,450 T800,500 T1200,450"
          fill="none"
          stroke="#3D4A3A"
          strokeWidth="0.5"
        />
        <path
          d="M300,600 Q500,700 700,650 T1100,700 T1440,650"
          fill="none"
          stroke="#3D4A3A"
          strokeWidth="0.5"
        />
      </g>

      {/* Elevation markers (decorative dots) */}
      <g fill="#3D4A3A" opacity="0.4">
        <circle cx="200" cy="100" r="1" />
        <circle cx="600" cy="200" r="1" />
        <circle cx="1000" cy="150" r="1" />
        <circle cx="1400" cy="300" r="1" />
        <circle cx="400" cy="400" r="1" />
        <circle cx="800" cy="500" r="1" />
        <circle cx="1200" cy="450" r="1" />
        <circle cx="300" cy="650" r="1" />
        <circle cx="700" cy="700" r="1" />
        <circle cx="1100" cy="600" r="1" />
      </g>
    </svg>
  );
}
