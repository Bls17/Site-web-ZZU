import React from 'react';
import { Ticket, Plane, Home } from 'lucide-react';

const services = [
  {
    icon: <Ticket size={24} />,
    title: 'Bill Lib',
    description: 'Décarbonation du secteur du retail grâce à un système d information basé sur le principe d infovalorisation. Le produit commercialisé est un ticket de caisse numérique intelligent.'
  },
  
  {
    icon: <Plane size={24} />,
    title: 'Décarbonation du transports',
    description: 'Décarbonation du secteur du transport. La solution est encore confidentielle mais en phase de pré-étude. Pour un GO NOGO courant 2025.'
  },
  {
    icon: <Home size={24} />,
    title: 'Optimisation des foyers',
    description: 'Optimisation d une action récurrente dans les foyers. La solution est encore confidentielle mais en phase de pré-étude. Pour un GO NOGO courant 2025.'
  }
];

export function Services() {
  return (
    <div id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Nos projets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Nous proposons des solutions numériques complètes pour aider votre entreprise à prospérer dans le monde moderne.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-cyan-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}