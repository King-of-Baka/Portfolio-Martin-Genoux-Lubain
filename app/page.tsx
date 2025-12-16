import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Code2, Rocket, Smartphone, Mail, ArrowRight, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
// --- 1. CONFIGURATION SEO & METADATA (CRITIQUE) ---

export const metadata: Metadata = {
  title: "Martin Genoux-Lubain | Développeur Web Freelance Caen - Expert React & Next.js",
  description: "Martin Genoux-Lubain, développeur web freelance à Caen. Création de sites web performants, applications React et optimisation SEO en Normandie. Devis gratuit pour votre projet.",
  keywords: ["développeur web freelance Caen", "création site web Caen", "développeur React Next.js", "freelance web Normandie", "Martin Genoux-Lubain"],
  openGraph: {
    title: "Martin Genoux-Lubain | Développeur Web Freelance à Caen",
    description: "Expertise locale en développement web et SEO. Transformez votre vision en site performant.",
    locale: 'fr_FR',
    type: 'website',
  },
};

// --- 2. DONNÉES STRUCTURÉES (JSON-LD) ---
// Indispensable pour apparaître dans les résultats "Local Pack" de Google

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService", // Ou "Person" si vous n'avez pas d'adresse pro fixe, mais Service est mieux pour le business
  "name": "Martin Genoux-Lubain - Développeur Web Freelance",
  "image": "https://Martin_Genoux-Lubain.fr/avatar.jpg", // À remplacer
  "url": "https://Martin_Genoux-Lubain.fr",
  "telephone": "+33 6 00 00 00 00", // À remplacer
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Centre Ville",
    "addressLocality": "Caen",
    "addressRegion": "Normandie",
    "postalCode": "14000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.1828, // Coordonnées de Caen
    "longitude": -0.3706
  },
  "sameAs": [
    "https://www.linkedin.com/in/votre-profil",
    "https://github.com/votre-compte"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

// --- 3. PAGE PRINCIPALE ---

export default function HomePage() {
  return (
    <>
      {/* Injection du JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen">
        
        {/* HEADER / NAV */}
        <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="font-bold text-xl tracking-tighter text-indigo-400">LS.</div>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              <Link href="#a-propos" className="hover:text-white transition-colors">À propos</Link>
              <Link href="#services" className="hover:text-white transition-colors">Services</Link>
              <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
            <Link 
              href="#contact" 
              className="px-4 py-2 bg-slate-100 text-slate-900 text-sm font-bold rounded hover:bg-white transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </header>

        <main className="flex-grow">
          
          {/* HERO SECTION */}
          <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] -z-10" />
            
            <div className="container mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-indigo-400 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Disponible pour de nouveaux projets à Caen
              </div>
              
              {/* H1 SEO CRITIQUE */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-indigo-200 to-slate-100">
                Développeur Web Freelance à Caen
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Je conçois des sites web ultra-rapides et optimisés pour le référencement. 
                Expertise locale en <strong>Normandie</strong> pour propulser votre activité sur Google.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="#contact" 
                  className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  Discutons de votre projet <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="#services" 
                  className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 font-semibold rounded-lg transition-all"
                >
                  Voir mes services
                </Link>
              </div>

              {/* Social Proof / Tech Stack */}
              <div className="mt-16 pt-8 border-t border-slate-900">
                <p className="text-sm text-slate-500 mb-4">Technologies modernes utilisées</p>
                <div className="flex justify-center gap-8 text-slate-400 grayscale hover:grayscale-0 transition-all">
                   {/* Ici vous pourriez mettre des logos SVG, j'utilise du texte stylisé pour l'exemple */}
                   <span className="font-bold flex items-center gap-2"><Code2 className="w-5 h-5"/> Next.js</span>
                   <span className="font-bold flex items-center gap-2"><Code2 className="w-5 h-5"/> React</span>
                   <span className="font-bold flex items-center gap-2"><Code2 className="w-5 h-5"/> Tailwind</span>
                </div>
              </div>
            </div>
          </section>

          {/* A PROPOS SECTION */}
          <section id="a-propos" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur-lg opacity-30"></div>
                    <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                    <Image 
                      src="/ma_photo.jpg"   // 👈 Mets ici le nom EXACT de ton fichier dans public
                      alt="Martin Genoux-Lubain Développeur Web Caen" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 text-slate-100">
                    Martin Genoux-Lubain, votre partenaire digital à Caen
                  </h2>
                  <div className="space-y-4 text-slate-400 text-lg">
                    <p>
                      Bonjour ! Je suis <strong>Martin Genoux-Lubain</strong>. Passionné par le code et le design, je combine mon expertise technique (Next.js, React) avec une approche stratégique du SEO local.
                    </p>
                    <p>
                      En tant que <strong>freelance web basé à Caen</strong>, je privilégie la proximité. Je ne me contente pas de livrer du code ; j'accompagne les entreprises normandes dans leur transformation numérique pour qu'elles se démarquent réellement sur leur marché.
                    </p>
                    <p>
                      Mon objectif ? Créer des sites qui ne sont pas seulement beaux, mais qui convertissent vos visiteurs en clients.
                    </p>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-slate-300">Basé à Caen (14)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-slate-300">Expert Next.js</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES SECTION */}
          <section id="services" className="py-24">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes services de création web</h2>
                <p className="text-slate-400">
                  Des solutions sur-mesure pour les entreprises à Caen et en Normandie.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-100">Création de Site Vitrine</h3>
                  <p className="text-slate-400 mb-6">
                    Un site web moderne qui présente votre activité à Caen. Design soigné, rédaction persuasive et intégration de vos contenus.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Design Unique (Tailwind)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Optimisé SEO Local</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Hébergement inclus</li>
                  </ul>
                </article>

                {/* Service 2 */}
                <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3">
                    <span className="text-xs font-bold px-2 py-1 bg-indigo-600 text-white rounded">Populaire</span>
                  </div>
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-100">Développement React & Next.js</h3>
                  <p className="text-slate-400 mb-6">
                    Applications web complexes et performantes. La stack technique utilisée par les géants de la tech, adaptée à votre projet.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Single Page App (SPA)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Connexion API / Base de données</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Architecture évolutive</li>
                  </ul>
                </article>

                {/* Service 3 */}
                <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-100">SEO & Performance</h3>
                  <p className="text-slate-400 mb-6">
                    Audit et optimisation technique pour garantir que votre site soit rapide sur mobile et visible sur Google Maps à Caen.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Core Web Vitals (Vert)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Optimisation Mobile</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Structure de données (Schema)</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* CTA / CONTACT SECTION */}
          <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/20">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Prêt à lancer votre projet web à Caen ?
                </h2>
                <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                  Que vous ayez besoin d'un site vitrine, d'une application React complexe ou d'une refonte SEO, je suis à votre écoute. Devis gratuit et réponse sous 24h.
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a 
                    href="mailto:contact@Martin Genoux-Lubain.fr" 
                    className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/25 w-full md:w-auto justify-center"
                  >
                    <Mail className="w-5 h-5" />
                    contact@Martin Genoux-Lubain.fr
                  </a>
                  <a 
                    href="tel:+33600000000"
                    className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl transition-all w-full md:w-auto justify-center"
                  >
                    06 00 00 00 00
                  </a>
                </div>
                
                <p className="mt-8 text-sm text-slate-500">
                  Freelance Web basé à Caen, Normandie. SIRET : XXX XXX XXX
                </p>
              </div>
            </div>
          </section>

        </main>

        <footer className="py-8 border-t border-slate-900 bg-slate-950 text-slate-500 text-sm">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Martin le. Développeur Web à Caen.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Github className="w-5 h-5"/></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
