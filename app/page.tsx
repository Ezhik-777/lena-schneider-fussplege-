'use client';

import { Phone, Mail } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="max-w-3xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-6 sm:p-8 md:p-12 text-center text-white">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🦶</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
              Fußpflege Lena Schneider
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-100 font-medium">
              Sachsenheim
            </p>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8">
            {/* Coming Soon Message */}
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="inline-block">
                <span className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-primary-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  Bald verfügbar
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-2">
                Unsere Website befindet sich<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="text-primary-600">in der Entwicklung</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
                Wir arbeiten mit Hochdruck daran, Ihnen bald eine moderne und
                benutzerfreundliche Website zu präsentieren. Freuen Sie sich auf
                professionelle kosmetische Fußpflege in Sachsenheim!
              </p>
            </div>

            {/* Contact Section */}
            <div className="border-t border-gray-200 pt-6 sm:pt-8">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-xl mx-auto">
                <a
                  href="tel:+4917634237368"
                  className="flex flex-col items-center space-y-2 sm:space-y-3 p-5 sm:p-6 rounded-xl bg-gray-50 hover:bg-primary-50 active:bg-primary-100 transition-all hover:shadow-md active:scale-95 group touch-manipulation"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-base sm:text-lg text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                      Telefon
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">
                      +49 176 34237368
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@fusspflege-lena-schneider.de"
                  className="flex flex-col items-center space-y-2 sm:space-y-3 p-5 sm:p-6 rounded-xl bg-gray-50 hover:bg-primary-50 active:bg-primary-100 transition-all hover:shadow-md active:scale-95 group touch-manipulation"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-base sm:text-lg text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                      E-Mail
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium break-all px-1">
                      info@fusspflege-lena-schneider.de
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Special Offer */}
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-accent-200 shadow-sm">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎉</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Neukunden-Rabatt
                </h3>
                <p className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                  10% Rabatt
                </p>
                <p className="text-sm sm:text-base text-gray-700 font-medium">
                  auf Ihre erste Behandlung
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base px-4">
          <p>© 2025 Fußpflege Lena Schneider - Sachsenheim</p>
        </div>
      </div>
    </div>
  );
}
