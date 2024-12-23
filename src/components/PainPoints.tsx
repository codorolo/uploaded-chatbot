import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const problems = [
  {
    before: "Missed calls and delayed responses",
    after: "24/7 instant response to every inquiry"
  },
  {
    before: "Manual lead follow-ups",
    after: "Automated, personalized follow-up sequences"
  },
  {
    before: "Inconsistent customer service",
    after: "AI-powered consistent experience"
  }
];

export default function PainPoints() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Struggling to Keep Up with Customer Demands?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional methods can't keep up with today's expectations. 
            See how AI automation transforms your workflow.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6"
              >
                <div className="flex-1 p-6 bg-red-50 rounded-lg relative overflow-hidden">
                  <AlertCircle className="w-6 h-6 text-red-500 mb-2" />
                  <p className="text-gray-800 font-medium">{problem.before}</p>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-100 rounded-full -translate-y-8 translate-x-8 opacity-50" />
                </div>
                <div className="flex-1 p-6 bg-green-50 rounded-lg relative overflow-hidden">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
                  <p className="text-gray-800 font-medium">{problem.after}</p>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-full -translate-y-8 translate-x-8 opacity-50" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-20 animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-xl shadow-2xl relative"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}