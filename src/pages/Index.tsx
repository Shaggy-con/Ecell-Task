
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import FilterButton from '../components/FilterButton';
import { Calendar } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Ideathon",
    location: "NITK",
    date: "31 Jan 2025",
    description: "Ideathon is to gather participants to collaboratively identify real-world problems and brainstorm innovative...",
    category: "Tech",
    type: "Competition",
    icon: "ideathon"
  },
  {
    id: 2,
    title: "ACE The CASE",
    location: "Online",
    date: "15 Feb 2025",
    description: "Master the art of case study analysis with expert guidance and interactive sessions for business professionals...",
    category: "Finance",
    type: "Workshop",
    icon: "case"
  },
  {
    id: 3,
    title: "E-Pitch",
    location: "Mumbai",
    date: "22 Feb 2025",
    description: "Present your startup ideas to industry experts and investors in this exciting pitching competition...",
    category: "Workshop",
    type: "Competition",
    icon: "pitch"
  },
  {
    id: 4,
    title: "TechConnect Summit",
    location: "Bangalore",
    date: "05 Mar 2025",
    description: "Connect with leading tech professionals and explore the latest innovations in artificial intelligence...",
    category: "Tech",
    type: "Expo",
    icon: "tech"
  },
  {
    id: 5,
    title: "Digital Marketing Bootcamp",
    location: "Online",
    date: "12 Mar 2025",
    description: "Learn advanced digital marketing strategies from industry experts in this comprehensive bootcamp...",
    category: "Workshop",
    type: "Online",
    icon: "marketing"
  },
  {
    id: 6,
    title: "Startup Showcase",
    location: "Delhi",
    date: "20 Mar 2025",
    description: "Discover innovative startups and network with entrepreneurs, investors, and industry leaders...",
    category: "Finance",
    type: "Expo",
    icon: "startup"
  }
];

const categories = ["All", "Tech", "Finance", "Workshop"];
const types = ["Competitions", "Online", "Offline", "Expo"];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeType, setActiveType] = useState("Competitions");

  const filteredEvents = events.filter(event => {
    const categoryMatch = activeCategory === "All" || event.category === activeCategory;
    const typeMatch = activeType === "Competitions" ? event.type === "Competition" : 
                     activeType === "Online" ? event.type === "Online" || event.location === "Online" :
                     activeType === "Offline" ? event.location !== "Online" && event.type !== "Online" :
                     activeType === "Expo" ? event.type === "Expo" : true;
    return categoryMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Calendar className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold">E-Cell</span>
                <span className="text-sm text-gray-400">NITK Surathkal</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">HOME</a>
                <a href="#" className="text-white font-medium">EVENTS TAB</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">TEAM</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">GALLERY</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">CONTACT</a>
              </nav>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-white font-medium transition-colors">
              INQUIRE
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Events Header */}
        <div className="flex items-center space-x-3 mb-8">
          <h1 className="text-3xl font-bold">Events</h1>
          <Calendar className="h-8 w-8 text-orange-500" />
        </div>

        {/* Filters */}
        <div className="mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category) => (
              <FilterButton
                key={category}
                label={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>

          {/* Type Filters */}
          <div className="flex flex-wrap gap-3">
            {types.map((type) => (
              <FilterButton
                key={type}
                label={type}
                isActive={activeType === type}
                onClick={() => setActiveType(type)}
                variant="secondary"
              />
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No events found for the selected filters.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
