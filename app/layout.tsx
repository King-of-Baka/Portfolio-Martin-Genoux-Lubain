import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// layout.tsx
export const metadata: Metadata = {
  title: "Martin Genoux-Lubain | Développeur Web & Software",
  description: "Portfolio de Martin Genoux-Lubain, développeur passionné spécialisé en solutions modernes. Découvrez mes projets et compétences.",
  keywords: ["Développeur Web", "Portfolio", "Next.js", "Martin Genoux-Lubain", "Software Engineer"],
  authors: [{ name: "Martin Genoux-Lubain" }],
  openGraph: {
    title: "Martin Genoux-Lubain | Portfolio",
    description: "Découvrez mes projets web et logiciels.",
    url: "https://portfolio-martin-genoux-lubain.vercel.app/",
    siteName: "Martin Genoux-Lubain Portfolio",
    images: [
      {
        url: "/og-image.png", // Ajoute une image de partage dans ton dossier /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
