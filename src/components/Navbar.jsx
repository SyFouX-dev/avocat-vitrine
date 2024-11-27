import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {
  const [isActive, setIsActive] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActive = (section) => {
    setIsActive(section);
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0A1F44] shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-semibold text-[#F5F5F5] cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Maître Jean Dupont
        </Link>

        <div className="hidden md:flex space-x-6">
          {['home', 'about', 'services', 'testimonials', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className={`text-[#F5F5F5] text-lg font-medium relative pb-1 cursor-pointer hover:text-gray-300 transition duration-300`}
              onSetActive={() => handleSetActive(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {isActive === section && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"
                />
              )}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-[#F5F5F5] focus:outline-none"
        >
          {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0A1F44] bg-opacity-95 z-40 space-y-4 py-4 flex flex-col items-center">
          {['home', 'about', 'services', 'testimonials', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-[#F5F5F5] text-lg font-medium cursor-pointer hover:text-gray-300 transition duration-300"
              onClick={() => handleSetActive(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;