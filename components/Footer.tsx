'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold mb-4">
              Fußpflege Lena Schneider
            </h3>
            <p className="text-sm leading-relaxed">
              Professionelle kosmetische Fußpflege in Sachsenheim.
              Für gesunde und gepflegte Füße in entspannter Salon-Atmosphäre.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Schnellzugriff</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary-400 transition-colors text-sm"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary-400 transition-colors text-sm"
                >
                  Leistungen
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('benefits');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary-400 transition-colors text-sm"
                >
                  Vorteile
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary-400 transition-colors text-sm"
                >
                  Termin buchen
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Unsere Leistungen</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary-400 transition-colors">
                Nagelpilz-Behandlung
              </li>
              <li className="hover:text-primary-400 transition-colors">
                Smart Pediküre
              </li>
              <li className="hover:text-primary-400 transition-colors">
                Klassische Fachfußpflege
              </li>
              <li className="hover:text-primary-400 transition-colors">
                Fußreflexzonenmassage
              </li>
              <li className="hover:text-primary-400 transition-colors">
                B/S Spangentechnik
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+4917634237368"
                  className="flex items-start space-x-3 hover:text-primary-400 transition-colors text-sm"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <span>+49 176 34237368</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fusspflege-lena-schneider.de"
                  className="flex items-start space-x-3 hover:text-primary-400 transition-colors text-sm"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span>info@fusspflege-lena-schneider.de</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  Sachsenheim & Umgebung<br />
                  Baden-Württemberg, Deutschland
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Fußpflege Lena Schneider. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/impressum"
                className="hover:text-primary-400 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-primary-400 transition-colors"
              >
                Datenschutz
              </Link>
              <button
                onClick={() => {
                  // Open cookie settings
                  if (typeof window !== 'undefined') {
                    localStorage.removeItem('cookieConsent');
                    window.location.reload();
                  }
                }}
                className="hover:text-primary-400 transition-colors"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-40"
        aria-label="Nach oben scrollen"
      >
        ↑
      </button>
    </footer>
  );
}
