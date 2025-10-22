'use client';

import { MapPin, Clock, Smartphone, Mail } from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';

export default function ServiceArea() {
  const salonInfo = {
    address: BUSINESS_INFO.address.street,
    plz: BUSINESS_INFO.address.postalCode,
    city: BUSINESS_INFO.address.city,
    phone: BUSINESS_INFO.contact.phoneFormatted,
    email: BUSINESS_INFO.contact.email,
  };

  return (
    <section id="service-area" className="bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
                Unser Salon
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Besuchen Sie uns <span className="text-primary-600">in Sachsenheim</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unser gemütlicher Salon befindet sich in Sachsenheim.
              Kommen Sie vorbei und genießen Sie professionelle Fußpflege in
              entspannter Atmosphäre.
            </p>

            {/* Salon Info Cards */}
            <div className="space-y-4 pt-6">
              {/* Address */}
              <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-700">
                    {salonInfo.address}<br />
                    {salonInfo.plz} {salonInfo.city}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 bg-accent-50 rounded-lg">
                <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                  <a href={BUSINESS_INFO.contact.phoneHref} className="text-accent-700 hover:text-accent-800 font-semibold">
                    {BUSINESS_INFO.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">E-Mail</h3>
                  <a href={BUSINESS_INFO.contact.emailHref} className="text-gray-700 hover:text-gray-900">
                    {BUSINESS_INFO.contact.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Terminvereinbarung</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-semibold text-primary-700">Nur nach Terminvereinbarung</p>
                    <p className="text-gray-600">
                      Behandlungen finden ausschließlich nach vorheriger Terminabsprache statt.
                    </p>
                    <div className="pt-2 space-y-1">
                      <p className="text-xs text-gray-600">
                        <strong>Mögliche Zeiten:</strong>
                      </p>
                      <p className="text-xs text-gray-600">Mo - Fr: 09:00 - 18:00 Uhr</p>
                      <p className="text-xs text-gray-600">Sa: 09:00 - 14:00 Uhr</p>
                      <p className="text-xs text-gray-600 italic mt-2">
                        * Termine außerhalb dieser Zeiten nach Absprache möglich
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <div className="bg-accent-50 border-l-4 border-accent-600 p-4 rounded">
                <p className="text-gray-700">
                  <strong>💡 Tipp:</strong> Rufen Sie uns gerne an, wenn Sie Fragen haben
                  oder einen Termin vereinbaren möchten. Wir freuen uns auf Sie!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const element = document.getElementById('booking');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  Online Termin buchen
                </button>
                <a
                  href={BUSINESS_INFO.contact.phoneHref}
                  className="bg-white hover:bg-gray-50 text-primary-700 border-2 border-primary-600 px-6 py-3 rounded-lg font-semibold transition-all text-center"
                >
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="relative">
            <div className="aspect-square rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address.fullAddress)}&output=embed&z=15`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Karte zu ${BUSINESS_INFO.name} in ${BUSINESS_INFO.address.city}`}
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs z-10">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">
                    Besuchen Sie uns
                  </div>
                  <div className="text-sm text-gray-600">
                    {BUSINESS_INFO.address.street}<br />
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
