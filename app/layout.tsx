import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  metadataBase: new URL('https://fusspflege-lena-schneider.de'),
  title: {
    default: "Fußpflege Sachsenheim | Lena Schneider | Kosmetische Fußpflege & Pediküre",
    template: "%s | Fußpflege Lena Schneider Sachsenheim"
  },
  description: "Professionelle kosmetische Fußpflege in Sachsenheim ✓ Nagelpilzbehandlung ✓ B/S Spangentechnik ✓ Fußreflexzonenmassage ✓ Termine nach Vereinbarung ☎ +49 176 34237368 ✓ Brunnenstraße 25",
  keywords: [
    // Primäre Keywords
    "Fußpflege Sachsenheim",
    "Kosmetische Fußpflege Sachsenheim",
    "Fußpflegerin Sachsenheim",
    "Pediküre Sachsenheim",

    // Service Keywords
    "Nagelpilz Behandlung Sachsenheim",
    "B/S Spangentechnik Sachsenheim",
    "Fußreflexzonenmassage Sachsenheim",
    "Smart Pediküre Sachsenheim",
    "Klassische Fußpflege Sachsenheim",
    "Shellac Sachsenheim",

    // Location Keywords
    "Fußpflege 74343",
    "Fußpflege Brunnenstraße",
    "Fußpflege Ludwigsburg Kreis",
    "Fußpflege Bietigheim-Bissingen",
    "Fußpflege Vaihingen Enz",
    "Fußpflege Markgröningen",

    // Problem Keywords
    "Hornhautentfernung Sachsenheim",
    "Nagelkorrektur Sachsenheim",
    "Eingewachsene Nägel Sachsenheim",
    "Hühneraugen Entfernung Sachsenheim",

    // Long-tail Keywords
    "Fußpflege Salon Sachsenheim",
    "Medizinische Fußpflege Sachsenheim",
    "Fußgesundheit Sachsenheim",
    "Fußpflege Termin Sachsenheim",
    "Fußpflege in meiner Nähe",
    "Beste Fußpflege Sachsenheim",
  ],
  authors: [{ name: "Lena Schneider", url: "https://fusspflege-lena-schneider.de" }],
  creator: "Lena Schneider",
  publisher: "Fußpflege Lena Schneider",
  category: "Health & Wellness",
  classification: "Beauty Salon, Foot Care",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://fusspflege-lena-schneider.de",
    siteName: "Fußpflege Lena Schneider Sachsenheim",
    title: "Fußpflege Sachsenheim | Lena Schneider | Kosmetische Fußpflege & Pediküre",
    description: "⭐ Professionelle kosmetische Fußpflege in Sachsenheim ✓ Nagelpilzbehandlung ✓ B/S Spangentechnik ✓ Fußreflexzonenmassage ✓ Termine nach Vereinbarung ☎ +49 176 34237368",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fußpflege Lena Schneider - Professionelle kosmetische Fußpflege in Sachsenheim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fußpflege Sachsenheim | Lena Schneider",
    description: "⭐ Professionelle kosmetische Fußpflege in Sachsenheim ✓ Termine nach Vereinbarung ☎ +49 176 34237368",
    images: ["/og-image.jpg"],
    creator: "@fusspflege_lena",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://fusspflege-lena-schneider.de",
    languages: {
      'de-DE': 'https://fusspflege-lena-schneider.de',
    },
  },
  verification: {
    google: "google-site-verification-code", // TODO: In Google Search Console generieren und hier einfügen
    yandex: "yandex-verification-code", // Optional
  },
  other: {
    'apple-mobile-web-app-title': 'Fußpflege Sachsenheim',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Geo-Location Meta Tags for Local SEO */}
        <meta name="geo.region" content="DE-BW" />
        <meta name="geo.placename" content="Sachsenheim" />
        <meta name="geo.position" content="48.9615;9.0667" />
        <meta name="ICBM" content="48.9615, 9.0667" />

        {/* Additional Local Business Meta Tags */}
        <meta name="city" content="Sachsenheim" />
        <meta name="state" content="Baden-Württemberg" />
        <meta name="country" content="Germany" />
        <meta name="language" content="German" />
        <meta name="distribution" content="local" />
        <meta name="rating" content="general" />

        {/* Contact & Business Info */}
        <meta name="contact" content="info@fusspflege-lena-schneider.de" />
        <meta name="telephone" content="+4917634237368" />
        <meta name="address" content="Brunnenstraße 25, 74343 Sachsenheim" />

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#0284c7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://api.telegram.org" />

        {/* Structured Data */}
        <StructuredData />
      </head>
      <body className="font-sans">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Zum Hauptinhalt springen
        </a>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
