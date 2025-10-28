'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '@/lib/constants';

interface BookingFormData {
  vorname: string;
  nachname: string;
  telefon: string;
  email: string;
  leistung: string;
  wunschtermin: string;
  wunschuhrzeit: string;
  nachricht: string;
  datenschutz: boolean;
}

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>();

  const services = [
    ...SERVICES.map(s => s.title),
    'Mehrere Leistungen',
  ];

  const timeSlots = [
    '08:00 - 09:00',
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
    '18:00 - 19:00',
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Airtable API integration
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        // Scroll to success message
        setTimeout(() => {
          const element = document.getElementById('success-message');
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
                Termin buchen
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vereinbaren Sie jetzt Ihren <span className="text-primary-600">Wunschtermin</span>
            </h2>
            <p className="text-lg text-gray-600">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
            </p>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div
              id="success-message"
              role="status"
              aria-live="polite"
              className="mb-8 bg-green-50 border-l-4 border-green-500 rounded-lg p-6 flex items-start space-x-3 animate-in slide-in-from-top"
            >
              <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={24} aria-hidden="true" />
              <div>
                <h3 className="text-green-900 font-bold mb-1">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-green-700">
                  Wir haben Ihre Terminanfrage erhalten und werden uns in Kürze bei Ihnen melden.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div
              role="alert"
              aria-live="assertive"
              className="mb-8 bg-red-50 border-l-4 border-red-500 rounded-lg p-6 flex items-start space-x-3"
            >
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={24} aria-hidden="true" />
              <div>
                <h3 className="text-red-900 font-bold mb-1">Fehler beim Senden</h3>
                <p className="text-red-700">
                  Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
                </p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6">
            {/* Persönliche Daten */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                Persönliche Daten
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="vorname" className="block text-sm font-semibold text-gray-700 mb-2">
                    Vorname *
                  </label>
                  <input
                    {...register('vorname', { required: 'Vorname ist erforderlich' })}
                    type="text"
                    id="vorname"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.vorname}
                    aria-describedby={errors.vorname ? 'vorname-error' : undefined}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    placeholder="Max"
                  />
                  {errors.vorname && (
                    <p id="vorname-error" role="alert" className="mt-1 text-sm text-red-600">{errors.vorname.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="nachname" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nachname *
                  </label>
                  <input
                    {...register('nachname', { required: 'Nachname ist erforderlich' })}
                    type="text"
                    id="nachname"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.nachname}
                    aria-describedby={errors.nachname ? 'nachname-error' : undefined}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    placeholder="Mustermann"
                  />
                  {errors.nachname && (
                    <p id="nachname-error" role="alert" className="mt-1 text-sm text-red-600">{errors.nachname.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefon" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefonnummer *
                  </label>
                  <input
                    {...register('telefon', {
                      required: 'Telefonnummer ist erforderlich',
                      pattern: {
                        value: /^[0-9+\s()-]+$/,
                        message: 'Ungültige Telefonnummer',
                      },
                    })}
                    type="tel"
                    id="telefon"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder={BUSINESS_INFO.contact.phoneFormatted}
                  />
                  {errors.telefon && (
                    <p className="mt-1 text-sm text-red-600">{errors.telefon.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    {...register('email', {
                      required: 'E-Mail ist erforderlich',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Ungültige E-Mail-Adresse',
                      },
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="max@beispiel.de"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Termindetails */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                Termindetails
              </h3>

              <div>
                <label htmlFor="leistung" className="block text-sm font-semibold text-gray-700 mb-2">
                  Gewünschte Leistung *
                </label>
                <select
                  {...register('leistung', { required: 'Bitte wählen Sie eine Leistung' })}
                  id="leistung"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Bitte wählen...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.leistung && (
                  <p className="mt-1 text-sm text-red-600">{errors.leistung.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="wunschtermin" className="block text-sm font-semibold text-gray-700 mb-2">
                    Wunschtermin *
                  </label>
                  <input
                    {...register('wunschtermin', {
                      required: 'Wunschtermin ist erforderlich',
                      validate: (value) => {
                        const selectedDate = new Date(value);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return selectedDate >= today || 'Datum darf nicht in der Vergangenheit liegen';
                      }
                    })}
                    type="date"
                    id="wunschtermin"
                    min={new Date().toISOString().split('T')[0]}
                    disabled={isSubmitting}
                    aria-invalid={!!errors.wunschtermin}
                    aria-describedby={errors.wunschtermin ? 'wunschtermin-error' : undefined}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  {errors.wunschtermin && (
                    <p id="wunschtermin-error" role="alert" className="mt-1 text-sm text-red-600">{errors.wunschtermin.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="wunschuhrzeit" className="block text-sm font-semibold text-gray-700 mb-2">
                    Wunschuhrzeit *
                  </label>
                  <select
                    {...register('wunschuhrzeit', { required: 'Wunschuhrzeit ist erforderlich' })}
                    id="wunschuhrzeit"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Bitte wählen...</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.wunschuhrzeit && (
                    <p className="mt-1 text-sm text-red-600">{errors.wunschuhrzeit.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="nachricht" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nachricht / Anmerkungen (optional)
                </label>
                <textarea
                  {...register('nachricht')}
                  id="nachricht"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Besondere Wünsche oder Anmerkungen..."
                ></textarea>
              </div>
            </div>

            {/* Datenschutz */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  {...register('datenschutz', {
                    required: 'Sie müssen die Datenschutzerklärung akzeptieren',
                  })}
                  type="checkbox"
                  id="datenschutz"
                  className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="datenschutz" className="ml-3 text-sm text-gray-700">
                  Ich habe die{' '}
                  <a
                    href="/datenschutz"
                    target="_blank"
                    className="text-primary-600 hover:text-primary-700 underline font-semibold"
                  >
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und akzeptiere diese. *
                </label>
              </div>
              {errors.datenschutz && (
                <p className="text-sm text-red-600">{errors.datenschutz.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Terminanfrage senden</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              * Pflichtfelder
            </p>
          </form>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Oder kontaktieren Sie uns direkt:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BUSINESS_INFO.contact.phoneHref}
                className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-primary-600 text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                📞 {BUSINESS_INFO.contact.phoneFormatted}
              </a>
              <a
                href={BUSINESS_INFO.contact.emailHref}
                className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-primary-600 text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                ✉️ {BUSINESS_INFO.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
