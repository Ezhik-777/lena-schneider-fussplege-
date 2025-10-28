export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://fusspflege-lena-schneider.de",
    "name": "Fußpflege Lena Schneider",
    "description": "Professionelle kosmetische Fußpflege und Pediküre in Sachsenheim",
    "url": "https://fusspflege-lena-schneider.de",
    "telephone": "+4917634237368",
    "email": "info@fusspflege-lena-schneider.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Brunnenstraße 25",
      "addressLocality": "Sachsenheim",
      "postalCode": "74343",
      "addressRegion": "Baden-Württemberg",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.9615,
      "longitude": 9.0667
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "€€",
    "image": "https://fusspflege-lena-schneider.de/salon-image.jpg",
    "sameAs": [
      "https://www.facebook.com/fusspflege.lena.schneider",
      "https://www.instagram.com/fusspflege.lena.schneider"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 48.9615,
        "longitude": 9.0667
      },
      "geoRadius": "15000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Unsere Leistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Klassische Fachfußpflege mit Peeling",
            "description": "Professionelle kosmetische Fußpflege für gesunde und gepflegte Füße"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nagelpilz-Behandlung",
            "description": "Effektive Behandlung von Nagelpilz"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "B/S Spangentechnik",
            "description": "Nagelkorrektur mit B/S Spangentechnik"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fußreflexzonenmassage",
            "description": "Entspannende Fußreflexzonenmassage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Pediküre",
            "description": "Moderne Pediküre für gepflegte Füße"
          }
        }
      ]
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fußpflege Lena Schneider",
    "url": "https://fusspflege-lena-schneider.de",
    "logo": "https://fusspflege-lena-schneider.de/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+4917634237368",
      "contactType": "customer service",
      "areaServed": "DE",
      "availableLanguage": ["German"]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fusspflege-lena-schneider.de"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}
