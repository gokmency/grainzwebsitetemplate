
import React from 'react';

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-white bg-transparent text-white px-3 py-2 md:px-4 text-xs md:text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-[#C8102E] hover:-translate-y-0.5 w-full"
      style={{ fontFamily: "'Tomorrow', sans-serif" }}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
