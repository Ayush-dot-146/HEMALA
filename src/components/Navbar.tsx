import React from 'react';
import { Menu, User, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            
            <img 
          src="\image1.jpeg" 
          alt="Logo" 
          className="navbar-logo"
          style={{ height: '60px', width: 'auto' }}
          
        />
          <div className="text-2xl font-bold text-color: '#FFD700'">HEMALA</div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600">
              Become a Member
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600">
              List Your Property
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-red-600">
              <Phone size={18} className="mr-2" />
              +91 9011370939
            </a>
            <a href="/src/components/Auth/Login.html" className="flex items-center text-gray-700 hover:text-red-600">
              <User size={18} className="mr-2" />
              Login / Signup
            </a>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;