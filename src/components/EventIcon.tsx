
import React from 'react';

interface EventIconProps {
  type: string;
}

const EventIcon: React.FC<EventIconProps> = ({ type }) => {
  const iconClasses = "w-16 h-16 text-orange-400";

  const renderIcon = () => {
    switch (type) {
      case 'ideathon':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'case':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <circle cx="16" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'pitch':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1h4a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1h4v3" />
            <rect x="4" y="8" width="16" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M8 16h6" />
          </svg>
        );
      case 'tech':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'marketing':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10v16l-5-3-5 3V4z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9h4M10 13h4" />
          </svg>
        );
      case 'startup':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="relative">
      {renderIcon()}
      <div className="absolute inset-0 bg-orange-400 opacity-10 rounded-full animate-pulse"></div>
    </div>
  );
};

export default EventIcon;
