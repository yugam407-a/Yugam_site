import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Video,
  Instagram,
  Target,
  Check,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Zap,
  Shield,
  Clock,
  Camera,
  Globe,
  TrendingUp,
  ChevronDown
} from 'lucide-react';

export const Services: React.FC = () => {
  const [billingType, setBillingType] = useState<'retainer' | 'standalone'>('retainer');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const retainers = [
    {
      id: 'starter-launchpad',
      name: 'Starter Launchpad',
      badge: 'Local & Emerging Brands',
      price: '₹35,000',
      period: '/ month',
      description: 'Ideal for local businesses and emerging brands seeking a credible online presence and steady monthly inbound leads.',
      popular: false,
      features: [
        'Up to 5-page responsive modern website',
        '1 half-day production shoot per month (Noida / NCR)',
        '8 high-retention Instagram reels + 8 static posts',
        'Meta Ads (Facebook & Instagram) setup + 2 active campaigns',
        'Standard conversion tracking & lead notifications',
        'Monthly performance & ROI review report',
        'Direct WhatsApp support channel',
      ],
      ctaText: 'Select Starter Launchpad',
      ctaColor: 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200',
    },
    {
      id: 'growth-engine',
      name: 'Growth Engine',
      badge: 'Most Popular Choice',
      price: '₹75,000',
      period: '/ month',
      description: 'Our flagship full-stack growth program for businesses ready to dominate their category with aggressive multi-channel execution.',
      popular: true,
      features: [
        'Custom 10-page dynamic website + full on-page SEO',
        '2 full-day production shoots/month with pro scripting',
        '15 high-impact reels + 12 carousel/posts + daily story handling',
        'Meta Ads + Google Search & Local Ads management',
        'Bi-weekly creative iteration & live ROAS dashboard',
        'Complete community management & DM inquiry funnels',
        'Bi-weekly strategic growth call with leadership',
        'Priority creative turnaround (48-hour sprints)',
      ],
      ctaText: 'Claim Growth Engine',
      ctaColor: 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-md shadow-indigo-500/20',
    },
    {
      id: 'market-dominator',
      name: 'Market Dominator',
      badge: 'Aggressive Scale & Enterprise',
      price: '₹1,40,000',
      period: '/ month',
      description: 'The complete enterprise revenue system for ambitious brands demanding maximum velocity, cinema gear, and relentless ad scaling.',
      popular: false,
      features: [
        'Full custom web app / e-commerce platform + sub-second speed',
        '4 full-day cinema-grade production shoots/month with actors & scriptwriting',
        '25+ reels + daily stories + full comment & customer DM handling',
        'Full-funnel Meta, Google Search, Display, Shopping & YouTube Ads',
        'Dedicated senior Growth Manager & creative director',
        'Weekly financial ROI & unit economics audits',
        'Custom interactive calculators & landing page variant testing',
        '24/7 dedicated Slack/WhatsApp executive channel',
      ],
      ctaText: 'Scale with Dominator',
      ctaColor: 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200',
    },
  ];

  const standaloneProjects = [
    {
      id: 'standalone-web',
      name: 'Custom Web & Funnel Build',
      tagline: 'High-Converting Digital Flagship',
      price: 'from ₹45,000',
      timeline: '2 – 3 Weeks',
      description: 'A bespoke React or Next.js website engineered for speed, clean UX, and high conversion rates. Includes copywriting, mobile responsiveness, and SEO baseline.',
      deliverables: [
        'Up to 8 custom designed, responsive pages',
        'Lightning fast speed score (95+ on Google PageSpeed)',
        'CRM, WhatsApp & Email lead collection integrations',
        'Technical SEO setup + Google Analytics 4 tracking',
        '1 month post-launch technical warranty',
      ],
    },
    {
      id: 'standalone-shoot',
      name: 'Cinema Production Shoot Pack',
      tagline: 'High-Retention Video Assets',
      price: 'from ₹30,000',
      timeline: '1 Week Turnaround',
      description: 'A dedicated on-location film shoot with cinema cameras, wireless audio, and lighting. We script, direct, shoot, and deliver a batch of edited reels ready to post.',
      deliverables: [
        '1 full-day on-location shoot in Delhi NCR',
        'Professional director, DP, cinema lighting & sound gear',
        '10 fully edited viral-format reels with dynamic captions',
        'Raw footage b-roll repository delivered on cloud',
        'Hook scripting & visual pacing tailored for Instagram/YouTube',
      ],
    },
    {
      id: 'standalone-social',
      name: '30-Day Social Growth Sprint',
      tagline: 'Organic Reach & Profile Overhaul',
      price: 'from ₹25,000',
      timeline: '30 Days Active',
      description: 'A focused 30-day blitz to transform your social presence, optimize your bio and highlights, and implement high-performing content formats.',
      deliverables: [
        'Full account audit & aesthetic grid refresh',
        '30-day comprehensive content calendar & scripting',
        '12 custom graphics/carousels + publishing schedule',
        'Hashtag & search SEO strategy for Reels discovery',
        'End-of-month engagement & reach analytics report',
      ],
    },
    {
      id: 'standalone-ads',
      name: 'Paid Ads Funnel Setup & Launch',
      tagline: 'Predictable Customer Acquisition',
      price: 'from ₹35,000',
      timeline: '2 Weeks Setup + 2 Weeks Optimization',
      description: 'Complete architecture of your Meta and Google Ads infrastructure. From pixel tracking and event triggers to copywriting and creative testing.',
      deliverables: [
        'Meta Pixel & Google Tag Manager tracking verification',
        'Campaign structure design (Top, Middle & Bottom of Funnel)',
        '3 high-converting ad creative angles (video/static)',
        '1 dedicated high-intent landing page / lead form',
        '14-day post-launch optimization & bidding calibration',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Why hire Yugam instead of separate freelancers for web, video, and ads?',
      answer: 'When you hire separate freelancers, they operate in silos. Your web developer doesn\'t understand your ad creatives, your videographer doesn\'t track website conversions, and your ads specialist blames the website when ads fail. Yugam unifies all three. We script video shoots specifically for our ad funnels and build websites specifically to convert the traffic we generate.'
    },
    {
      question: 'Where do the video shoots take place?',
      answer: 'Our in-house production crew is based at our Noida headquarters. We conduct on-location shoots throughout Delhi NCR (Noida, Greater Noida, Delhi, Gurugram, Ghaziabad, Faridabad) at your store, office, clinic, warehouse, or factory. For brands outside NCR, we arrange targeted travel shoots or remote studio production.'
    },
    {
      question: 'Is ad spend included in the monthly retainer fee?',
      answer: 'No. The monthly retainer fee covers Yugam’s full-service strategy, website updates, scripting, filming, editing, and ad management. Your ad spend is paid directly to Google or Meta from your own ad account, ensuring you have 100% financial transparency and retain all account history.'
    },
    {
      question: 'Are there any long-term lock-in contracts?',
      answer: 'No long-term locks. Our retainers operate on a flexible 3-month initial commitment to give sufficient runway for algorithmic calibration, content production, and organic compounding. After that, you may continue on a month-to-month basis with a standard 30-day notice.'
    },
    {
      question: 'How quickly can we launch after onboarding?',
      answer: 'Our kickoff audit happens within 48 hours of onboarding. The initial website build or overhaul takes 10 to 14 days, with the first production shoot scheduled in week one so that content and landing pages launch simultaneously.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>FULL-STACK AGENCY CAPABILITIES & TRANSPARENT PRICING</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Predictable Growth Systems.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-amber-600 bg-clip-text text-transparent">
              Zero Hidden Surprises.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose an all-in-one monthly growth retainer for compounding market authority, or select standalone project sprints tailored to your exact immediate needs.
          </p>

          {/* Pricing Toggle Switch */}
          <div className="pt-8 flex items-center justify-center">
            <div className="p-1.5 rounded-xl bg-slate-200/80 border border-slate-300/80 flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setBillingType('retainer')}
                className={`px-6 py-2.5 rounded-lg text-xs font-heading font-bold transition-all duration-200 ${
                  billingType === 'retainer'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Growth Retainers
              </button>
              <button
                onClick={() => setBillingType('standalone')}
                className={`px-6 py-2.5 rounded-lg text-xs font-heading font-bold transition-all duration-200 ${
                  billingType === 'standalone'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Standalone / One-Time Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRICING TIERS SECTION
          ========================================================================= */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {billingType === 'retainer' ? (
            /* 3-Tier Retainer Grid */
            <motion.div
              key="retainers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            >
              {retainers.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 bg-white ${
                    tier.popular
                      ? 'border-2 border-indigo-600 shadow-xl shadow-indigo-500/10 lg:-translate-y-2'
                      : 'border border-slate-200 shadow-sm hover:border-slate-300'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-amber-500 text-white text-[11px] font-heading font-extrabold uppercase tracking-wider shadow-md">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    {!tier.popular && (
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-semibold block mb-2">
                        {tier.badge}
                      </span>
                    )}

                    <h3 className="font-heading font-extrabold text-2xl text-slate-900 mt-1">
                      {tier.name}
                    </h3>

                    <p className="text-xs text-slate-500 mt-2 min-h-[36px] leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="mt-6 pb-6 border-b border-slate-100 flex items-baseline gap-1.5">
                      <span className="font-heading font-extrabold text-4xl text-slate-900">
                        {tier.price}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {tier.period}
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="mt-6 space-y-3">
                      <div className="text-[11px] font-mono text-indigo-700 uppercase tracking-wider font-bold">
                        What's Included:
                      </div>
                      <ul className="space-y-2.5">
                        {tier.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      to={`/contact?package=${tier.id}`}
                      className={`w-full py-3.5 px-4 rounded-xl font-heading font-semibold text-xs tracking-wider uppercase text-center block transition-all active:scale-98 ${tier.ctaColor}`}
                    >
                      {tier.ctaText}
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* Standalone One-Time Projects Grid */
            <motion.div
              key="standalone"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {standaloneProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-3xl bg-white border border-slate-200 hover:border-amber-400 p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-amber-600 font-semibold tracking-wider">
                        {proj.tagline}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-600 font-medium">
                        {proj.timeline}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-slate-900 group-hover:text-amber-600 transition-colors">
                      {proj.name}
                    </h3>

                    <div className="text-xl font-heading font-bold text-slate-900 mt-3 pb-4 border-b border-slate-100">
                      {proj.price}
                    </div>

                    <p className="text-xs text-slate-600 mt-4 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="mt-6 space-y-2.5">
                      <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                        Key Deliverables:
                      </div>
                      <ul className="space-y-2">
                        {proj.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      to={`/contact?package=${proj.id}`}
                      className="w-full py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-800 font-heading font-semibold text-xs tracking-wider uppercase text-center block transition-all"
                    >
                      Inquire About This Project
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* =========================================================================
          DETAILED SERVICE PILLARS DEEP DIVE
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span>EXCELLENCE IN EVERY DISCIPLINE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            How Each Pillar Fuels the Growth Engine
          </h2>
        </div>

        <div className="space-y-16">
          
          {/* Deep Dive 1: Websites */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900">
                Websites Built for Conversion, Not Just Looks
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most agencies build pretty websites that load sluggishly and leak visitors. We engineer conversion-focused web architecture. Fast load speeds prevent bounce rates, clear visual hierarchy guides attention, and strategically placed CTAs convert clicks into inquiries.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-900 font-bold text-sm">Sub-second Speed</div>
                  <div className="text-xs text-slate-500">Zero lag keeps visitors engaged</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-900 font-bold text-sm">SEO Architecture</div>
                  <div className="text-xs text-slate-500">Indexed cleanly on Google Search</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-indigo-50/60 p-6 rounded-2xl border border-indigo-100">
              <div className="text-xs font-mono text-indigo-700 font-bold mb-2">BENCHMARK PERFORMANCE</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-slate-700 mb-1">
                    <span>Performance Score</span>
                    <span className="text-emerald-600 font-bold">98/100</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[98%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-700 mb-1">
                    <span>Mobile Responsiveness</span>
                    <span className="text-indigo-600 font-bold">100%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Dive 2: Video Shoots */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900">
                Cinema Production Right at Your Doorstep
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Stock videos and generic templates don't convert anymore. Modern consumers demand real faces, real products, and authentic craftsmanship. We deploy professional 4K cinema cameras, lighting grids, and teleprompters directly to your premises in Delhi NCR.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-900 font-bold text-sm">Full Gear Rig</div>
                  <div className="text-xs text-slate-500">Sony FX cinema, gimbal, wireless lavs</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-900 font-bold text-sm">Algorithm Pacing</div>
                  <div className="text-xs text-slate-500">3-second hook rate optimization</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-amber-50/60 p-6 rounded-2xl border border-amber-100">
              <div className="text-xs font-mono text-amber-700 font-bold mb-2">CONTENT RETENTION METRIC</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-slate-700 mb-1">
                    <span>Average Hook Retention (0-3s)</span>
                    <span className="text-amber-600 font-bold">78%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-[78%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-700 mb-1">
                    <span>Video Completion Rate</span>
                    <span className="text-amber-600 font-bold">54%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-[54%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION SECTION
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Clear Answers to Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-indigo-600' : ''
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
