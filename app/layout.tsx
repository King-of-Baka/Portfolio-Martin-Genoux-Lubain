import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Base pour les réseaux sociaux et SEO
  metadataBase: new URL('https://portfolio-martin-genoux-lubain.vercel.app'),
  title: {
    default: "Martin Genoux-Lubain | Développeur Web à Caen",
    template: "%s | Martin Genoux-Lubain"
  },
  description: "Expert en développement React et Next.js à Caen. Création de sites web haute performance, SEO technique et solutions digitales sur-mesure.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "TON_CODE_GOOGLE_SEARCH_CONSOLE", // À mettre à jour
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30`}>
        {children}
      </body>
    </html>
  );
}