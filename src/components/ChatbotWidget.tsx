import React, { useEffect } from 'react';

declare global {
  interface Window {
    VG_CONFIG?: {
      ID: string;
      region: string;
      render: string;
      stylesheets: string[];
    };
  }
}

export default function ChatbotWidget() {
  useEffect(() => {
    // Initialize configuration
    window.VG_CONFIG = {
      ID: "jzoqf9mlkwjfm5cq",
      region: 'na',
      render: 'popup', // Changed to popup for better visibility
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
    };

    // Create and append script
    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="VG_OVERLAY_CONTAINER" className="fixed bottom-4 right-4 z-50" />;
}