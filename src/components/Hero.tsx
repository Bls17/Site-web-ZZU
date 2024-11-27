import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div id="home" className="relative bg-navy-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              La décarbonation <span className="text-cyan-400">par le digital</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
            Nous transformons des défis complexes en solutions numériques élégantes. Votre vision, notre expertise.
            </p>
            <button className="bg-cyan-400 text-navy-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-300 transition-colors">
            Commencer
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="relative flex justify-center items-center">
            <img 
              src="/logo_nu.png" 
              alt="Geometric Logo"
              className="w-72 h-3/4 max-w-md mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
}