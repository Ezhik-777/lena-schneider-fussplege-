'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Die von Ihnen gesuchte Seite existiert leider nicht.
          </p>
          <p className="text-gray-500">
            Möglicherweise wurde sie verschoben oder der Link ist veraltet.
          </p>
        </div>

        {/* Decorative Icon */}
        <div className="mb-12 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
            <span className="text-5xl">🦶</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Home size={20} />
            Zur Startseite
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary-600 text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-all"
          >
            <ArrowLeft size={20} />
            Zurück
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Oder besuchen Sie:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#services"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              Unsere Leistungen
            </Link>
            <Link
              href="/#booking"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              Termin buchen
            </Link>
            <Link
              href="/impressum"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
