import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Lock,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  Send,
  Users,
  Code,
  Briefcase,
  Flame,
  ArrowRight,
  Mail,
  Zap,
  Globe2
} from 'lucide-react';

export const Ventures: React.FC = () => {
  // Gatbandhan AI Waitlist state
  const [gatbandhanEmail, setGatbandhanEmail] = useState('');
  const [gatbandhanRole, setGatbandhanRole] = useState('Individual / Early User');
  const [gatbandhanSubmitted, setGatbandhanSubmitted] = useState(false);

  // Middle Bencher Waitlist state
  const [middleEmail, setMiddleEmail] = useState('');
  const [middleTrack, setMiddleTrack] = useState('Full-Stack Tech & AI');
  const [middleSubmitted, setMiddleSubmitted] = useState(false);

  const handleGatbandhanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gatbandhanEmail) return;
    setGatbandhanSubmitted(true);
  };

  const handleMiddleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!middleEmail) return;
    setMiddleSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden selection:bg-amber-400 selection:text-black">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>YUGAM INNOVATION LAB // VENTURE STUDIO</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Where Agency Execution Meets{' '}
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-indigo-600 bg-clip-text text-transparent">
              Product Innovation.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Most agencies only build for clients. Yugam reinvests its engineering and creative horsepower into incubations that solve fundamental societal challenges across relationship discovery and modern education.
          </p>
        </div>
      </section>

      {/* =========================================================================
          FLAGSHIP 1: GATBANDHAN AI
          ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Info & Story */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-mono font-bold">
                  FLAGSHIP VENTURE 01
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  In Development • Launching Soon
                </span>
              </div>

              <div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight flex items-center gap-3">
                  Gatbandhan AI
                </h2>
                <div className="text-sm sm:text-base font-heading font-semibold text-amber-600 mt-2">
                  100% Secure, Intelligent, and Efficient Matchmaking.
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The modern matchmaking ecosystem is plagued by fake bot profiles, catfishing, commercial data selling, and superficial swiping fatigue. <strong className="text-slate-900">Gatbandhan AI</strong> fundamentally rebuilds relationship discovery. By enforcing mandatory multi-layer biometric and government ID verification with privacy-preserving zero-knowledge proofs, we ensure every interaction is authentic and intentional.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>100% Verified Profiles</span>
                  </div>
                  <p className="text-xs text-slate-500">Zero bots, zero fraudulent profiles, strict KYC.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm">
                    <Lock className="w-4 h-4 text-amber-600" />
                    <span>End-to-End Privacy</span>
                  </div>
                  <p className="text-xs text-slate-500">Your contact info & photos remain masked until mutual intent.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm">
                    <Cpu className="w-4 h-4 text-indigo-600" />
                    <span>AI Compatibility Engine</span>
                  </div>
                  <p className="text-xs text-slate-500">Values, lifestyle, and life goals matched beyond surface photos.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm">
                    <HeartHandshake className="w-4 h-4 text-pink-600" />
                    <span>Curated Intent Matches</span>
                  </div>
                  <p className="text-xs text-slate-500">Quality over quantity: 3 curated matches a week, not endless swiping.</p>
                </div>
              </div>

            </div>

            {/* Right Column: Early Access Waitlist Form */}
            <div className="lg:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono text-amber-700 uppercase tracking-widest font-bold block mb-1">
                  EXCLUSIVE ALPHA ACCESS
                </span>
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Join the Gatbandhan Waitlist
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Be among the first 1,000 verified founding members upon release.
                </p>
              </div>

              {gatbandhanSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-bold text-slate-900 text-base">
                    You're on the Gatbandhan VIP list!
                  </div>
                  <p className="text-xs text-slate-600">
                    We’ve reserved your early access pass. Watch your inbox ({gatbandhanEmail}) for the private invitation link.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleGatbandhanSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={gatbandhanEmail}
                        onChange={(e) => setGatbandhanEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 shadow-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      I Am Joining As
                    </label>
                    <select
                      value={gatbandhanRole}
                      onChange={(e) => setGatbandhanRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 shadow-xs transition-colors"
                    >
                      <option value="Individual / Early User">Individual Looking for Verified Matchmaking</option>
                      <option value="Parent / Family Member">Family Member Exploring Safe Options</option>
                      <option value="Investor / Strategic Partner">Angel Investor / Strategic Partner</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>Request Early Access</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Zero spam. 100% strict data privacy.</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FLAGSHIP 2: MIDDLE BENCHER
          ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Info & Story */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs font-mono font-bold">
                  FLAGSHIP VENTURE 02
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  Curriculum in Production • Launching Soon
                </span>
              </div>

              <div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight flex items-center gap-3">
                  Middle Bencher
                </h2>
                <div className="text-sm sm:text-base font-heading font-semibold text-indigo-600 mt-2">
                  Practical Skills for the Real World.
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Traditional college degrees teach theory from outdated textbooks. Today’s high-paying tech and creative roles demand immediate execution. <strong className="text-slate-900">Middle Bencher</strong> is an upcoming skill-building incubator created for the self-driven learner. We cut through academic fluff to teach production-ready skills: modern full-stack development, AI agent workflows, viral video storytelling, and performance marketing.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm">
                    <Code className="w-4 h-4 text-indigo-600" />
                    <span>Project-First Learning</span>
                  </div>
                  <p className="text-xs text-slate-500">No rote exams. You build live apps, real shoots, and ad campaigns.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span>Industry Mentorship</span>
                  </div>
                  <p className="text-xs text-slate-500">Mentored directly by Yugam’s senior engineers & growth leads.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm">
                    <Briefcase className="w-4 h-4 text-amber-600" />
                    <span>Real Portfolio Building</span>
                  </div>
                  <p className="text-xs text-slate-500">Graduate with 4 verified production projects employers value.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm">
                    <Flame className="w-4 h-4 text-rose-500" />
                    <span>Placement Direct Line</span>
                  </div>
                  <p className="text-xs text-slate-500">Top cohort performers get interviewed for Yugam & partner brands.</p>
                </div>
              </div>

            </div>

            {/* Right Column: Get Notified Form */}
            <div className="lg:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono text-indigo-700 uppercase tracking-widest font-bold block mb-1">
                  COHORT 01 NOTIFICATION
                </span>
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Get Notified on Launch
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Seats are capped at 50 students per cohort to guarantee hands-on mentorship.
                </p>
              </div>

              {middleSubmitted ? (
                <div className="p-6 rounded-xl bg-indigo-50 border border-indigo-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-bold text-slate-900 text-base">
                    You're on the Cohort Notification list!
                  </div>
                  <p className="text-xs text-slate-600">
                    We'll email you at {middleEmail} as soon as syllabus previews and early-bird scholarship applications open.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleMiddleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={middleEmail}
                        onChange={(e) => setMiddleEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 shadow-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Skill Track You're Most Interested In
                    </label>
                    <select
                      value={middleTrack}
                      onChange={(e) => setMiddleTrack(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 shadow-xs transition-colors"
                    >
                      <option value="Full-Stack Tech & AI">Full-Stack Web (React, Node, AI Integrations)</option>
                      <option value="Video Editing & Cinema Production">Video Production & Viral Reel Editing</option>
                      <option value="Performance Marketing & ROAS">Performance Ads & Growth Strategy</option>
                      <option value="All of the above">All of the above (Full-Stack Operator)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-indigo-500/20 active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>Notify Me on Cohort 01</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-[11px] text-slate-500 text-center">
                    Early-bird applicants receive a 30% scholarship grant.
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MORE IN THE PIPELINE / INVESTOR COLLABORATION CARD
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center shadow-sm relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-slate-500 tracking-widest uppercase font-semibold">
              YUGAM R&D ECOSYSTEM
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Are You an Investor, Builder, or Domain Expert?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We frequently partner with angel syndicates, venture capitalists, and veteran operators who want to co-build high-impact technology products. Connect directly with Yugam's founding team.
            </p>
            <div className="pt-4">
              <a
                href="mailto:hello@yugam.in?subject=Venture%20Lab%20Syndicate%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-semibold text-xs tracking-wider uppercase border border-slate-200 transition-colors"
              >
                <span>Connect With Yugam R&D</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
