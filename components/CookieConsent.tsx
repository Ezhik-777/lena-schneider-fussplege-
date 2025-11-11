'use client';

import { useState, useEffect } from 'react';
import { X, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
        // Apply saved preferences (e.g., load analytics scripts)
        if (saved.analytics) {
          loadAnalytics();
        }
      } catch (e) {
        console.error('Error parsing cookie preferences:', e);
      }
    }
  }, []);

  const loadAnalytics = () => {
    // Load Google Analytics or other analytics scripts
    // Example:
    // if (process.env.NEXT_PUBLIC_GA_ID) {
    //   // Load GA script
    // }
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics enabled');
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Apply preferences
    if (prefs.analytics) {
      loadAnalytics();
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
    };
    savePreferences(necessaryOnly);
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl animate-in slide-in-from-bottom duration-500">
        <div className="container py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                🍪 Diese Website verwendet Cookies
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wir verwenden Cookies, um Inhalte zu personalisieren, Funktionen für soziale
                Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren.
                Weitere Informationen finden Sie in unserer{' '}
                <a
                  href="/datenschutz"
                  className="text-primary-600 hover:text-primary-700 underline font-semibold"
                >
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <Settings size={18} />
                <span>Einstellungen</span>
              </button>
              <button
                onClick={acceptNecessary}
                className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Nur notwendige
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors shadow-md whitespace-nowrap"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">Cookie-Einstellungen</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Schließen"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-6">
              <p className="text-gray-600">
                Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
                Sie können auswählen, welche Cookie-Kategorien Sie zulassen möchten.
              </p>

              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 flex items-center">
                      <span className="mr-2">✓</span>
                      Notwendige Cookies
                    </h3>
                    <p className="text-sm text-gray-600">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und
                      können nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Speicherung Ihrer Cookie-Präferenzen</p>
                  <p>• Session-Management</p>
                  <p>• Sicherheitsfunktionen</p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Funktionale Cookies</h3>
                    <p className="text-sm text-gray-600">
                      Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung,
                      wie z.B. das Speichern von Einstellungen.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() =>
                        setPreferences((prev) => ({
                          ...prev,
                          functional: !prev.functional,
                        }))
                      }
                      className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 ${
                        preferences.functional
                          ? 'bg-primary-600 justify-end'
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Speicherung von Präferenzen</p>
                  <p>• Personalisierte Inhalte</p>
                  <p>• Verbesserte Benutzererfahrung</p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Analyse-Cookies</h3>
                    <p className="text-sm text-gray-600">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website
                      interagieren, indem Informationen anonym gesammelt werden.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() =>
                        setPreferences((prev) => ({
                          ...prev,
                          analytics: !prev.analytics,
                        }))
                      }
                      className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 ${
                        preferences.analytics
                          ? 'bg-primary-600 justify-end'
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Google Analytics</p>
                  <p>• Besucherstatistiken</p>
                  <p>• Leistungsoptimierung</p>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Hinweis:</strong> Ihre Auswahl gilt für 12 Monate. Sie können Ihre
                  Einstellungen jederzeit über den Link im Footer ändern.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row gap-3 rounded-b-2xl">
              <button
                onClick={acceptNecessary}
                className="flex-1 px-6 py-3 bg-white hover:bg-gray-100 text-gray-700 border-2 border-gray-300 rounded-lg font-semibold transition-colors"
              >
                Nur notwendige
              </button>
              <button
                onClick={saveCustom}
                className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors shadow-md"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold transition-colors shadow-md"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
