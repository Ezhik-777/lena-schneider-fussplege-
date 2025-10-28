'use client';

import { Clock, Euro } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: '🦠',
      title: 'Nagelpilz-Behandlung',
      description: 'Schmerzfrei, ohne Chemie und effektiv: Bereits nach nur sechs Behandlungen kann der Pilz vollständig beseitigt werden.',
      duration: '45-60 Min.',
      price: '60 €',
      features: [
        'Schmerzfreie Behandlung',
        'Ohne Chemie',
        'Effektive Ergebnisse nach 6 Behandlungen',
      ],
    },
    {
      icon: '✨',
      title: 'Smart Pediküre',
      description: 'Moderne Form der Fußpflege: Hornhaut wird sanft entfernt, die Nägel werden geformt und die Haut mit Pflegeöl gepflegt. Das sorgt für glatte, gepflegte Füße und ein langanhaltendes Frischegefühl.',
      duration: '60 Min.',
      price: '55 €',
      features: [
        'Sanfte Hornhautentfernung',
        'Nägel formen',
        'Hautpflege mit Pflegeöl',
        'Langanhaltendes Frischegefühl',
      ],
    },
    {
      icon: '🦶',
      title: 'Klassische Fachfußpflege mit Peeling',
      description: 'Professionelle kosmetische Fußpflege für gesunde und gepflegte Füße.',
      duration: '45-60 Min.',
      price: '49 €',
      features: [
        'Nägel schneiden/kürzen',
        'Nagelhautentfernung',
        'Hornhautentfernung',
        'Pflege der Nägel und Füße',
        'Aufpreis für Shellac: +9€',
      ],
    },
    {
      icon: '💆',
      title: 'Fußreflexzonenmassage',
      description: 'Entspannende und heilende Massage zur Aktivierung der Selbstheilungskräfte und Stressabbau.',
      duration: '30 Min.',
      price: '35 €',
      features: [
        'Ganzkörperliche Wirkung',
        'Stressabbau und Entspannung',
        'Verbesserung des Wohlbefindens',
      ],
    },
    {
      icon: '🔧',
      title: 'B/S Spangentechnik',
      description: 'Innovative Korrekturspange für eingewachsene Fußnägel - schmerzfrei und effektiv.',
      duration: '30-45 Min.',
      price: '29 €',
      note: 'Ohne Fußpflege',
      features: [
        'Für eingewachsene Fußnägel',
        'Schmerzfreie Korrektur',
        'Langanhaltende Ergebnisse',
      ],
    },
    {
      icon: '🧴',
      title: 'Shellac nur entfernen',
      description: 'Professionelle und schonende Entfernung von Shellac-Lack.',
      duration: '15-20 Min.',
      price: '15 €',
      features: [
        'Schonende Entfernung',
        'Schnell und effektiv',
        'Ohne Beschädigung der Nägel',
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
            Von professioneller Pflege bis zur entspannenden Massage -
            wir bieten alles für gesunde und gepflegte Füße.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 flex flex-col"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 text-center">
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <p className="text-gray-600 leading-relaxed min-h-[60px]">
                  {service.description}
                </p>

                {/* Note */}
                {service.note && (
                  <p className="text-sm text-gray-500 italic">
                    {service.note}
                  </p>
                )}

                {/* Features */}
                <ul className="space-y-2 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="text-accent-500 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-4 mt-auto">
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

        {/* New Customer Discount Banner */}
        <div className="mt-8 bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8 border-2 border-accent-200">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Neukunden-Rabatt
            </h3>
            <p className="text-3xl font-bold text-primary-600 mb-2">
              10% Rabatt
            </p>
            <p className="text-gray-700">
              auf Ihre erste Behandlung
            </p>
          </div>
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
