import React from 'react';
import { motion } from 'framer-motion';

interface GoogleFormWrapperProps {
  title: string;
  description?: string;
  formUrl: string;
}

export default function GoogleFormWrapper({ title, description, formUrl }: GoogleFormWrapperProps) {
  // Remove any existing parameters and add embedded=true
  const baseUrl = formUrl.split('?')[0];
  const embeddedFormUrl = `${baseUrl}?embedded=true`;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">{title}</h1>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
              {description}
            </p>
          )}
          <div className="w-full overflow-hidden rounded-lg">
            <iframe
              src= "https://docs.google.com/forms/d/e/1FAIpQLSdpDBxOqFEh9DJPm3H8sN4_hj8cwundTK_4hlzeDHlO9DtBmQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Google Form"
              className="mx-auto"
              allow="accelerometer; autoplay; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; xr-spatial-tracking"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation"
            >
              Loading...
            </iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}