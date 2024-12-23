import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-blue-400" />
              <span className="font-bold text-xl">Flow AI</span>
            </div>
            <p className="text-gray-400">
              Transforming businesses with AI automation solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400">Contact</Link></li>
              <li><Link to="/get-started" className="text-gray-400 hover:text-blue-400">Get Started</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">AI Chatbots</li>
              <li className="text-gray-400">Email Automation</li>
              <li className="text-gray-400">AI Phone Systems</li>
              <li className="text-gray-400">Social Media Automation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>cody@flowaiautomation.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>British Columbia, Canada</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Flow AI Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}