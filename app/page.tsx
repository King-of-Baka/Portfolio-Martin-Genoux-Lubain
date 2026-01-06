import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: "Développeur Freelance Caen - Expert React & Next.js",
  description: "Expertise en création de sites web performants et SEO à Caen. Découvrez mes services et réalisations.",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Martin Genoux-Lubain",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Caen",
      "postalCode": "14000",
      "addressCountry": "FR"
    },
    "url": "https://portfolio-martin-genoux-lubain.vercel.app",
    "telephone": "+33600000000"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioClient />
    </>
  );
}