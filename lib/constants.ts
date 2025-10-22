/**
 * Единый источник контактных данных для всего сайта
 * Single source of truth for all contact information
 */

export const BUSINESS_INFO = {
  name: "Fußpflege Sachsenheim",
  owner: "Elena", // Полное имя владелицы добавить в Impressum

  contact: {
    phone: "+49 176 34237368",
    phoneFormatted: "+49 176 34237368",
    phoneHref: "tel:+4917634237368",
    email: "info@fusspflege-sachsenheim.de", // TODO: Заменить на реальный email
    emailHref: "mailto:info@fusspflege-sachsenheim.de",
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
    facebook: "https://facebook.com/fusspflege.sachsenheim", // TODO: Echte Links
    instagram: "https://instagram.com/fusspflege.sachsenheim",
    linkedin: "https://linkedin.com", // Optional
  },

  seo: {
    domain: "https://fusspflege-sachsenheim.de", // TODO: Echte Domain
    title: "Fußpflege Sachsenheim | Medizinische Fußpflege & Podologie in 74343",
    description: "Professionelle medizinische Fußpflege in Sachsenheim ✓ Nagelpilzbehandlung ✓ B/S Spangentechnik ✓ Fußreflexzonenmassage ✓ Termine nach Vereinbarung",
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
    description: "Professionelle Behandlung von Nagelpilz mit modernsten Methoden",
    price: "ab xx €", // TODO: Echte Preise
    duration: "ca. 45-60 Min.",
    icon: "💊",
  },
  {
    id: "pediküre",
    title: "Smart Pediküre",
    description: "Moderne Pediküre für gesunde und gepflegte Füße",
    price: "ab xx €",
    duration: "ca. 45 Min.",
    icon: "💅",
  },
  {
    id: "medizinisch",
    title: "Medizinische Fußpflege",
    description: "Professionelle medizinische Fußpflege nach höchsten Standards",
    price: "ab xx €",
    duration: "ca. 60 Min.",
    icon: "🏥",
  },
  {
    id: "massage",
    title: "Fußreflexzonenmassage",
    description: "Entspannende Fußmassage zur Aktivierung der Reflexzonen",
    price: "ab xx €",
    duration: "ca. 30-45 Min.",
    icon: "💆",
  },
  {
    id: "spange",
    title: "B/S Spangentechnik",
    description: "Nagelkorrektur mit der bewährten B/S Spangentechnik",
    price: "ab xx €",
    duration: "ca. 30-45 Min.",
    icon: "🔧",
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
