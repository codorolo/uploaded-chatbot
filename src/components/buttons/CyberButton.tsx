import React from 'react';
import { motion } from 'framer-motion';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function CyberButton({ children, onClick, className = '' }: CyberButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`cyber-button ${className}`}
    >
      {children}
    </motion.button>
  );
}