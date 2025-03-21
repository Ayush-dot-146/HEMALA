import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Login from './components/Auth/Login';

import HotelCard from './components/HotelCard';
import Footer from './components/Footer';
import Register from './components/Auth/Register';

const featuredHotels = [
  {
    id: 1,
    name: "Brekka Jungle Retreat Farmhouse",
    location: "brekka club Road, Wanjara, Maharashtra 441103",
    rating: 4.0,
    price: 599,
    image: "https://github.com/Ayush-dot-146/HEMALA/blob/main/hot1.jpeg?raw=true",
    amenities: [ "AC", "Breakfast","Lunch","High Tea","Dinner","Swimming Pool","Rain Dance","DJ","Destination Wedding"]
  },
  {
    id: 2,
    name: "Rahul Service Apartment",
    location: "P.d Hospital, Khadgaon Rd, Duttawadi, Nagpur, Davlameti, Maharashtra 440023",
    rating: 4.8,
    price: 1199,
    image: "data:image/jpeg;base64,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",
    amenities: ["Wifi","AC"]
  },
  {
    id: 3,
    name: "KK Farms",
    location: "Ladai, Maharashtra 440023",
    rating: 4.6,
    price: 1199,
    image: "https://github.com/Ayush-dot-146/HEMALA/blob/main/hot3.jpg?raw=true",
    amenities: ["Luxary Rooms","Pool","Lawn"]
  },
  {
    id: 4,
    name: "Green Groves Farm House",
    location: "Tidangi and Teigaon Villages., Nagpur, Maharashtra 441306",
    rating: 4.8,
    price: 1549,
    image: "https://github.com/Ayush-dot-146/HEMALA/blob/main/hot4.jpg?raw=true",
    amenities: ["Luxary Rooms", "Pool", "Club House","Lawn","Indoor Games","Outdoor Games","Garden","Swimming Pool","Rain Dance","DJ","Destination Wedding","Adventure Park"]
  },
  {
    id: 5,
    name: "Big Chill",
    location: "Byramji Town, Nagpur, Maharashtra 440013",
    rating: 4.6,
    price: 11999,
    image: "https://github.com/Ayush-dot-146/HEMALA/blob/main/hot5.png?raw=true",
    amenities:["Birthday Parties","DJ","Pool","3 BHK Villa","For 10 Peoples"]
  }
];

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<any | null>(null);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setSearchResult(null);
      return;
    }
    const result = featuredHotels.find(hotel => hotel.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResult(result || 'not found');
  };

  const videoStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1, // Ensures the video stays in the background
  };

  return (
    
      
        <Navbar />
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <video
              style={videoStyle}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://github.com/Ayush-dot-146/HEMALA/blob/main/video(1).mp4?raw=true/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <div className="w-full max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Find the perfect hotel at the best prices
              </h1>
              {/* Search Bar */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Enter city, locality or hotel"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Search
                  </button>
                </div>
              </div>
              {searchResult && (
                <div className="mt-8">
                  {searchResult === 'not found' ? (
                    <div className="text-center text-white">Hotel not found</div>
                  ) : (
                    <HotelCard hotel={searchResult} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6">Featured Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
        
        <Footer />
      
    
  );
};

export default App;
