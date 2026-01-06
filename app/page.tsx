import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

// SEO Metadata (Server Component)
export const metadata: Metadata = {
  title: "Développeur Freelance Caen - Expert React & Next.js",
  description: "Développeur freelance à Caen spécialisé React/Next.js. Sites web performants, SEO optimisé, maintenance. Devis gratuit sous 24h pour votre projet web.",
  keywords: [
    "développeur freelance Caen",
    "développeur web Caen",
    "freelance Next.js Normandie",
    "création site internet Caen",
    "expert React Caen",
    "développeur indépendant Caen",
    "prestataire web Calvados"
  ],
  openGraph: {
    title: "Martin Genoux-Lubain | Développeur Freelance à Caen",
    description: "Expert React & Next.js. Création de sites web performants et optimisés SEO en Normandie.",
    type: 'website',
  },
};

export default function HomePage() {
  // Données structurées pour le SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Martin Genoux-Lubain",
    "description": "Développeur freelance spécialisé React et Next.js à Caen, Normandie.",
    "url": "https://portfolio-martin-genoux-lubain.vercel.app",
    "telephone": "+33600000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Caen",
      "addressRegion": "Normandie",
      "postalCode": "14000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.1828,
      "longitude": -0.3706
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€"
  };

  return (
    <>
      {/* Schema.org pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Client Component */}
      <PortfolioClient />
    </>
  );
}