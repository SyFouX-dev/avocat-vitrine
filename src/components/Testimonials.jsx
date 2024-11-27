import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Marie Dupont',
    feedback: 'Maître Jean Dupont a été extrêmement professionnel et attentif. Grâce à lui, j’ai obtenu gain de cause dans mon affaire.',
    position: 'Client',
  },
  {
    name: 'Paul Lambert',
    feedback: 'Un avocat compétent et passionné par la justice. Son dévouement et son expertise sont remarquables.',
    position: 'Client',
  },
  {
    name: 'Sophie Martin',
    feedback: 'Je recommande vivement Maître Dupont. Il a su me conseiller et m’orienter efficacement.',
    position: 'Client',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F5F5F5] py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0A1F44] mb-12">Témoignages</h2>
        <div className="flex flex-col md:flex-row md:space-x-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
            >
              <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-semibold text-[#0A1F44]">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}