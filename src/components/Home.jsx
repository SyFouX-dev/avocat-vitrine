// Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Avocat from "../components/asset/Home-img.jpg";

function Home() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${Avocat})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-transparent to-[#0A1F44] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-[#F5F5F5]">
            Maître Jean Dupont
          </h1>
          <p className="text-lg md:text-xl font-light italic mb-8 max-w-xl mx-auto text-[#F5F5F5]">
            "La défense de vos droits est notre priorité, avec intégrité et excellence."
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Expert en droit civil et pénal, Maître Dupont vous accompagne avec bienveillance et professionnalisme pour vous aider à surmonter vos défis juridiques.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-[#1E3A8A] text-[#F5F5F5] px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#163366] transition duration-300 shadow-lg"
            >
              Prendre un rendez-vous
            </a>
            <a
              href="#about"
              className="bg-transparent border border-[#F5F5F5] px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#F5F5F5] hover:text-[#0A1F44] transition duration-300 shadow-lg"
            >
              En savoir plus
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;