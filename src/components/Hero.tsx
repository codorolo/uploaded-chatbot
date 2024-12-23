import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Sparkles, ArrowRight } from 'lucide-react';
import TypewriterText from './TypewriterText';
import TopographicBackground from './TopographicBackground';
import CyberButton from './buttons/CyberButton';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <TopographicBackground />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Bot className="w-12 h-12 text-blue-400 animate-pulse" />
            <Sparkles className="w-8 h-8 text-purple-400 ml-2" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight font-display">
            <TypewriterText 
              text="Transform Your Business with"
              className="block mb-2"
            />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              <TypewriterText 
                text="AI Automation"
                delay={100}
              />
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            <TypewriterText 
              text="Streamline workflows, capture leads, and boost customer satisfaction with cutting-edge AI solutions."
              delay={30}
            />
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <CyberButton onClick={() => navigate('/get-started')}>
              Get Started <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </CyberButton>
            <CyberButton onClick={() => navigate('/services')} className="bg-purple-600 hover:bg-purple-700">
              Explore Services
            </CyberButton>
            <CyberButton onClick={() => navigate('/contact')} className="bg-gray-700 hover:bg-gray-800">
              Contact Us
            </CyberButton>
          </div>
        </div>
      </div>
    </div>
  );
}