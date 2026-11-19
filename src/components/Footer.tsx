import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 font-sans relative overflow-hidden">

      {/* Background subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-slate-200">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 via-indigo-700 to-amber-500 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                  <span className="font-heading font-extrabold text-sm bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent">
                    Y
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-slate-900 tracking-tight flex items-center">
                  YUGAM
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-amber-500 ml-1.5" />
                </span>
                <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase -mt-0.5 font-semibold">
                  PLAN CREATE GROW
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900">"Yugam"</strong> represents an era of exponential growth. We bridge creative storytelling, high-speed engineering, and performance marketing while building scalable tech for tomorrow.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-xs text-slate-900 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link to="/" className="hover:text-indigo-600 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-600 transition-colors">Growth Packages & Pricing</Link>
              </li>
              <li>
                <Link to="/ventures" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                  <span>Yugam Innovation Lab</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-mono bg-amber-100 text-amber-800 border border-amber-300 rounded font-semibold">NEW</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-indigo-600 transition-colors">Client Reviews & Case Studies</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-600 transition-colors">About Our Story</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-mono bg-indigo-100 text-indigo-700 border border-indigo-200 rounded font-semibold">Hiring</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact & Location</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Growth Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-xs text-slate-900 uppercase tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link to="/services" className="hover:text-indigo-600 transition-colors">High-Converting Web Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-600 transition-colors">On-Location Video Shoots</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-600 transition-colors">Scriptwriting & Viral Reels</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-600 transition-colors">Complete Instagram Handling</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-600 transition-colors">Meta (FB & IG) Ads Management</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-600 transition-colors">Google Search & Performance Max</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-600 transition-colors">Full-Funnel CRO & Unit Economics</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Noida Headquarters & Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-xs text-slate-900 uppercase tracking-wider">
              Office & Direct Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 block font-medium">Yugam Headquarters</strong>
                  Sector 62, Noida, Uttar Pradesh 201309, India
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM IST</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href="mailto:hello@yugam.in" className="hover:text-indigo-600 transition-colors">hello@yugam.in</a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-indigo-600 transition-colors">+91 98765 43210</a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                <span>Get Directions on Map →</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} YUGAM GROWTH CORP. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>HQ NOIDA: ACTIVE</span>
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors shadow-xs"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
