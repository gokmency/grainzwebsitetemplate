"use client";

import React from "react";

export function WeBuildThings() {
  return (
    <div className="flex items-center justify-center">
      <h1 
        className="tracking-tighter flex select-none flex-col text-center text-3xl md:text-5xl font-black leading-none"
        style={{ 
          fontFamily: "'Tomorrow', sans-serif",
          letterSpacing: '6px'
        }}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4">
          <span className="text-white mb-2 md:mb-0">WE</span>
          
          <div className="relative mb-2 md:mb-0">
            <span
              data-content="BUILD"
              className="before:animate-gradient-background-1 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] before:text-white"
            >
              <span 
                className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent"
                style={{ fontFamily: "'Tomorrow', sans-serif" }}
              >
                BUILD
              </span>
            </span>
            <span
              data-content="DESIGN"
              className="before:animate-gradient-background-2 absolute inset-0 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] before:text-white"
            >
              <span 
                className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-2 text-transparent"
                style={{ fontFamily: "'Tomorrow', sans-serif" }}
              >
                DESIGN
              </span>
            </span>
            <span
              data-content="MANAGE"
              className="before:animate-gradient-background-3 absolute inset-0 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] before:text-white"
            >
              <span 
                className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-2 text-transparent"
                style={{ fontFamily: "'Tomorrow', sans-serif" }}
              >
                MANAGE
              </span>
            </span>
          </div>
          
          <span className="text-white mb-2 md:mb-0">THINGS</span>
        </div>
      </h1>
    </div>
  );
} 