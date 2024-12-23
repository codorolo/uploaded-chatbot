import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Target, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We're constantly pushing the boundaries of what's possible with AI automation."
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Your success is our success. We're committed to delivering solutions that drive real results."
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "We believe in creating solutions that save time, reduce costs, and maximize productivity."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 animate-pulse" />
            <Bot className="relative w-16 h-16 text-blue-600 mx-auto mb-6" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Flow AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize business automation through innovative AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Flow AI Automation is dedicated to making advanced AI technology accessible to businesses of all sizes. 
              We believe that automation should be intuitive, powerful, and transformative.
            </p>
            <p className="text-lg text-gray-600">
              Our goal is to help businesses streamline their operations, enhance customer experiences, 
              and achieve sustainable growth through cutting-edge AI solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-20 animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Technology visualization"
              className="rounded-xl shadow-2xl relative"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}