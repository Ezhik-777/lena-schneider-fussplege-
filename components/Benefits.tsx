'use client';

import { Home, Clock, Heart, Shield, Star, Calendar } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Home,
      title: 'Gemütliches Ambiente',
      description:
        'Entspannen Sie in angenehmer Salon-Atmosphäre. Ein Ort zum Wohlfühlen und Abschalten.',
    },
    {
      icon: Clock,
      title: 'Ohne Wartezeiten',
      description:
        'Feste Termine nur für Sie. Keine Wartezeiten - pünktlich und zuverlässig.',
    },
    {
      icon: Heart,
      title: 'Persönliche Betreuung',
      description:
        'Individuelle Behandlung in ruhiger Umgebung. Volle Aufmerksamkeit nur für Sie.',
    },
    {
      icon: Shield,
      title: 'Höchste Hygiene',
      description:
        'Sterilisierte Instrumente und professionelle Arbeitsmaterialien nach medizinischen Standards.',
    },
    {
      icon: Calendar,
      title: 'Flexible Termine',
      description:
        'Terminvereinbarung nach Ihren Wünschen - auch abends oder am Wochenende möglich.',
    },
    {
      icon: Star,
      title: 'Erstklassige Qualität',
      description:
        'Professionelle Behandlung mit modernsten Methoden und hochwertigen Produkten.',
    },
  ];

  return (
    <section id="benefits" className="bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
              Ihre Vorteile
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Warum Fußpflege Sachsenheim die <span className="text-primary-600">richtige Wahl</span> ist
          </h2>
          <p className="text-lg text-gray-600">
            Genießen Sie professionelle Fußpflege in angenehmer Salon-Atmosphäre -
            entspannend, individuell und ohne Stress.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:from-primary-50 hover:to-accent-50 transition-all duration-300 border border-gray-200 hover:border-primary-200 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-600 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon
                    className="text-primary-600 group-hover:text-white transition-colors"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Besuchen Sie uns in Sachsenheim!
          </h3>
          <p className="text-primary-50 text-lg mb-6 max-w-2xl mx-auto">
            Buchen Sie jetzt Ihren Termin und genießen Sie professionelle
            Fußpflege in entspannter Salon-Atmosphäre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white hover:bg-gray-100 text-primary-700 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Termin vereinbaren
            </button>
            <a
              href="tel:+4917634237368"
              className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl border-2 border-white/20"
            >
              Direkt anrufen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
