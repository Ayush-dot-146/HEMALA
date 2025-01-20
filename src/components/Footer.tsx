import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About HEMALA</h3>
            <ul className="space-y-2">
              <li><a href="/src/components/aboutus.html" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press Center</a></li>
              <li><a href="#" className="hover:text-white">HEMALA Circle</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Properties</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Hotels</a></li>
              <li><a href="#" className="hover:text-white">Homes</a></li>
              <li><a href="#" className="hover:text-white">List Your Property</a></li>
              <li><a href="#" className="hover:text-white">Partner Hub</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-white"><Facebook /></a>
              <a href="#" className="hover:text-white"><Twitter /></a>
              <a href="https://www.instagram.com/hemala_13?igsh=MXpiMm05OGZpcWdi" className="hover:text-white"><Instagram /></a>
              <a href="#" className="hover:text-white"><Youtube /></a>
            </div>
            <p>Download HEMALA App</p>
            <div className="flex space-x-4 mt-2">
              <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=100" alt="App Store" className="h-10" />
              <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=100" alt="Play Store" className="h-10" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 HEMALA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;