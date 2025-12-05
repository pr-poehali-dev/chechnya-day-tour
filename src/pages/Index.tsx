import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tours from '@/components/Tours';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Tours />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
