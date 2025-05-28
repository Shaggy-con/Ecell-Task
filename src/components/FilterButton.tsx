
import React from 'react';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const FilterButton: React.FC<FilterButtonProps> = ({ 
  label, 
  isActive, 
  onClick, 
  variant = 'primary' 
}) => {
  const baseClasses = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105";
  
  const variantClasses = variant === 'primary' 
    ? isActive 
      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25" 
      : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
    : isActive
      ? "bg-gray-600 text-white shadow-lg"
      : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
