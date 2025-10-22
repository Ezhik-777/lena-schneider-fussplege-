export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://fusspflege-sachsenheim.de",
    "name": "Fußpflege Sachsenheim",
    "description": "Professionelle medizinische Fußpflege und Podologie in Sachsenheim",
    "url": "https://fusspflege-sachsenheim.de",
    "telephone": "+4917634237368",
    "email": "info@fusspflege-sachsenheim.de",
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
    "image": "https://fusspflege-sachsenheim.de/salon-image.jpg",
    "sameAs": [
      "https://www.facebook.com/fusspflege.sachsenheim",
      "https://www.instagram.com/fusspflege.sachsenheim"
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
            "name": "Medizinische Fußpflege",
            "description": "Professionelle medizinische Fußpflege für gesunde Füße"
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
    "name": "Fußpflege Sachsenheim",
    "url": "https://fusspflege-sachsenheim.de",
    "logo": "https://fusspflege-sachsenheim.de/logo.png",
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
        "item": "https://fusspflege-sachsenheim.de"
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
