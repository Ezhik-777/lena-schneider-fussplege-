'use client';

import { Phone, Mail } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-12 text-center text-white">
            <div className="text-6xl mb-6">🦶</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fußpflege Lena Schneider
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Sachsenheim
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Coming Soon Message */}
            <div className="text-center space-y-4">
              <div className="inline-block">
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
                  Bald verfügbar
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Unsere Website befindet sich<br />
                <span className="text-primary-600">in der Entwicklung</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Wir arbeiten mit Hochdruck daran, Ihnen bald eine moderne und
                benutzerfreundliche Website zu präsentieren. Freuen Sie sich auf
                professionelle kosmetische Fußpflege in Sachsenheim!
              </p>
            </div>

            {/* Contact Section */}
            <div className="border-t border-gray-200 pt-8">
              <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
                <a
                  href="tel:+4917634237368"
                  className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all hover:shadow-md group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      Telefon
                    </div>
                    <div className="text-sm text-gray-600">
                      +49 176 34237368
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@fusspflege-lena-schneider.de"
                  className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all hover:shadow-md group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      E-Mail
                    </div>
                    <div className="text-sm text-gray-600">
                      info@fusspflege-lena-schneider.de
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Special Offer */}
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8 border-2 border-accent-200">
              <div className="text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Neukunden-Rabatt
                </h3>
                <p className="text-3xl font-bold text-primary-600 mb-1">
                  10% Rabatt
                </p>
                <p className="text-gray-700">
                  auf Ihre erste Behandlung
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p>© 2025 Fußpflege Lena Schneider - Sachsenheim</p>
        </div>
      </div>
    </div>
  );
}
