import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, ShieldCheckIcon, ScaleIcon } from '@heroicons/react/outline';

const services = [
  {
    title: 'Droit Civil',
    description: 'Assistance et représentation dans les affaires civiles, y compris les litiges contractuels, les successions et les questions de propriété.',
    icon: <BriefcaseIcon className="h-12 w-12 text-[#0A1F44]" />,
  },
  {
    title: 'Droit Pénal',
    description: 'Défense dans les affaires pénales, garantissant une représentation solide et une protection de vos droits tout au long de la procédure.',
    icon: <ShieldCheckIcon className="h-12 w-12 text-[#0A1F44]" />,
  },
  {
    title: 'Conseil Juridique',
    description: 'Conseils personnalisés pour vous guider dans vos décisions juridiques et vous aider à comprendre vos droits et obligations.',
    icon: <ScaleIcon className="h-12 w-12 text-[#0A1F44]" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F5F5F5] py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0A1F44] mb-12">Services</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#0A1F44] mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}