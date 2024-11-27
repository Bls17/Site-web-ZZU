import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold">Zerozeroun</span>
            <p className="mt-4 text-gray-400">
            Transformer vos idées en réalité numérique.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Bill Lib</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Décarbonation du transport</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Optimisation des foyers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zerozeroun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}