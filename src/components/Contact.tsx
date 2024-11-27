import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Contactez-nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contactez nous pour plus d'informations
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="text-cyan-400" size={24} />
              <div>
                <h3 className="font-semibold text-navy-900">Email Us</h3>
                <p className="text-gray-600">stephane.nganda@zerozeroun.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-cyan-400" size={24} />
              <div>
                <h3 className="font-semibold text-navy-900">Call Us</h3>
                <p className="text-gray-600">07 67 95 21 37</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-cyan-400" size={24} />
              <div>
                <h3 className="font-semibold text-navy-900">Visit Us</h3>
                <p className="text-gray-600">25 Quai Paul Doumer<br />Courbevoie,92400</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              ></textarea>
            </div>
            <button className="w-full bg-cyan-400 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}