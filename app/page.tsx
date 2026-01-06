import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Code2, Rocket, Smartphone, Mail, ArrowRight, Github, Linkedin, CheckCircle2, Phone } from 'lucide-react';

// SEO de la page (le titre sera combiné avec le template du layout)
export const metadata: Metadata = {
  title: "Développeur Web Freelance Caen - Expert React & Next.js",
  description: "Besoin d'un site web performant à Caen ? Martin Genoux-Lubain, freelance expert Next.js, vous accompagne de la conception au SEO. Devis gratuit.",
  keywords: ["développeur web Caen", "freelance informatique Normandie", "création site internet Caen", "expert Next.js", "développeur React"],
  openGraph: {
    title: "Martin Genoux-Lubain | Développeur Web à Caen",
    description: "Création d'applications web modernes et SEO-friendly en Normandie.",
    type: 'website',
  },
};

export default function HomePage() {
  // Données structurées pour le Local SEO (White Hat)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Martin Genoux-Lubain",
    "description": "Développeur web freelance spécialisé React et Next.js à Caen, Normandie.",
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
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* HEADER - Sécurisé et accessible */}
        <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between" aria-label="Navigation principale">
            <div className="font-bold text-xl tracking-tighter text-indigo-400">MGL.</div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              <Link href="#services" className="hover:text-white transition-colors">Services</Link>
              <Link href="#a-propos" className="hover:text-white transition-colors">À propos</Link>
              <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <Link 
              href="#contact" 
              className="px-5 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-500 transition-all"
            >
              Projet Express
            </Link>
          </nav>
        </header>

        <main id="content">
          {/* HERO - Focus Keywords H1 */}
          <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Disponible pour vos projets à Caen & Remote
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
                Développeur Web Freelance <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">à Caen</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Je transforme vos idées en sites web <strong>ultra-rapides</strong> et optimisés pour le <strong>référencement naturel</strong>. Expert React et Next.js.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group">
                  Lancer mon projet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#services" className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 font-bold rounded-xl hover:bg-slate-800 transition-all">
                  Mes services
                </Link>
              </div>
            </div>
          </section>

          {/* SERVICES - Sémantique Article */}
          <section id="services" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Solutions Web Performance</h2>
                <p className="text-slate-400 max-w-xl mx-auto">Une approche technique pointue pour des résultats business concrets.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Site Vitrine & SEO", icon: <Rocket />, desc: "Design sur-mesure et optimisation pour Google Maps afin de capter vos clients à Caen." },
                  { title: "App React & Next.js", icon: <Code2 />, desc: "Applications web robustes, scalables et sécurisées pour vos besoins métier complexes." },
                  { title: "Audit & Performance", icon: <Smartphone />, desc: "Optimisation de vos Core Web Vitals pour une vitesse de chargement instantanée sur mobile." }
                ].map((service, i) => (
                  <article key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all group">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                    <ul className="space-y-2 text-xs text-slate-500">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-indigo-500"/> Code propre (Clean Code)</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-indigo-500"/> Sécurité renforcée</li>
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* A PROPOS - Image optimisée */}
          <section id="a-propos" className="py-24">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-square max-w-md mx-auto md:mx-0">
                  <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-2xl"></div>
                  <Image 
                    src="/ma_photo2.jpg" 
                    alt="Martin Genoux-Lubain - Développeur Web à Caen" 
                    fill 
                    className="object-cover rounded-2xl border border-slate-800 relative z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 italic">Martin Genoux-Lubain</h2>
                  <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                    Basé en plein cœur de <strong>Caen</strong>, j'accompagne les TPE, PME et startups normandes dans leur transformation digitale. Mon objectif est simple : allier <strong>esthétique moderne</strong> et <strong>puissance technique</strong>.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin className="text-indigo-500 w-5 h-5" /> <span>Caen, Normandie</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Code2 className="text-indigo-500 w-5 h-5" /> <span>Expert Next.js</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT - Sécurisé */}
          <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8">On travaille ensemble ?</h2>
              <p className="text-slate-400 mb-12 max-w-xl mx-auto">Réponse sous 24h. Devis transparent et conseils stratégiques offerts.</p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a 
                  href="mailto:contact@martin-genoux-lubain.fr" 
                  className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-indigo-500/20"
                >
                  <Mail className="w-5 h-5" /> contact@martin-genoux-lubain.fr
                </a>
                <a 
                  href="tel:+33600000000" 
                  className="flex items-center gap-3 px-8 py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all"
                >
                  <Phone className="w-5 h-5" /> 06 00 00 00 00
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 border-t border-slate-900 bg-slate-950">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Martin Genoux-Lubain. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/votre-compte" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}