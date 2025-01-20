import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HotelProps {
  hotel: {
    name: string;
    location: string;
    rating: number;
    price: number;
    image: string;
    amenities: string[];
  };
}

const HotelCard: React.FC<HotelProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{hotel.name}</h3>
          <div className="flex items-center bg-green-100 px-2 py-1 rounded">
            <Star size={16} className="text-green-600" />
            <span className="ml-1 text-green-600">{hotel.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{hotel.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.map((amenity, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">₹{hotel.price}</span>
            <span className="text-gray-600 text-sm">/night</span>
          </div>
          <a href="http://wa.me/918459477665">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              Book Now
            </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;