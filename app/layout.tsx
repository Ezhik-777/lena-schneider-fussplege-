import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  metadataBase: new URL('https://fusspflege-lena-schneider.de'),
  title: "Fußpflege Lena Schneider | Kosmetische Fußpflege & Pediküre in Sachsenheim",
  description: "Professionelle kosmetische Fußpflege in Sachsenheim ✓ Nagelpilzbehandlung ✓ B/S Spangentechnik ✓ Fußreflexzonenmassage ✓ Termine nach Vereinbarung ☎ +49 176 34237368",
  keywords: [
    "Fußpflege Sachsenheim",
    "Kosmetische Fußpflege Sachsenheim",
    "Klassische Fußpflege Sachsenheim",
    "Fußpflege 74343",
    "Nagelpilz Behandlung Sachsenheim",
    "B/S Spange Sachsenheim",
    "Fußreflexzonenmassage Sachsenheim",
    "Fußpflege Salon Sachsenheim",
    "Pediküre Sachsenheim",
    "Smart Pediküre Sachsenheim",
    "Fußpflegerin Sachsenheim",
    "Fußpflege Ludwigsburg Kreis",
    "Fußgesundheit Sachsenheim",
    "Nagelkorrektur Sachsenheim",
    "Hornhautentfernung Sachsenheim"
  ],
  authors: [{ name: "Fußpflege Sachsenheim - Lena" }],
  category: "Health & Wellness",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://fusspflege-lena-schneider.de",
    siteName: "Fußpflege Lena Schneider",
    title: "Fußpflege Lena Schneider - Kosmetische Fußpflege & Pediküre",
    description: "Professionelle kosmetische Fußpflege in Sachsenheim. Nagelpilzbehandlung, B/S Spange, Fußreflexzonenmassage. Jetzt Termin vereinbaren!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fußpflege Lena Schneider - Professionelle kosmetische Fußpflege",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fußpflege Lena Schneider - Kosmetische Fußpflege",
    description: "Professionelle kosmetische Fußpflege in Sachsenheim ✓ Termine nach Vereinbarung",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://fusspflege-lena-schneider.de",
  },
  verification: {
    google: "google-site-verification-code", // TODO: Nach Google Search Console Setup eintragen
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

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />

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
