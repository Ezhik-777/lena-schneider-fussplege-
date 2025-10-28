'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Etwas ist schiefgelaufen
            </h1>
            <p className="text-gray-600 mb-8">
              Es tut uns leid, aber es ist ein unerwarteter Fehler aufgetreten.
              Bitte laden Sie die Seite neu oder kontaktieren Sie uns direkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Seite neu laden
              </button>
              <a
                href="tel:+4917634237368"
                className="bg-white hover:bg-gray-50 text-primary-700 border-2 border-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Anrufen: +49 176 34237368
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
