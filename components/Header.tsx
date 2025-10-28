'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Über uns', id: 'about' },
    { label: 'Leistungen', id: 'services' },
    { label: 'Vorteile', id: 'benefits' },
    { label: 'Kontakt', id: 'booking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-primary-700 hover:text-primary-800 transition-colors"
            >
              Fußpflege Lena Schneider
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+4917634237368"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Phone size={20} />
              <span className="font-semibold">+49 176 34237368</span>
            </a>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Termin vereinbaren
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-200 pt-6 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+4917634237368"
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors py-2"
              >
                <Phone size={20} />
                <span className="font-semibold">+49 176 34237368</span>
              </a>
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md w-full"
              >
                Termin vereinbaren
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
