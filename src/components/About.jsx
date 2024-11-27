import React from 'react';
import { motion } from 'framer-motion';
import AvocatPhoto from '../components/asset/avocat-photo.jpg';

export default function About() {
  return (
    <section id="about" className="bg-[#F5F5F5] py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-10">
        
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src={AvocatPhoto}
            alt="Maître Jean Dupont"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">À Propos de Maître Jean Dupont</h2>
          <p className="text-lg text-gray-700 mb-4">
            Maître Jean Dupont est un avocat expérimenté spécialisé en droit civil et pénal. Avec plus de 15 ans de pratique, il s’engage à offrir des services juridiques d’exception, répondant aux besoins de chaque client avec intégrité et professionnalisme.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Passionné par la défense des droits individuels, Maître Dupont travaille avec diligence pour garantir que chaque dossier est traité avec le plus grand soin et que chaque client est entendu. Il croit fermement en une justice équitable et se consacre à défendre ses clients avec la plus grande compétence.
          </p>
          <p className="text-lg text-gray-700">
            Que vous ayez besoin de conseils juridiques, d'une défense solide ou d'une représentation fiable, Maître Jean Dupont est là pour vous accompagner à chaque étape de votre démarche.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}