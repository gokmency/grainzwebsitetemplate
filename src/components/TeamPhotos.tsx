
import React, { useState, useRef } from "react";

// Team member data with organized photo structure
const teamMembers = [
  {
    id: 1,
    name: "Gökmen",
    role: "Developer",
    photo: "/team/gokmen.jpg",
    bio: `Gökmen is a skilled developer with expertise in building scalable web applications. He has extensive experience in modern JavaScript frameworks and backend technologies, focusing on creating efficient and maintainable code solutions.`,
    twitter: "https://x.com/gokmeneth"
  },
  {
    id: 3,
    name: "Sefercan",
    role: "Researcher",
    photo: "/team/sefercan.jpg",
    bio: "Sefercan is a dedicated researcher focused on exploring innovative solutions and emerging technologies. She conducts thorough analysis and provides valuable insights that drive strategic decision-making.",
    twitter: "https://x.com/sefercan"
   
  },
  {
    id: 6,
    name: "Ercan",
    role: "Researcher",
    photo: "/team/ercan.jpg",
    bio: "Ercan is a research professional with a passion for exploring new technologies and methodologies. He brings analytical thinking and innovative approaches to complex research challenges.",
    twitter: "https://x.com/ercan"
  },
  {
    id: 4,
    name: "Maslak",
    role: "Analyst",
    photo: "/team/maslak.jpg",
    bio: "Maslak is a data analyst with expertise in market research and business intelligence. He transforms complex data into actionable insights, helping teams make informed decisions based on solid analytical foundations.",
    twitter: "https://x.com/maslak"
  },
  {
    id: 5,
    name: "Burak",
    role: "Designer", 
    photo: "/team/burak.jpg",
    bio: "Burak is a creative designer who specializes in user experience and interface design. He believes great design happens when aesthetics meet functionality, creating products that are both beautiful and intuitive to use.",
    twitter: "https://x.com/100guc"
    
  },
  {
    id: 2,
    name: "Akman",
    role: "Researcher",
    photo: "/team/berkay.jpg",
    bio: "Akman is a research specialist who focuses on innovation and emerging trends. He conducts comprehensive studies and provides strategic insights that help shape the future direction of projects.",
    twitter: "https://x.com/Akmangrainz"
    
  },
  {
    id: 7,
    name: "Ceyhun",
    role: "Business Development",
    photo: "/team/ceyhun.jpg",
    bio: "Ceyhun is a business development specialist who focuses on growth strategies and partnership opportunities. He has extensive experience in identifying market opportunities and building strategic relationships.",
    twitter: "https://x.com/grainzeth"
  },
];

