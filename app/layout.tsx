import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fußpflege Sachsenheim | Medizinische Fußpflege & Podologie in 74343",
  description: "Professionelle medizinische Fußpflege in Sachsenheim ✓ Nagelpilzbehandlung ✓ B/S Spangentechnik ✓ Fußreflexzonenmassage ✓ Termine nach Vereinbarung ☎ +49 176 34237368",
  keywords: [
    "Fußpflege Sachsenheim",
    "Medizinische Fußpflege Sachsenheim",
    "Podologie Sachsenheim",
    "Fußpflege 74343",
    "Nagelpilz Behandlung Sachsenheim",
    "B/S Spange Sachsenheim",
    "Fußreflexzonenmassage Sachsenheim",
    "Fußpflege Salon Sachsenheim",
    "Pediküre Sachsenheim",
    "Fußpflegerin Sachsenheim",
    "Podologin Sachsenheim",
    "Fußpflege Ludwigsburg Kreis",
    "Fußgesundheit Sachsenheim",
    "Nagelkorrektur Sachsenheim",
    "Hornhautentfernung Sachsenheim"
  ],
  authors: [{ name: "Fußpflege Sachsenheim - Elena" }],
  category: "Health & Wellness",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://fusspflege-sachsenheim.de",
    siteName: "Fußpflege Sachsenheim",
    title: "Fußpflege Sachsenheim - Medizinische Fußpflege & Podologie",
    description: "Professionelle medizinische Fußpflege in Sachsenheim. Nagelpilzbehandlung, B/S Spange, Fußreflexzonenmassage. Jetzt Termin vereinbaren!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fußpflege Sachsenheim - Professionelle medizinische Fußpflege",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fußpflege Sachsenheim - Medizinische Fußpflege",
    description: "Professionelle medizinische Fußpflege in Sachsenheim ✓ Termine nach Vereinbarung",
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
    canonical: "https://fusspflege-sachsenheim.de",
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
