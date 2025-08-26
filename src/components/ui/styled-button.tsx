import React from 'react';
import './styled-button.css';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button 
      className={`button-86 ${className}`}
      onClick={onClick}
      role="button"
    >
      {children}
    </button>
  );
};

export default StyledButton;
