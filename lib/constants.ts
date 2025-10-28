/**
 * Единый источник контактных данных для всего сайта
 * Single source of truth for all contact information
 */

export const BUSINESS_INFO = {
  name: "Fußpflege Sachsenheim",
  owner: "Lena", // Полное имя владелицы добавить в Impressum

  contact: {
    phone: "+49 176 34237368",
    phoneFormatted: "+49 176 34237368",
    phoneHref: "tel:+4917634237368",
    email: "info@fusspflege-lena-schneider.de",
    emailHref: "mailto:info@fusspflege-lena-schneider.de",
  },

  address: {
    street: "Brunnenstraße 25",
    postalCode: "74343",
    city: "Sachsenheim",
    region: "Baden-Württemberg",
    country: "Deutschland",
    fullAddress: "Brunnenstraße 25, 74343 Sachsenheim",
  },

  geo: {
    latitude: 48.9615,
    longitude: 9.0667,
  },

  hours: {
    weekdays: "Mo - Fr: 09:00 - 18:00 Uhr",
    saturday: "Sa: 09:00 - 14:00 Uhr",
    sunday: "So: Geschlossen",
    note: "Termine nach Vereinbarung auch außerhalb der Öffnungszeiten möglich",
  },

  social: {
    facebook: "https://facebook.com/fusspflege.lena.schneider",
    instagram: "https://instagram.com/fusspflege.lena.schneider",
    linkedin: "https://linkedin.com", // Optional
  },

  seo: {
    domain: "https://fusspflege-lena-schneider.de",
    title: "Fußpflege Lena Schneider | Kosmetische Fußpflege & Pediküre in Sachsenheim",
    description: "Professionelle kosmetische Fußpflege in Sachsenheim ✓ Nagelpilzbehandlung ✓ B/S Spangentechnik ✓ Fußreflexzonenmassage ✓ Termine nach Vereinbarung",
  },

  legal: {
    vatId: "", // USt-IdNr. falls vorhanden
    registrationCourt: "", // Registergericht falls vorhanden
    registrationNumber: "", // Registernummer falls vorhanden
  },
} as const;

// Service-Kategorien
export const SERVICES = [
  {
    id: "nagelpilz",
    title: "Nagelpilz-Behandlung",
    description: "Schmerzfrei, ohne Chemie und effektiv: Bereits nach nur sechs Behandlungen kann der Pilz vollständig beseitigt werden",
    price: "60 €",
    duration: "ca. 45-60 Min.",
    icon: "🦠",
  },
  {
    id: "smart-pediküre",
    title: "Smart Pediküre",
    description: "Moderne Form der Fußpflege: Hornhaut wird sanft entfernt, die Nägel werden geformt und die Haut mit Pflegeöl gepflegt",
    price: "55 €",
    duration: "ca. 60 Min.",
    icon: "✨",
  },
  {
    id: "klassische-fußpflege",
    title: "Klassische Fachfußpflege mit Peeling",
    description: "Professionelle kosmetische Fußpflege für gesunde und gepflegte Füße",
    price: "49 €",
    duration: "ca. 45-60 Min.",
    icon: "🦶",
    note: "Aufpreis für Shellac: +9€",
  },
  {
    id: "massage",
    title: "Fußreflexzonenmassage",
    description: "Entspannende Fußmassage zur Aktivierung der Reflexzonen und Selbstheilungskräfte",
    price: "35 €",
    duration: "ca. 30 Min.",
    icon: "💆",
  },
  {
    id: "spange",
    title: "B/S Spangentechnik",
    description: "Nagelkorrektur mit der bewährten B/S Spangentechnik für eingewachsene Fußnägel",
    price: "29 €",
    duration: "ca. 30-45 Min.",
    icon: "🔧",
    note: "Ohne Fußpflege",
  },
  {
    id: "shellac-entfernen",
    title: "Shellac nur entfernen",
    description: "Professionelle und schonende Entfernung von Shellac-Lack",
    price: "15 €",
    duration: "ca. 15-20 Min.",
    icon: "🧴",
  },
] as const;

// Öffnungszeiten strukturiert
export const OPENING_HOURS = [
  {
    days: "Montag - Freitag",
    hours: "09:00 - 18:00 Uhr",
  },
  {
    days: "Samstag",
    hours: "09:00 - 14:00 Uhr",
  },
  {
    days: "Sonntag",
    hours: "Geschlossen",
  },
] as const;
