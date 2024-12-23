import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-blue-400" />
              <span className="font-bold text-xl">Flow AI</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/services" 
              className={`hover:text-blue-400 transition-colors ${isActive('/services') ? 'text-blue-400' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-blue-400 transition-colors ${isActive('/about') ? 'text-blue-400' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-blue-400 transition-colors ${isActive('/contact') ? 'text-blue-400' : ''}`}
            >
              Contact
            </Link>
            <Link 
              to="/get-started" 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}