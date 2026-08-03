import React from 'react';
import './styled-button.css';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick, className = "", type = "button", disabled = false }) => {
  return (
    <button
      className={`button-86 ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      role="button"
    >
      {children}
    </button>
  );
};

export default StyledButton;
