import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-tekia-navy overflow-x-hidden selection:bg-amber-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;