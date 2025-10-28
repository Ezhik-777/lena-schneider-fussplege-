'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    'Professionelle kosmetische Fußpflege',
    'Angenehme Salon-Atmosphäre',
    'Flexible Terminvereinbarung',
  ];

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professionelle Fußpflege{' '}
                <span className="text-primary-600">in Sachsenheim</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Kosmetische Fußpflege und Behandlung in angenehmem Ambiente.
                Professionell, hygienisch, entspannend.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToBooking}
                className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Jetzt Termin buchen</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <a
                href="tel:+4917634237368"
                className="bg-white hover:bg-gray-50 text-primary-700 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Anrufen: +49 176 34237368
              </a>
            </div>

            {/* Trust Badge */}
            <div className="pt-6 flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl" aria-hidden="true">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Zertifiziert</div>
                  <div className="text-xs">Mehrere Zertifikate</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Qualifiziert</div>
                  <div className="text-xs">Ausgebildet</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            {/* Designer Frame */}
            <div className="aspect-square rounded-[2rem] shadow-2xl hover:shadow-primary-300/40 transition-all duration-500">
              {/* Outer frame with gradient */}
              <div className="w-full h-full rounded-[2rem] p-[6px] bg-gradient-to-br from-primary-400 via-accent-300 to-primary-300">
                {/* Inner white border */}
                <div className="w-full h-full rounded-[1.85rem] p-[3px] bg-white">
                  {/* Image container */}
                  <div className="w-full h-full rounded-[1.7rem] overflow-hidden relative shadow-lg">
                    <Image
                      src="/2.webp"
                      alt="Fußpflege Sachsenheim - Professionelle Behandlung"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 bg-accent-200 rounded-full opacity-40 blur-3xl"></div>
            {/* Floating Card - moved to right side */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border border-gray-100 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-2xl" aria-hidden="true">🏆</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">100% Zufriedenheit</div>
                  <div className="text-sm text-gray-600">Unsere Kunden empfehlen uns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
