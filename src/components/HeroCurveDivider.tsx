import React from 'react';

interface HeroCurveDividerProps {
  fillColor?: string;
  className?: string;
}

export default function HeroCurveDivider({
  fillColor = '#F7FAFC',
  className = '',
}: HeroCurveDividerProps) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10 ${className}`}
    >
      <svg
        className="relative block w-full h-8 sm:h-12 lg:h-16"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C150,80 350,-20 500,45 C650,110 900,15 1200,40 L1200,120 L0,120 Z"
          fill={fillColor}
        ></path>
      </svg>
    </div>
  );
}
