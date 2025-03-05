import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimomials from './components/Testimomials';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Element name="hero">
          <HeroSection />{/* Inicio */}
        </Element>
        <Element name="features">
          <FeatureSection /> {/* Servicios */}
        </Element>
        <Element name="workflow">
          <Workflow /> {/* Nosotros */}
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="testimonials">
          <Testimomials /> {/* Expertos en IT */}
        </Element>
        <Footer />
      </div>
    </div>
  );
};

export default App;