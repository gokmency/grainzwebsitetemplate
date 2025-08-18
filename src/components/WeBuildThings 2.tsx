import React from "react";
import { MorphingText } from "./ui/liquid-text";

const WeBuildThings: React.FC = () => {
  const buildTexts = ["BUILD", "DESIGN", "MANAGE", "CHANGE"];

  return (
    <div className="flex flex-col items-center justify-center">
      <div 
        className="text-center text-2xl md:text-5xl font-black text-white mb-0"
        style={{ 
          fontFamily: "'Tomorrow', sans-serif",
          letterSpacing: '4px'
        }}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-6">
          <span className="mb-2 md:mb-0">WE</span>
          <div className="relative w-24 md:w-48 mb-2 md:mb-0">
            <MorphingText 
              texts={buildTexts}
              className="!h-8 md:!h-16 !text-2xl md:!text-5xl !font-black !leading-none !text-white"
              style={{ 
                fontFamily: "'Tomorrow', sans-serif",
                letterSpacing: '4px'
              }}
            />
          </div>
          <span className="mb-2 md:mb-0">THINGS</span>
        </div>
      </div>
    </div>
  );
};

export default WeBuildThings; 