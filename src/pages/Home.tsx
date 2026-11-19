import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Video,
  Instagram,
  Target,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  Users,
  Star,
  Zap,
  ChevronRight,
  Code2,
  BarChart3,
  Flame,
  Award
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      
      {/* =========================================================================
          HERO SECTION (Light Theme: Clean, High-Contrast & Sleek)
          ========================================================================= */}
      <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Soft background ambient gradient blooms */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-500/10 via-amber-500/10 to-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Status Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs text-slate-700 shadow-sm backdrop-blur-md mb-8 hover:border-indigo-300 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px] font-bold tracking-wide text-indigo-700">YUGAM SIGNAL //</span>
            <span className="text-slate-800 font-medium">Plan • Create • Grow</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight max-w-5xl text-slate-900 leading-[1.08]"
          >
            We Build, Shoot, and{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-amber-600 bg-clip-text text-transparent">
                Scale Your Business.
              </span>
              {/* Laser highlight bar underneath */}
              <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[1px]" />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed"
          >
            From high-converting websites and viral reels to precision Google & Meta ad campaigns—Yugam turns ambitious brands into market leaders while building proprietary tech for tomorrow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white font-heading font-semibold text-sm tracking-wide shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all flex items-center justify-center gap-2 group active:scale-98"
            >
              <span>Explore Growth Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/ventures"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-400 text-slate-800 hover:text-slate-900 font-heading font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-sm group"
            >
              <Sparkles className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
              <span>Explore Upcoming Ventures</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Hero Live Metrics Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 w-full max-w-4xl p-1 rounded-2xl bg-gradient-to-b from-slate-200 via-slate-100 to-transparent shadow-xl"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="pt-3 md:pt-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">Portfolio Brands</div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 flex items-baseline gap-1">
                    50+ <span className="text-indigo-600 text-sm font-semibold">Scaled</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Retail, D2C, Tech & B2B</div>
                </div>

                <div className="pt-3 md:pt-0 md:pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">Lead Growth</div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-amber-600 flex items-baseline gap-1">
                    3.4x <span className="text-slate-700 text-sm font-semibold">Avg.</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Within first 60 days</div>
                </div>

                <div className="pt-3 md:pt-0 md:pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">Production Rig</div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 flex items-baseline gap-1">
                    100% <span className="text-emerald-600 text-sm font-semibold">In-House</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Zero freelance lag</div>
                </div>

                <div className="pt-3 md:pt-0 md:pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">Client Rating</div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 flex items-center gap-1.5">
                    4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Based on 38+ verified reviews</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          CORE SERVICES BENTO GRID (The 4 Pillars of Yugam)
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold mb-3">
              <Zap className="w-3.5 h-3.5 text-indigo-600" />
              <span>THE 4-PILLAR REVENUE SYSTEM</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Integrated Capabilities. No Fragmentation.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-600 text-sm sm:text-base max-w-md">
            Most agencies only do one thing well. We unite cutting-edge code, cinematic video shoots, social storytelling, and aggressive ad campaigns under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pillar 1: Web Design & Development */}
          <div className="group relative rounded-2xl bg-white border border-slate-200/90 p-8 hover:border-indigo-300 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-indigo-600 transition-colors">
                1. Web Design & Development
              </h3>
              <span className="text-xs font-mono text-slate-400 font-semibold">ENGINEERING</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Fast, responsive, SEO-ready websites engineered to turn visitors into paying customers. Built with modern frameworks (React / Next.js) and optimized for high-speed conversion funnels.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom UI/UX & Responsive Glassmorphic layouts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sub-second page speeds with Google Core Web Vitals score 95+</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Seamless CMS, CRM & payment gateway integrations</span>
              </li>
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-indigo-600 group-hover:text-indigo-700"
            >
              <span>Explore Web Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 2: Content Creation & Shoots */}
          <div className="group relative rounded-2xl bg-white border border-slate-200/90 p-8 hover:border-amber-300 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-amber-600 transition-colors">
                2. Content Creation & Shoots
              </h3>
              <span className="text-xs font-mono text-slate-400 font-semibold">PRODUCTION</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              End-to-end scripting, on-location video shoots, and high-retention editing tailored for modern algorithms. We bring full cinema gear directly to your office, store, or warehouse in Delhi NCR.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Hook-driven viral reel and short-form scripting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Professional 4K multi-camera setup, wireless audio & cinema lighting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Fast post-production: motion captions, sound design, colour grading</span>
              </li>
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-amber-600 group-hover:text-amber-700"
            >
              <span>Explore Shoot Production</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 3: Instagram & Social Management */}
          <div className="group relative rounded-2xl bg-white border border-slate-200/90 p-8 hover:border-pink-300 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-pink-600 transition-colors">
                3. Instagram & Social Management
              </h3>
              <span className="text-xs font-mono text-slate-400 font-semibold">ORGANIC REACH</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Complete account handling—content calendars, reel publishing, community engagement, and organic brand authority. We transform sleepy feeds into high-converting revenue magnets.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                <span>Monthly 15-30 custom reels, carousels, and stories</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                <span>Daily community management, comment replies & DM funnels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                <span>Consistent brand voice and aesthetic grid layout</span>
              </li>
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-pink-600 group-hover:text-pink-700"
            >
              <span>Explore Social Handling</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 4: Performance Marketing (Google & Meta Ads) */}
          <div className="group relative rounded-2xl bg-white border border-slate-200/90 p-8 hover:border-emerald-300 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-emerald-600 transition-colors">
                4. Performance Marketing (Google & Meta Ads)
              </h3>
              <span className="text-xs font-mono text-slate-400 font-semibold">PAID SCALE</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Data-backed paid acquisition campaigns designed to maximize ROAS and lower cost per lead. We align the ad copy, the video creative, and the landing page for razor-sharp conversion efficiency.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>High-intent Google Search, Shopping, and YouTube Ads</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Meta (Facebook & Instagram) hyper-targeted audience funnels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Bi-weekly A/B creative testing and real-time ROAS dashboard</span>
              </li>
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-emerald-600 group-hover:text-emerald-700"
            >
              <span>Explore Paid Advertising</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          YUGAM INNOVATION LAB SPOTLIGHT BANNER (Ventures Teaser)
          ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/70 border border-slate-200/90 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-lg">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>YUGAM INNOVATION LAB // PROPRIETARY VENTURES</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                We Don't Just Scale Other Brands.{' '}
                <span className="bg-gradient-to-r from-amber-600 to-indigo-600 bg-clip-text text-transparent">
                  We Build Our Own.
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Yugam operates as both a powerhouse agency and a digital product incubator. Explore our proprietary technology platforms currently under development:
              </p>

              {/* Mini cards for the 2 ventures */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm mb-1">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Gatbandhan AI</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    100% secure, multi-layer verified matchmaking platform eliminating fake profiles.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm mb-1">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    <span>Middle Bencher</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Project-first skill building bridging degrees with real tech and marketing careers.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="text-center lg:text-right space-y-4">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                  Early Access & Investment Waitlist
                </div>
                <div className="text-3xl font-heading font-bold text-slate-900">
                  Launching Q2 2026
                </div>
                <Link
                  to="/ventures"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all active:scale-95"
                >
                  <span>Explore Innovation Lab</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SOCIAL PROOF & OUTCOMES STRIP
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>MEASURABLE OUTCOMES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Real Revenue. Zero Fluff.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            See how high-growth businesses leverage our integrated execution model to dominate their respective markets.
          </p>
        </div>

        {/* 2 Mini Featured Previews from Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                RETAIL & LIFESTYLE
              </span>
              <span className="text-emerald-600 font-heading font-bold text-sm">+340% Inquiries</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Urban Luxe Furnishings (Delhi NCR)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Replaced slow static WordPress website with a high-speed React storefront + conducted 2 studio shoots generating 16 localized Instagram reels. Backed by hyper-local Meta Ads targeting affluent homeowners.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Timeframe: 60 Days</span>
              <span className="text-slate-900 font-semibold">Outcome: 3.4x monthly qualified walk-in leads</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                B2B PROFESSIONAL SERVICES
              </span>
              <span className="text-amber-600 font-heading font-bold text-sm">-42% Cost Per Lead</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Apex Corporate Legal Advisors
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Restructured legacy Google Search campaigns, eliminated 60% negative keyword waste, and deployed a high-trust conversion landing page with video partner credentials.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Timeframe: 45 Days</span>
              <span className="text-slate-900 font-semibold">Outcome: High-intent retained inquiries doubled</span>
            </div>
          </div>

        </div>

        {/* View All Reviews Button */}
        <div className="text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-heading font-semibold text-xs tracking-wider uppercase transition-colors shadow-xs"
          >
            <span>Read All Client Reviews & Case Studies</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FINAL BOTTOM CTA BANNER (Rich Indigo grounding card)
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-950 text-white p-10 sm:p-14 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Ready to Usher in Your Next Era of Growth?
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
              Schedule a 30-minute discovery consultation with Yugam's growth partners. We'll audit your current digital footprint and propose an integrated roadmap tailored to your margins.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-indigo-900 font-heading font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Book a Growth Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>View Retainer Tiers</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
