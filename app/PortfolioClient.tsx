'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Importation du composant Image de Next.js
import { MapPin, Code2, Rocket, Smartphone, Mail, ArrowRight, Github, Linkedin, CheckCircle2, Phone, Menu, X, Shield, Zap, Users, TrendingUp } from 'lucide-react';

export default function PortfolioClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      title: "Site Vitrine & SEO", 
      icon: <Rocket className="w-6 h-6" />, 
      desc: "Design sur-mesure et optimisation pour Google Maps afin de capter vos clients à Caen.",
      features: ["Code propre (Clean Code)", "Sécurité renforcée", "Responsive mobile-first"]
    },
    { 
      title: "App React & Next.js", 
      icon: <Code2 className="w-6 h-6" />, 
      desc: "Applications web robustes, scalables et sécurisées pour vos besoins métier complexes.",
      features: ["Architecture moderne", "Tests automatisés", "Performance optimale"]
    },
    { 
      title: "Audit & Performance", 
      icon: <Smartphone className="w-6 h-6" />, 
      desc: "Optimisation de vos Core Web Vitals pour une vitesse de chargement instantanée sur mobile.",
      features: ["Analyse détaillée", "Recommandations concrètes", "Suivi des métriques"]
    }
  ];

  const stats = [
    { value: "100%", label: "Satisfaction client", icon: <Users className="w-5 h-5" /> },
    { value: "<1s", label: "Temps de chargement", icon: <Zap className="w-5 h-5" /> },
    { value: "+40%", label: "Trafic organique moyen", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "A+", label: "Score sécurité", icon: <Shield className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-indigo-500/5' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-sm">
              MG
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Martin Genoux-Lubain</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#a-propos" className="text-slate-300 hover:text-white transition-colors">À propos</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
            >
              Démarrer un projet
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors py-2">Services</a>
              <a href="#a-propos" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors py-2">À propos</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors py-2">Contact</a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold rounded-lg text-center"
              >
                Démarrer un projet
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium text-indigo-300 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
              </span>
              Disponible pour vos projets à Caen & Remote
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
              Développeur Web<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Freelance à Caen
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Je transforme vos idées en <strong className="text-white">sites web ultra-rapides</strong> et optimisés pour le <strong className="text-white">référencement naturel</strong>. Expert React et Next.js.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a 
                href="#contact" 
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2"
              >
                Lancer mon projet 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-200 font-bold rounded-xl hover:bg-slate-800 hover:border-indigo-500/50 transition-all"
              >
                Découvrir mes services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-indigo-500/50 transition-all">
                  <div className="flex items-center justify-center gap-2 mb-2 text-indigo-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solutions Web Performance</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Une approche technique pointue pour des résultats business concrets et mesurables.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0"/> 
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A PROPOS SECTION */}
      <section id="a-propos" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              
              {/* IMAGE CORRIGÉE ICI */}
              <div className="relative aspect-square max-w-lg mx-auto bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                <Image 
                  src="/profile.jpg" 
                  alt="Martin Genoux-Lubain - Développeur Web" 
                  fill // Permet de remplir le conteneur parent
                  priority // Charge l'image immédiatement
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div>
              <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4 block">À propos</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Martin Genoux-Lubain
              </h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Basé en plein cœur de <strong className="text-white">Caen</strong>, j'accompagne les TPE, PME et startups normandes dans leur transformation digitale.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Mon objectif est simple : allier <strong className="text-slate-300">esthétique moderne</strong> et <strong className="text-slate-300">puissance technique</strong> pour créer des expériences web qui convertissent et performent.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-indigo-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Localisation</div>
                    <div className="font-semibold">Caen, Normandie</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <Code2 className="text-indigo-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Spécialité</div>
                    <div className="font-semibold">Expert Next.js</div>
                  </div>
                </div>
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition-all"
              >
                Discutons de votre projet
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">On travaille ensemble ?</h2>
            <p className="text-slate-300 text-lg">
              Réponse sous <strong className="text-white">24h</strong>. Devis transparent et conseils stratégiques offerts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <a 
              href="mailto:contact@martin-genoux-lubain.fr" 
              className="group flex items-center gap-4 p-6 bg-gradient-to-br from-indigo-600 to-indigo-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-indigo-500/40 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm opacity-90 mb-1">Email</div>
                <div className="text-lg group-hover:underline">contact@martin-genoux-lubain.fr</div>
              </div>
            </a>
            <a 
              href="tel:+33600000000" 
              className="group flex items-center gap-4 p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 text-white font-bold rounded-xl hover:bg-slate-800 hover:border-indigo-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400 mb-1">Téléphone</div>
                <div className="text-lg group-hover:underline">06 00 00 00 00</div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-slate-400 text-sm mb-4">Retrouvez-moi également sur</p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://github.com/King-of-Baka" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://fr.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-900 bg-slate-950 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-sm">
                MG
              </div>
              <span className="font-bold text-lg">Martin Genoux-Lubain</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#a-propos" className="hover:text-white transition-colors">À propos</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-slate-900">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Martin Genoux-Lubain. Tous droits réservés. Développeur Web Freelance à Caen, Normandie.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}