const TeamPhotos: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (memberId: number, event: React.MouseEvent) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    
    const rect = event.currentTarget.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    setPopupPosition({
      x: rect.left + scrollLeft + rect.width / 2,
      y: rect.bottom + scrollTop + 10
    });
    
    setHoveredMember(memberId);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredMember(null);
    }, 150);
  };

  const handlePopupMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const handlePopupMouseLeave = () => {
    setHoveredMember(null);
  };

  const handleClosePopup = () => {
    setHoveredMember(null);
  };

  const handleTwitterClick = (memberId: number) => {
    const member = teamMembers.find(m => m.id === memberId);
    if (member?.twitter) {
      window.open(member.twitter, '_blank');
    }
    setHoveredMember(null);
  };

  // Split team members: first 4 in left column, remaining 3 in right column
  const leftColumnMembers = teamMembers.slice(0, 4);
  const rightColumnMembers = teamMembers.slice(4, 7);

  return (
    <div className="relative">
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-2 gap-2 max-w-[180px]">
        {/* Left Column - 4 members */}
        <div className="space-y-2">
          {leftColumnMembers.map((member) => {
            const isHovered = member.id === hoveredMember;
            
            return (
              <div
                key={member.id}
                onMouseEnter={(e) => handleMouseEnter(member.id, e)}
                onMouseLeave={handleMouseLeave}
                className={`group rounded-lg overflow-hidden relative border-2 transition-all duration-200 flex-shrink-0 bg-white w-full aspect-square cursor-pointer
                  ${isHovered ? "border-[#C8102E] shadow-lg scale-105 z-10" : "border-transparent hover:border-[#9D174D]"} 
                `}
                aria-label={member.name}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-200 ${
                    isHovered ? "grayscale-0" : "grayscale hover:grayscale-0"
                  }`}
                  draggable={false}
                />
                {isHovered && (
                  <span
                    className="absolute inset-0 border-[3px] border-[#FBBF24] pointer-events-none rounded-lg"
                    aria-hidden
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column - 3 members */}
        <div className="space-y-2">
          {rightColumnMembers.map((member) => {
            const isHovered = member.id === hoveredMember;
            
            return (
              <div
                key={member.id}
                onMouseEnter={(e) => handleMouseEnter(member.id, e)}
                onMouseLeave={handleMouseLeave}
                className={`group rounded-lg overflow-hidden relative border-2 transition-all duration-200 flex-shrink-0 bg-white w-full aspect-square cursor-pointer
                  ${isHovered ? "border-[#C8102E] shadow-lg scale-105 z-10" : "border-transparent hover:border-[#9D174D]"} 
                `}
                aria-label={member.name}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-200 ${
                    isHovered ? "grayscale-0" : "grayscale hover:grayscale-0"
                  }`}
                  draggable={false}
                />
                {isHovered && (
                  <span
                    className="absolute inset-0 border-[3px] border-[#FBBF24] pointer-events-none rounded-lg"
                    aria-hidden
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Grid Layout */}
      <div className="grid md:hidden grid-cols-4 gap-1 max-w-[200px] mx-auto">
        {teamMembers.map((member) => {
          const isHovered = member.id === hoveredMember;
          
          return (
            <div
              key={member.id}
              onMouseEnter={(e) => handleMouseEnter(member.id, e)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleMouseEnter(member.id, e)}
              className={`group rounded-lg overflow-hidden relative border-2 transition-all duration-200 flex-shrink-0 bg-white w-full aspect-square cursor-pointer
                ${isHovered ? "border-[#C8102E] shadow-lg scale-105 z-10" : "border-transparent hover:border-[#9D174D]"} 
              `}
              aria-label={member.name}
            >
              <img
                src={member.photo}
                alt={member.name}
                className={`w-full h-full object-cover transition-all duration-200 ${
                  isHovered ? "grayscale-0" : "grayscale hover:grayscale-0"
                }`}
                style={{
                  objectPosition: 'center 25%'
                }}
                draggable={false}
              />
              {isHovered && (
                <span
                  className="absolute inset-0 border-[3px] border-[#FBBF24] pointer-events-none rounded-lg"
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Simplified Popup - No image inside, clean design */}
      {hoveredMember && (
        <div 
          className="fixed z-50 transform -translate-x-1/2"
          style={{
            left: `${popupPosition.x}px`,
            top: `${popupPosition.y}px`,
          }}
        >
          <div
            onMouseEnter={handlePopupMouseEnter}
            onMouseLeave={handlePopupMouseLeave}
            className="relative bg-white rounded-lg shadow-2xl w-80 max-w-[90vw] p-4 md:p-6 transform transition-all duration-300 scale-100 border-2 border-gray-200"
            style={{
              fontFamily: "'Tomorrow', sans-serif"
            }}
          >
            {/* X.com button - top right corner */}
            <button
              onClick={() => handleTwitterClick(hoveredMember)}
              className="absolute right-3 top-3 w-6 h-6 text-gray-500 hover:text-blue-500 transition-colors z-10 flex items-center justify-center"
              aria-label="Visit X.com profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>

            {/* Name */}
            <div className="font-bold text-xl mb-2 text-black" style={{ fontFamily: "'Tomorrow', sans-serif" }}>
              {teamMembers.find(m => m.id === hoveredMember)?.name}
            </div>
            
            {/* Role */}
            <div className="font-semibold text-gray-600 mb-4 text-base" style={{ fontFamily: "'Tomorrow', sans-serif" }}>
              {teamMembers.find(m => m.id === hoveredMember)?.role}
            </div>
            
            {/* Bio */}
            <div className="text-gray-800 leading-relaxed text-sm" style={{ fontFamily: "'Tomorrow', sans-serif" }}>
              {teamMembers.find(m => m.id === hoveredMember)?.bio}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPhotos;
