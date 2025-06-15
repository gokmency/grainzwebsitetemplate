
import React from 'react';

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-white bg-transparent text-white px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-[#C8102E] hover:-translate-y-0.5"
      style={{ fontFamily: "'Tomorrow', sans-serif" }}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
