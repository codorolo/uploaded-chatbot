import React from 'react';
import { motion } from 'framer-motion';

export default function TopographicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="w-full h-full opacity-20"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="animate-gradient-shift" style={{ stopColor: '#3B82F6' }} />
            <stop offset="100%" className="animate-gradient-shift" style={{ stopColor: '#8B5CF6' }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 0.9],
            opacity: [0.5, 0.8, 0.6],
            filter: ['blur(0px)', 'blur(2px)', 'blur(0px)']
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${100 + i * 60},${150 + i * 20} Q${400},${250 + i * 40} ${700 - i * 60},${150 + i * 30}`}
              fill="none"
              stroke="url(#topo-gradient)"
              strokeWidth="3"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0.3, 0.8, 0.3],
                strokeWidth: [2, 4, 2]
              }}
              transition={{
                duration: 6,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}