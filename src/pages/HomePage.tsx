import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import About from '../components/About';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={handleGetStarted} />
      <PainPoints />
      <About />
      <Services />
      <Benefits />
      <CTA onGetStarted={handleGetStarted} onContactUs={handleContactUs} />
      <Contact />
    </div>
  );
}

export default HomePage;