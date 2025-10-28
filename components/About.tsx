'use client';

import Image from 'next/image';
import { Award, Heart, Shield, Users } from 'lucide-react';

export default function About() {
  const credentials = [
    {
      icon: Award,
      title: 'Mehrfach Zertifiziert',
      description: 'Professionelle Zertifizierungen in kosmetischer Fußpflege',
    },
    {
      icon: Users,
      title: 'Professionell',
      description: 'Qualifizierte Ausbildung und individuelle Betreuung',
    },
    {
      icon: Heart,
      title: 'Mit Leidenschaft',
      description: 'Individuelle und einfühlsame Betreuung',
    },
    {
      icon: Shield,
      title: 'Höchste Hygiene',
      description: 'Sterilisierte Instrumente nach medizinischen Standards',
    },
  ];

  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Owner Photo */}
          <div className="order-2 md:order-1">
            <div className="relative">
              {/* Designer Frame */}
              <div className="aspect-[4/5] rounded-[2rem] shadow-2xl hover:shadow-primary-300/40 transition-all duration-500">
                {/* Outer frame with gradient */}
                <div className="w-full h-full rounded-[2rem] p-[6px] bg-gradient-to-br from-primary-400 via-accent-300 to-primary-300">
                  {/* Inner white border */}
                  <div className="w-full h-full rounded-[1.85rem] p-[3px] bg-white">
                    {/* Image container */}
                    <div className="w-full h-full rounded-[1.7rem] overflow-hidden relative shadow-lg">
                      <Image
                        src="/1.webp"
                        alt="Lena - Professionelle Fußpflegerin in Sachsenheim"
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
              <div className="absolute -z-10 -bottom-6 -right-6 w-72 h-72 bg-accent-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-30 blur-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
                  Über uns
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Willkommen bei <span className="text-primary-600">Fußpflege Sachsenheim</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Herzlich willkommen in meinem Salon in Sachsenheim! Ich bin Lena und
                mit mehreren professionellen Zertifizierungen biete ich Ihnen qualifizierte
                Fußpflegedienstleistungen in entspannter Atmosphäre.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mein Ziel ist es, Ihnen nicht nur gesunde und gepflegte Füße zu schenken,
                sondern auch eine Auszeit vom Alltag zu bieten. Jede Behandlung wird
                individuell auf Ihre Bedürfnisse abgestimmt - in einem gemütlichen Ambiente,
                wo Sie sich wohlfühlen können.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {credentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
