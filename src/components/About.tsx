import React from 'react';
import { CircuitBoard } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 animate-pulse" />
            <CircuitBoard className="relative w-16 h-16 text-blue-600 mx-auto mb-6" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What is Flow AI Automation?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flow AI Automation provides AI-driven tools that help businesses automate customer service, 
            boost lead generation, and scale operations. Whether it's AI chatbots, automated emails, 
            or AI-powered phone systems, we deliver results-driven solutions for growing businesses.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}