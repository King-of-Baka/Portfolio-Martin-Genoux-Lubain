import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-martin-genoux-lubain.vercel.app'),
  
  title: {
    default: "Développeur Freelance Caen | Expert React & Next.js - Martin GL",
    template: "%s | Martin Genoux-Lubain"
  },
  
  description: "Développeur freelance à Caen spécialisé React/Next.js. Sites web performants, SEO technique, maintenance. Devis gratuit sous 24h. ⭐ Normandie",
  
  keywords: [
    "développeur freelance Caen",
    "développeur web Caen",
    "freelance Next.js Normandie",
    "création site internet Caen",
    "expert React Caen",
    "développeur indépendant Caen",
    "dev freelance Calvados",
    "prestataire web Caen"
  ],
  
  authors: [{ name: "Martin Genoux-Lubain" }],
  creator: "Martin Genoux-Lubain",
  
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://portfolio-martin-genoux-lubain.vercel.app',
    siteName: 'Martin Genoux-Lubain - Développeur Freelance',
    title: 'Développeur Freelance Caen | Expert React & Next.js',
    description: 'Développeur freelance à Caen. Sites web performants et optimisés SEO. React, Next.js, TypeScript. Devis gratuit.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Martin Genoux-Lubain - Développeur Freelance à Caen',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur Freelance Caen | Martin Genoux-Lubain',
    description: 'Expert React & Next.js à Caen. Sites web performants et optimisés SEO.',
    images: ['/og-image.jpg'],
    creator: '@votre_twitter',
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
    canonical: '/',
  },
  
  verification: {
    google: "wxhnSXz9x05Yo1AH9yc9GODq48Jcje8-beNAYOUTAIQ",
  },
  
  other: {
    'geo.region': 'FR-14',
    'geo.placename': 'Caen',
    'geo.position': '49.1828;-0.3706',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      
      <body 
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}