/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Cpu, 
  TrendingUp, 
  Rocket, 
  Mail, 
  ChevronRight, 
  ExternalLink,
  Menu,
  X,
  ShieldCheck
} from 'lucide-react';

const DOMAINS = [
  {
    id: 'web3',
    title: 'Web3',
    description: 'Decentralized infrastructure and blockchain-powered SaaS solutions for the next generation of the internet.',
    icon: Globe,
    color: 'from-emerald-400 to-cyan-500'
  },
  {
    id: 'ai',
    title: 'AI',
    description: 'Intelligent automation and machine learning platforms that transform raw data into actionable insights.',
    icon: Cpu,
    color: 'from-lime-400 to-emerald-500'
  },
  {
    id: 'economy',
    title: 'Economy',
    description: 'Next-gen fintech and economic modeling tools designed for global scalability and precision.',
    icon: TrendingUp,
    color: 'from-teal-400 to-green-600'
  },
  {
    id: 'space',
    title: 'Space',
    description: 'Pioneering software for the burgeoning space economy, from satellite data analysis to orbital logistics.',
    icon: Rocket,
    color: 'from-cyan-400 to-blue-500'
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center font-bold text-white">I</div>
          <span className="font-display font-bold text-xl tracking-tight">Insador <span className="text-brand-primary">Inc.</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Domains', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="mailto:susie.djqan@gmail.com"
            className="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-brand-primary hover:text-white transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {['Domains', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="mailto:susie.djqan@gmail.com"
                className="mt-2 w-full py-3 bg-brand-primary text-white rounded-xl text-center font-bold"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          <iframe 
            src='https://my.spline.design/interactiveportal-cqYw2XdwhZjr9D3bQudanVT1/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full scale-[1.5] md:scale-[1.2] lg:scale-[1.1] origin-center transition-transform duration-700"
            title="Insador Interactive Portal"
          ></iframe>
          {/* Subtle vignette to focus on center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] pointer-events-none"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            Pioneering the SaaS Frontier
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
            Building the <br />
            <span className="text-gradient">Future of SaaS.</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
            Insador Inc. crafts high-performance, interactive SaaS experiences across Web3, AI, Economy, and Space domains.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#domains"
              className="px-6 py-3 md:px-8 md:py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold flex items-center gap-2 transition-all group text-sm md:text-base"
            >
              Explore Our Domains
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about"
              className="px-6 py-3 md:px-8 md:py-4 glass hover:bg-white/10 text-white rounded-2xl font-bold transition-all text-sm md:text-base"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 md:w-1 md:h-2 bg-white/40 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const DomainSection = () => {
  return (
    <section id="domains" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-white/50 max-w-xl">
            We specialize in complex, data-driven domains where user experience and technical excellence intersect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOMAINS.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl glass hover:bg-white/10 transition-all duration-500 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <domain.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{domain.title}</h3>
              <p className="text-white/60 leading-relaxed mb-8 flex-grow">
                {domain.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:gap-3 transition-all">
                View Projects <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-3xl overflow-hidden glass p-1"
        >
          <img 
            src="https://picsum.photos/seed/tech/800/800" 
            alt="Innovation" 
            className="w-full h-full object-cover rounded-[22px] opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="text-brand-primary w-6 h-6" />
              <span className="font-bold text-xl">Delaware C-Corp</span>
            </div>
            <p className="text-white/60 text-sm">
              Registered in the United States, providing global-standard legal and financial reliability for our partners.
            </p>
          </div>
        </motion.div>

        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Crafting Digital <br /><span className="text-brand-primary">Excellence.</span></h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              Insador Inc. is more than just a software house. We are a boutique digital engineering firm dedicated to building high-stakes SaaS platforms.
            </p>
            <p>
              Based in Delaware, we operate with a global mindset, serving clients who demand the highest levels of security, scalability, and interactive design. Our team bridges the gap between complex backend systems and intuitive, beautiful frontends.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">4+</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Core Domains</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[40px] relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-secondary/20 blur-[100px] rounded-full"></div>

          <Mail className="w-16 h-16 text-brand-primary mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Ready to build?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
            Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
          </p>
          
          <a 
            href="mailto:susie.djqan@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-brand-primary hover:text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-white/5"
          >
            susie.djqan@gmail.com
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 opacity-50">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-black text-[10px]">I</div>
          <span className="text-sm font-medium">© 2024 Insador Inc. All rights reserved.</span>
        </div>
        
        <div className="flex gap-8 text-sm text-white/40 font-medium">
          <span>Delaware C-Corp</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-brand-primary/30">
      <Navbar />
      <main>
        <Hero />
        <DomainSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
