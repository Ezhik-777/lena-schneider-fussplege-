'use client';

import { Clock, Euro } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: '🦶',
      title: 'Nagelpilz-Behandlung',
      description: 'Professionelle Behandlung von Nagelpilz mit modernen Methoden und nachhaltigen Ergebnissen.',
      duration: '45-60 Min.',
      price: 'ab xx €',
      features: [
        'Gründliche Diagnose',
        'Fachgerechte Behandlung',
        'Beratung zur Nachsorge',
      ],
    },
    {
      icon: '✨',
      title: 'Smart Pediküre',
      description: 'Umfassende kosmetische und medizinische Fußpflege für gesunde und schöne Füße.',
      duration: '60 Min.',
      price: 'ab xx €',
      features: [
        'Nagelpflege und -schnitt',
        'Hornhautentfernung',
        'Fußmassage',
      ],
    },
    {
      icon: '⚕️',
      title: 'Medizinische Fußpflege',
      description: 'Präventive und therapeutische Fußpflege nach medizinischen Standards.',
      duration: '45-60 Min.',
      price: 'ab xx €',
      features: [
        'Behandlung von Hühneraugen',
        'Eingewachsene Nägel',
        'Diabetischer Fuß',
      ],
    },
    {
      icon: '💆',
      title: 'Fußreflexzonenmassage',
      description: 'Entspannende und heilende Massage zur Aktivierung der Selbstheilungskräfte.',
      duration: '30-45 Min.',
      price: 'ab xx €',
      features: [
        'Ganzkörperliche Wirkung',
        'Stressabbau',
        'Verbesserung des Wohlbefindens',
      ],
    },
    {
      icon: '🔧',
      title: 'B/S Spangentechnik',
      description: 'Innovative Korrekturspange für eingewachsene und deformierte Nägel - schmerzfrei und effektiv.',
      duration: '60-75 Min.',
      price: 'ab xx €',
      features: [
        'Schmerzfreie Korrektur',
        'Langanhaltende Ergebnisse',
        'Regelmäßige Kontrolle',
      ],
    },
  ];

  return (
    <section id="services" className="bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
              Unsere Leistungen
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professionelle Fußpflegedienstleistungen
          </h2>
          <p className="text-lg text-gray-600">
            Von medizinischer Behandlung bis zur entspannenden Massage -
            wir bieten alles für gesunde und gepflegte Füße.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 text-center">
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 leading-relaxed min-h-[60px]">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="text-accent-500 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-lg font-bold text-primary-600">
                      <Euro size={18} />
                      <span>{service.price.replace('ab ', '').replace(' €', '')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Haben Sie Fragen zu unseren Leistungen? Kontaktieren Sie uns gerne!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Jetzt Termin vereinbaren
          </button>
        </div>
      </div>
    </section>
  );
}
