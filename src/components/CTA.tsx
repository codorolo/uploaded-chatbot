import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';
import CyberButton from './buttons/CyberButton';

export default function CTA() {
  const navigate = useNavigate();

  return (
    <div className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Zap className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-white mb-8">
          Ready to Automate Your Business?
        </h2>
        <div className="flex justify-center gap-4">
          <CyberButton 
            onClick={() => navigate('/get-started')}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Get Started <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </CyberButton>
        </div>
      </div>
    </div>
  );
}