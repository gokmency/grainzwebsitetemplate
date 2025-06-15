import React from 'react';
import TeamPhotos from '../components/TeamPhotos';
import OutlineButton from '../components/OutlineButton';
import { Waves } from '../components/ui/waves-background';

// Tomorrow font import from Google Fonts
if (typeof window !== "undefined") {
  // Only once
  if (!document.getElementById("tomorrow-font-link")) {
    const link = document.createElement("link");
    link.id = "tomorrow-font-link";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;700;800&display=swap";
    document.head.appendChild(link);
  }
}

const Index = () => {
  const handleFollowUsClick = () => {
    window.open('https://x.com/grainzeth', '_blank');
  };

  const handleDesignClick = () => {
    window.open('https://x.com/100guc', '_blank');
  };

  const handleDevelopmentClick = () => {
    window.open('https://x.com/gokmeneth', '_blank');
  };

  const handleCommunityClick = () => {
    window.open('https://x.com/grainzeth', '_blank');
  };

  const handleJoinTeamClick = () => {
    window.open('https://form.typeform.com/to/wWliUJsu', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C8102E] to-[#E53E3E] relative overflow-hidden flex flex-col" style={{ fontFamily: "'Tomorrow', sans-serif" }}>
      {/* Waves Animation Background */}
      <div className="absolute inset-0">
        <Waves
          lineColor="rgba(255, 255, 255, 0.2)"
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.008}
          waveAmpX={35}
          waveAmpY={18}
          friction={0.92}
          tension={0.008}
          maxCursorMove={110}
          xGap={12}
          yGap={34}
        />
      </div>

      {/* Header - Enlarged logo */}
      <header className="absolute top-8 left-16 z-10">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/9d283f80-ab01-419a-9b24-13fd7abda243.png" 
            alt="GRAINZ LABS Logo" 
            className="w-40 h-40 md:w-48 md:h-48 drop-shadow-lg select-none"
            draggable={false}
          />
        </div>
      </header>

      {/* Central Hexagon */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
        <div 
          className="relative w-[600px] h-[600px] max-w-[400px] max-h-[400px] md:max-w-[600px] md:max-h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-3xl md:text-5xl font-black text-white text-center"
              style={{
                letterSpacing: '8px',
                fontFamily: "'Tomorrow', sans-serif"
              }}
            >
              WE MAKE IMPACT
            </h1>
          </div>
        </div>
      </div>

      {/* Top-Left Section - WHAT WE DO - Moved further from edges */}
      <div className="absolute top-52 left-20 max-w-sm z-10">
        <h2 
          className="text-lg font-bold text-white mb-4"
          style={{ letterSpacing: '2px', fontFamily: "'Tomorrow', sans-serif" }}
        >
          WHAT WE DO
        </h2>
        <p className="text-white mb-6 leading-relaxed" style={{ fontFamily: "'Tomorrow', sans-serif" }}>
          We design, develop, and build innovative solutions while nurturing and managing vibrant communities that drive meaningful engagement and growth.
        </p>
        <OutlineButton onClick={handleFollowUsClick}>
          <div className="flex items-center justify-between w-full text-sm font-medium" style={{ fontFamily: "'Tomorrow', sans-serif" }}>
            <span>FOLLOW US</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-2">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
        </OutlineButton>
      </div>

      {/* Bottom-Left Section - WORK WITH US - Moved further from edges */}
      <div className="absolute bottom-20 left-20 max-w-sm z-10">
        <h2 
          className="text-lg font-bold text-white mb-4"
          style={{ letterSpacing: '2px', fontFamily: "'Tomorrow', sans-serif" }}
        >
          WORK WITH US
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <OutlineButton onClick={handleDesignClick}>Design</OutlineButton>
          <OutlineButton onClick={handleDevelopmentClick}>Development</OutlineButton>
          <OutlineButton onClick={handleCommunityClick}>Community</OutlineButton>
          <OutlineButton onClick={handleJoinTeamClick}>Join our team</OutlineButton>
        </div>
      </div>

      {/* Top-Right Section - WHO WE ARE - Moved more to the left */}
      <div className="absolute top-44 right-32 max-w-sm z-10">
        <h2 
          className="text-lg font-bold text-white mb-4"
          style={{ letterSpacing: '2px', fontFamily: "'Tomorrow', sans-serif" }}
        >
          WHO WE ARE
        </h2>
        <TeamPhotos />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-6 pt-32 pb-12 space-y-12 z-10 relative">
        <div className="text-center">
          <div 
            className="mx-auto w-80 h-80 mb-8"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
            }}
          >
            <div className="h-full flex items-center justify-center">
              <h1
                className="text-2xl font-black text-white text-center"
                style={{
                  letterSpacing: '4px',
                  fontFamily: "'Tomorrow', sans-serif"
                }}
              >
                WE MAKE IMPACT
              </h1>
            </div>
          </div>
        </div>

        <div>
          <h2 
            className="text-lg font-bold text-white mb-4"
            style={{ letterSpacing: '2px', fontFamily: "'Tomorrow', sans-serif" }}
          >
            WHAT WE DO
          </h2>
          <p className="text-white mb-6 leading-relaxed" style={{ fontFamily: "'Tomorrow', sans-serif" }}>
            We design, develop, and build innovative solutions while nurturing and managing vibrant communities that drive meaningful engagement and growth.
          </p>
          <OutlineButton onClick={handleFollowUsClick}>
            <div className="flex items-center justify-between w-full text-sm font-medium" style={{ fontFamily: "'Tomorrow', sans-serif" }}>
              <span>FOLLOW US</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-2">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
          </OutlineButton>
        </div>

        <div>
          <h2 
            className="text-lg font-bold text-white mb-4"
            style={{ letterSpacing: '2px', fontFamily: "'Tomorrow', sans-serif" }}
          >
            WHO WE ARE
          </h2>
          <TeamPhotos />
        </div>

        <div>
          <h2 
            className="text-lg font-bold text-white mb-4"
            style={{ letterSpacing: '2px', fontFamily: "'Tomorrow', sans-serif" }}
          >
            WORK WITH US
          </h2>
          <div className="grid grid-cols-1 gap-3">
            <OutlineButton onClick={handleDesignClick}>Design</OutlineButton>
            <OutlineButton onClick={handleDevelopmentClick}>Development</OutlineButton>
            <OutlineButton onClick={handleCommunityClick}>Community</OutlineButton>
            <OutlineButton onClick={handleJoinTeamClick}>Join our team</OutlineButton>
          </div>
        </div>
      </div>

      {/* Copyright notice: sticky bottom, centered, always visible */}
      <div className="absolute bottom-2 left-0 w-full z-50 pointer-events-none select-none">
        <p className="text-center text-xs text-white/70 tracking-wide" style={{
          textShadow: "0 2px 8px rgba(44,0,0,0.18)",
          fontFamily: "'Tomorrow', sans-serif"
        }}>
          © 2025 GRAINZ LABS All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
