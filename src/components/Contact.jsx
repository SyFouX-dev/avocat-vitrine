import React from "react";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F5F5F5] py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#0A1F44] mb-12 text-center">
          Contact
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-10">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0 w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-[#0A1F44] mb-4">
              Coordonnées
            </h3>
            <a
              href="tel:+0123456789"
              className="flex items-center text-gray-700 mb-4"
            >
              <PhoneIcon className="w-5 h-5 text-[#0A1F44] mr-2" />
              <span>(01) 23 45 67 89</span>
            </a>
            <div className="flex items-center text-gray-700 mb-4">
              <MailIcon className="w-5 h-5 text-[#0A1F44] mr-2" />
              <span>contact@avocatdupont.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <LocationMarkerIcon className="w-5 h-5 text-[#0A1F44] mr-2" />
              <span>123 Rue de la Loi, Paris, France</span>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="w-6 h-6 text-[#0A1F44] hover:text-[#3B5998]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6 text-[#0A1F44] hover:text-[#1DA1F2]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="w-6 h-6 text-[#0A1F44] hover:text-[#0077B5]" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-[#0A1F44] mb-4">
              Envoyer un Message
            </h3>
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="peer w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] text-black"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-gray-700 transition-all transform -translate-y-2 scale-90 peer-focus:top-0 peer-focus:scale-90 peer-focus:-translate-y-2 bg-white px-1"
                >
                  Nom
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="peer w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] text-black"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-gray-700 transition-all transform -translate-y-2 scale-90 peer-focus:top-0 peer-focus:scale-90 peer-focus:-translate-y-2 bg-white px-1"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  className="peer w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] text-black"
                  rows="5"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-gray-700 transition-all transform -translate-y-2 scale-90 peer-focus:top-0 peer-focus:scale-90 peer-focus:-translate-y-2 bg-white px-1"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1E3A8A] text-white py-2 rounded-lg hover:bg-[#163366] transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}