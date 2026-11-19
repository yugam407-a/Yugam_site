import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  CheckCircle2,
  Send,
  Zap,
  Coffee,
  Heart,
  TrendingUp,
  Laptop
} from 'lucide-react';

export const Careers: React.FC = () => {
  const [openRole, setOpenRole] = useState<number | null>(0);

  // Application form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [selectedRole, setSelectedRole] = useState('Videographer & Reel Editor');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleRole = (index: number) => {
    setOpenRole(openRole === index ? null : index);
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !portfolioUrl) return;
    setSubmitted(true);
  };

  const roles = [
    {
      title: 'Videographer & Reel Editor',
      type: 'Full-Time',
      location: 'Noida HQ (On-Site Shoots in Delhi NCR)',
      salary: '₹35,000 – ₹60,000 / month + Project Incentives',
      description: 'We are seeking a high-energy camera operator and visual editor who lives and breathes modern viral short-form video. You will operate cinema cameras, lighting, and sound gear on shoots across Delhi NCR and craft snappy, hook-driven edits for client brands.',
      responsibilities: [
        'Direct and film on-location multi-camera video shoots across Delhi NCR.',
        'Edit vertical reels and TikTok/YouTube Shorts with kinetic typography, SFX, and pacing.',
        'Collaborate with the growth marketing team to script viral 3-second hook structures.',
        'Maintain and manage camera bodies, lenses, wireless audio, and lighting equipment.',
      ],
      requirements: [
        'Proficiency in Adobe Premiere Pro, After Effects, or DaVinci Resolve.',
        'Demonstrable portfolio of high-retention vertical reels (>50K organic views preferred).',
        'Strong sense of pacing, sound design, color grading, and motion graphics.',
      ],
    },
    {
      title: 'Performance Marketing Specialist (Meta & Google Ads)',
      type: 'Full-Time',
      location: 'Noida HQ / Hybrid',
      salary: '₹40,000 – ₹75,000 / month + ROAS Bonuses',
      description: 'You will manage and scale paid advertising budgets across Meta (FB & IG) and Google Search/Shopping for e-commerce, D2C, and B2B clients. Data-driven mindset, rigorous split testing, and obsession with unit economics required.',
      responsibilities: [
        'Build, monitor, and optimize ad campaigns across Meta Ads Manager and Google Ads.',
        'Formulate weekly creative testing angles and coordinate with editors for ad variants.',
        'Conduct deep funnel attribution audits, pixel setup, and CBO/ABO budget scaling.',
        'Prepare weekly ROAS dashboards and lead-volume reports for clients.',
      ],
      requirements: [
        '2+ years of hands-on experience managing profitable ad budgets exceeding ₹5L/month.',
        'Deep understanding of Custom Audiences, Lookalikes, Google Keyword Intent, and Retargeting.',
        'Analytical rigor with Google Analytics 4, Tag Manager, and UTM tracking.',
      ],
    },
    {
      title: 'Full-Stack Web Developer (React / Next.js / Node)',
      type: 'Full-Time',
      location: 'Hybrid / Noida HQ',
      salary: '₹45,000 – ₹80,000 / month + Venture Equity Option',
      description: 'Build lightning-fast client websites, interactive web applications, and contribute to our proprietary Yugam Innovation Lab products (Gatbandhan AI & Middle Bencher). You value clean code, sub-second latency, and beautiful UI engineering.',
      responsibilities: [
        'Architect responsive modern web apps using React, Next.js, Tailwind CSS, and Node.js.',
        'Optimize client web pages for 95+ Core Web Vitals performance scores.',
        'Integrate CRM APIs, payment gateways (Razorpay/Stripe), and headless CMS platforms.',
        'Write clean, modular code with automated testing and continuous integration.',
      ],
      requirements: [
        'Strong command of modern JavaScript/TypeScript, React 18, and Tailwind CSS.',
        'Experience building server-side rendered (SSR) apps or API microservices.',
        'A public GitHub profile or portfolio demonstrating real deployed production apps.',
      ],
    },
    {
      title: 'Social Media & Content Strategist',
      type: 'Full-Time',
      location: 'Noida HQ',
      salary: '₹30,000 – ₹50,000 / month',
      description: 'Take complete ownership of content calendars, storytelling narratives, and community engagement for high-growth client accounts. You understand the Instagram and LinkedIn algorithms better than anyone.',
      responsibilities: [
        'Draft comprehensive 30-day content calendars, carousel copies, and reel hooks.',
        'Manage daily story scheduling, audience polls, and DM lead funnel routing.',
        'Monitor cultural trends, meme formats, and audio virality to jump on breaking waves.',
        'Engage with industry communities and prospective brand collaborators.',
      ],
      requirements: [
        'Exceptional copywriting skills in English and conversational Hindi.',
        'Demonstrated track record growing social accounts organically.',
        'Eye for aesthetic typography, color balance, and brand consistency.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>WE ARE HIRING IN NOIDA // JOIN THE MOVEMENT</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Build Brands. Ship Products.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-amber-600 bg-clip-text text-transparent">
              Grow With Yugam.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We are not a bloated corporate bureaucracy. At Yugam, you work directly on high-growth client brands and get to build groundbreaking products in our Innovation Lab.
          </p>
        </div>

        {/* Culture Highlights Bento */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Extreme Autonomy
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No micro-management. You are given high-level revenue and creative goals and the trust to experiment, fail fast, and ship big wins.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Agency + Venture Hybrid
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You won't get bored doing repetitive agency client work. You'll also write code and produce content for Gatbandhan AI and Middle Bencher.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Modern Studio in Noida
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              High-speed workstations, cinema camera rigs, podcast microphones, good coffee, and a collaborative team of builders who love what they do.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          OPEN ROLES ACCORDION & APPLICATION FORM SPLIT
          ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4 Open Roles Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-6">
              <span className="text-xs font-mono text-indigo-700 uppercase tracking-widest font-bold block mb-1">
                CURRENT OPENINGS
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                Explore Available Positions
              </h2>
            </div>

            <div className="space-y-4">
              {roles.map((role, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleRole(idx)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                          {role.type}
                        </span>
                        <span className="text-xs font-mono text-slate-500 flex items-center gap-1 font-medium">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {role.location}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-slate-900">
                        {role.title}
                      </h3>
                      <div className="text-xs text-emerald-600 font-mono font-semibold mt-1">
                        {role.salary}
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 mt-2 transition-transform duration-200 ${
                        openRole === idx ? 'rotate-180 text-indigo-600' : ''
                      }`}
                    />
                  </button>

                  {openRole === idx && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-600">
                      <p className="leading-relaxed">
                        {role.description}
                      </p>

                      <div>
                        <strong className="text-slate-900 block mb-2 font-heading">Key Responsibilities:</strong>
                        <ul className="space-y-1.5 list-disc pl-4 text-xs text-slate-600">
                          {role.responsibilities.map((r, rIdx) => (
                            <li key={rIdx}>{r}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <strong className="text-slate-900 block mb-2 font-heading">Requirements:</strong>
                        <ul className="space-y-1.5 list-disc pl-4 text-xs text-slate-600">
                          {role.requirements.map((req, reqIdx) => (
                            <li key={reqIdx}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => {
                            setSelectedRole(role.title);
                            const formElement = document.getElementById('application-form');
                            formElement?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-4 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white border border-indigo-200 text-xs font-heading font-semibold transition-colors"
                        >
                          Apply For This Role Below ↓
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Job Application Form */}
          <div id="application-form" className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative sticky top-28">
            <div className="mb-6">
              <span className="text-xs font-mono text-amber-700 uppercase tracking-widest font-bold block mb-1">
                FAST-TRACK APPLICATION
              </span>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Submit Your Candidacy
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                We review applications within 48 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="font-heading font-bold text-slate-900 text-lg">
                  Application Received!
                </div>
                <p className="text-xs text-slate-600">
                  Thank you, {applicantName}. Our hiring team has received your portfolio for <strong className="text-slate-900">{selectedRole}</strong>. If there's an alignment, we'll reach out on WhatsApp/Email ({applicantEmail}) for a quick chat.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="you@email.com"
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
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Role Applying For *
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Videographer & Reel Editor">Videographer & Reel Editor</option>
                    <option value="Performance Marketing Specialist (Meta & Google Ads)">Performance Marketing Specialist</option>
                    <option value="Full-Stack Web Developer (React / Next.js / Node)">Full-Stack Web Developer</option>
                    <option value="Social Media & Content Strategist">Social Media & Content Strategist</option>
                    <option value="General Candidacy / Other">General Candidacy / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Portfolio / GitHub / Google Drive Reel Link *
                  </label>
                  <input
                    type="url"
                    required
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://drive.google.com/... or github.com/..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Short Pitch / Why Yugam?
                  </label>
                  <textarea
                    rows={3}
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    placeholder="Tell us what you built recently that you're most proud of..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-indigo-500/20 active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
