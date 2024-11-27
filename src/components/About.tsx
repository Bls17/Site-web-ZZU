import React from 'react';

export function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/logo.svg" 
              alt="About Us"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Notre Story</h2>
            <p className="text-gray-600 mb-6">
            Zerozeroun est une startup innovante qui a pour objectif en un premier temps de reduire l'empreinte carbone des tickets de caisse des supermarches. Notre projet consiste a proposer une solution qui genere electroniquement le ticket de caisse et remplacer le traditionnel ticket de papier contribuant ainsi a la preservation de l'environnement et la consommation de papier
            </p>
            
            <button className="bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Apprendre plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}