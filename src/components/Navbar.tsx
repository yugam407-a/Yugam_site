import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Ventures', path: '/ventures', badge: 'Lab' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-amber-500 p-[1.5px] shadow-md shadow-indigo-500/15">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                <span className="font-heading font-extrabold text-base bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent">
                  Y
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl text-slate-900 tracking-tight flex items-center">
                YUGAM
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-amber-500 ml-1.5 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase -mt-0.5 font-semibold">
                PLAN CREATE GROW
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative flex items-center space-x-1.5 ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50/80 font-semibold border border-indigo-100 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-amber-100/80 border border-amber-300/60 text-amber-800 rounded">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              to="/contact"
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-indigo-500/20 active:scale-95 flex items-center space-x-1.5"
            >
              <span>Book a Growth Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold sm:hidden"
            >
              Growth Call
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 border-b border-slate-200 px-6 py-6 space-y-3 backdrop-blur-2xl shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50 border border-indigo-200 font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300 rounded">
                    {link.badge}
                  </span>
                )}
              </div>
            </NavLink>
          ))}

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 shadow-md shadow-indigo-500/20"
            >
              <span>Book a Growth Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
