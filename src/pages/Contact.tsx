import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Building2,
  Navigation,
  Car,
  Train
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const packageParam = searchParams.get('package');

  // Form states
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Growth Engine (Most Popular)');
  const [monthlyBudget, setMonthlyBudget] = useState('₹50,000 – ₹1,00,000 / mo');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (packageParam) {
      if (packageParam === 'starter-launchpad') {
        setSelectedService('Starter Launchpad (₹35k/mo)');
        setMonthlyBudget('₹35,000 – ₹50,000 / mo');
      } else if (packageParam === 'growth-engine') {
        setSelectedService('Growth Engine (Most Popular - ₹75k/mo)');
        setMonthlyBudget('₹50,000 – ₹1,00,000 / mo');
      } else if (packageParam === 'market-dominator') {
        setSelectedService('Market Dominator (Enterprise - ₹1.4L/mo)');
        setMonthlyBudget('₹1,00,000+ / mo');
      } else if (packageParam === 'standalone-web') {
        setSelectedService('Custom Web & Funnel Build');
      } else if (packageParam === 'standalone-shoot') {
        setSelectedService('Cinema Production Shoot Pack');
      } else if (packageParam === 'standalone-social') {
        setSelectedService('30-Day Social Growth Sprint');
      } else if (packageParam === 'standalone-ads') {
        setSelectedService('Paid Ads Funnel Setup & Launch');
      }
    }
  }, [packageParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>START THE CONVERSATION // DIRECT ACCESS TO FOUNDERS</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Let's Engineer Your{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-amber-600 bg-clip-text text-transparent">
              Era of Growth.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a growth audit call, visit our production studio in Sector 62, Noida, or drop us an inquiry below. We respond within 4 business hours.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SPLIT SCREEN: LEFT FORM & RIGHT GOOGLE MAPS
          ========================================================================= */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details Card + Interactive Form */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Quick Contact & Office Details Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-indigo-700 uppercase tracking-widest font-bold block mb-1">
                    HEADQUARTERS
                  </span>
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Yugam Innovation Studio
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Studio Open
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Physical Address:</strong>
                    <span>Sector 62, Electronic City Hub, Noida, Uttar Pradesh 201309, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Working Hours:</strong>
                    <span>Monday – Saturday: 10:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Email Inquiries:</strong>
                    <a href="mailto:hello@yugam.in" className="hover:text-indigo-600 transition-colors">
                      hello@yugam.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Phone / WhatsApp Line:</strong>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-emerald-700 font-semibold transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Inquiry Form */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono text-amber-700 uppercase tracking-widest font-bold block mb-1">
                  DIRECT PROJECT INQUIRY
                </span>
                <h3 className="font-heading font-bold text-2xl text-slate-900">
                  Tell Us About Your Brand
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details for a personalized growth architecture proposal.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-slate-900">
                    Inquiry Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{name}</strong>. A Yugam Growth Director will review your requirements for <strong className="text-slate-900">{businessName || 'your business'}</strong> and message you on WhatsApp/Email ({phone}) shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Vikramaditya"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Brand / Business Name
                      </label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Luxe Retail Co."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Selected Service or Package
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Growth Engine (Most Popular - ₹75k/mo)">Growth Engine (Retainer - ₹75k/mo)</option>
                        <option value="Starter Launchpad (₹35k/mo)">Starter Launchpad (Retainer - ₹35k/mo)</option>
                        <option value="Market Dominator (Enterprise - ₹1.4L/mo)">Market Dominator (Retainer - ₹1.4L/mo)</option>
                        <option value="Custom Web & Funnel Build">Custom Web & Funnel Build (Standalone)</option>
                        <option value="Cinema Production Shoot Pack">Cinema Production Shoot Pack (Standalone)</option>
                        <option value="30-Day Social Growth Sprint">30-Day Social Growth Sprint (Standalone)</option>
                        <option value="Paid Ads Funnel Setup & Launch">Paid Ads Funnel Setup & Launch (Standalone)</option>
                        <option value="Custom Enterprise / Innovation Lab">Custom Enterprise / Innovation Lab</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Approx. Monthly Growth Budget
                      </label>
                      <select
                        value={monthlyBudget}
                        onChange={(e) => setMonthlyBudget(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-indigo-500"
                      >
                        <option value="₹35,000 – ₹50,000 / mo">₹35,000 – ₹50,000 / mo</option>
                        <option value="₹50,000 – ₹1,00,000 / mo">₹50,000 – ₹1,00,000 / mo</option>
                        <option value="₹1,00,000 – ₹2,50,000 / mo">₹1,00,000 – ₹2,50,000 / mo</option>
                        <option value="₹2,50,000+ / mo">₹2,50,000+ / mo</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Brief Message or Project Goals
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you want to achieve (e.g. increase retail walk-ins, scale Shopify sales, generate B2B retainer leads)..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-indigo-500/20 active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>Submit Growth Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Embedded Google Maps & Transport Badges */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-widest block mb-0.5">
                    LOCATION VIEW
                  </span>
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Noida Studio & R&D Lab
                  </h3>
                </div>

                <a
                  href="https://maps.google.com/?q=Sector+62+Noida+Uttar+Pradesh+India"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-heading font-semibold border border-slate-200 transition-colors self-start sm:self-auto"
                >
                  <Navigation className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              {/* Responsive Google Maps Embed (Natural Clean Map) */}
              <div className="w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 relative">
                <iframe
                  title="Yugam HQ Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.518063259463!2d77.35626245!3d28.6258485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b128613627!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Transit & Accessibility Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <Train className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div className="text-[11px] text-slate-600">
                    <span className="font-semibold text-slate-900 block">Metro Access:</span>
                    5 mins to Electronic City
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-amber-600 shrink-0" />
                  <div className="text-[11px] text-slate-600">
                    <span className="font-semibold text-slate-900 block">Parking:</span>
                    Dedicated Visitor Bay
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="text-[11px] text-slate-600">
                    <span className="font-semibold text-slate-900 block">Studio Bay:</span>
                    Equipment Loading
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
