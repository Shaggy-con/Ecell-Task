
import React from 'react';
import { ArrowRight } from 'lucide-react';
import EventIcon from './EventIcon';

interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  category: string;
  type: string;
  icon: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-orange-500/50">
      {/* Icon Section */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 flex justify-center items-center">
        <EventIcon type={event.icon} />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
        
        {/* Location and Date */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-orange-400 text-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {event.location}
          </div>
          <div className="flex items-center text-orange-400 text-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {event.date}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          {event.description}
        </p>

        {/* Register Button */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group">
          <span>Register</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
