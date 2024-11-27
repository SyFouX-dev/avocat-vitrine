// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0A1F44] min-h-screen text-[#F5F5F5]">
      <Navbar />
      <div className="pt-20">
        <Home />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;