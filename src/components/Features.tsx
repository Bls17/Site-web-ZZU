import React from 'react';
import { Code2, Palette, Lightbulb, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Code2 size={24} />,
    title: 'Clean Code',
    description: 'We write elegant, maintainable code that scales with your business.'
  },
  {
    icon: <Palette size={24} />,
    title: 'Modern Design',
    description: 'Beautiful, intuitive interfaces that engage and delight users.'
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Innovation',
    description: 'Cutting-edge solutions that keep you ahead of the competition.'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Fast Delivery',
    description: 'Rapid development and deployment to meet your deadlines.'
  }
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine creativity with technical excellence to deliver outstanding results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}