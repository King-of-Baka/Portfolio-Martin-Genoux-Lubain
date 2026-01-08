import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: "Martin Genoux-Lubain | Développeur Web Freelance Caen",
  description: "Martin Genoux-Lubain, développeur web freelance à Caen. Création de sites internet, applications Next.js et optimisation SEO pour entreprises normandes.",
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