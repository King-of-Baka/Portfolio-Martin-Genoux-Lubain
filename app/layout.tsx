import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-martin-genoux-lubain.vercel.app'), // Indispensable pour les images OG
  title: {
    default: "Martin Genoux-Lubain | Développeur Web à Caen",
    template: "%s | Martin Genoux-Lubain"
  },
  description: "Portfolio de Martin Genoux-Lubain, développeur web freelance à Caen. Expert React, Next.js et solutions modernes.",
  verification: {
    google: "TON_CODE_GOOGLE_SEARCH_CONSOLE", // 👈 À RÉCUPÉRER SUR LA SEARCH CONSOLE
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
