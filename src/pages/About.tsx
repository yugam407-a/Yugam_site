import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Target,
  Zap,
  Shield,
  Layers,
  ArrowRight,
  TrendingUp,
  Award,
  Users2,
  Cpu,
  Compass,
  CheckCircle2,
  Workflow
} from 'lucide-react';

export const About: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Audit & Strategic Architecture',
      duration: 'Days 1 – 3',
      description: 'We dissect your existing digital presence, unit economics, customer lifetime value, and competitor blindspots to engineer a precise growth hypothesis.',
      deliverables: ['Full digital footprint review', 'Conversion bottleneck diagnosis', 'Content & paid acquisition roadmap'],
    },
    {
      num: '02',
      title: 'Web & Funnel Infrastructure',
      duration: 'Days 4 – 14',
      description: 'We code your lightning-fast web storefront or landing pages. Structured specifically for high-intent customer journeys and frictionless checkout/lead capture.',
      deliverables: ['Custom responsive UI/UX build', 'Google Core Web Vitals optimization (95+)', 'Event & CRM tracking telemetry'],
    },
    {
      num: '03',
      title: 'Content Shoot & Cinema Production',
      duration: 'Days 7 – 20',
      description: 'Our cinema production crew arrives at your Noida / Delhi NCR location. We script, direct, light, and record high-retention video assets for Reels and ad creatives.',
      deliverables: ['4K cinema gear & wireless audio', 'Hook-driven viral scripting', 'Dynamic captions & post-production grading'],
    },
    {
      num: '04',
      title: 'Paid Ads Calibration & Scale',
      duration: 'Ongoing Sprints',
      description: 'We launch precision Google and Meta ad campaigns. Continuous A/B testing on audiences and hooks drives down cost per lead while scaling healthy ROAS.',
      deliverables: ['Multi-channel ad funnels', 'Weekly ROAS & margin audits', 'Bi-weekly creative refresh cycles'],
    },
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: 'Execution Over Hype',
      description: 'We despise vanity agency slide decks and buzzwords. Every single initiative we propose is tied directly to qualified leads, conversions, and measurable revenue growth.',
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      title: 'Full-Stack Ownership',
      description: 'No finger-pointing between separate web developers, video editors, and media buyers. We own the entire conversion pipeline from the first video frame to the final payment confirmation.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      title: 'Relentless Innovation',
      description: 'We do not rest on yesterday\'s templates. Through Yugam Innovation Lab, we actively build proprietary AI and educational tech, giving our agency clients an unfair technical advantage.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      
      {/* =========================================================================
          HERO & THE YUGAM STORY
          ========================================================================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>THE ORIGIN & MISSION OF YUGAM</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            An Era of Growth.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-amber-600 bg-clip-text text-transparent">
              Engineered From Day One.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            In Sanskrit, <strong className="text-slate-900">"Yugam"</strong> translates to an epoch or an era—a distinct period of transformation and exponential elevation.
          </p>
        </div>

        {/* The Problem We Solved: The Agency Fragmentation Dilemma */}
        <div className="mt-16 rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto shadow-md relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-widest block">
              THE FRAGMENTATION PROBLEM
            </span>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
              Why Traditional Agency Models Are Broken
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For years, growing businesses faced an agonizing dilemma: they hired a freelance developer to build their website, a freelance cameraman to shoot videos, a social media intern to post graphics, and an external media buyer to run ads.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              None of these specialists talked to one another. The web developer built slow pages that didn't convert traffic. The video shooter produced aesthetic videos with zero direct-response marketing hooks. And the media buyer burned cash on ads because the landing pages failed to hold attention.
            </p>

            <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-200">
              <div className="font-heading font-bold text-slate-900 text-base mb-1">
                The Yugam Antidote: Unified Synergy
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Yugam was born in Noida to eradicate this chaos. We combine modern software engineering, cinema video production, social strategy, and performance ads into one unified machine. Everyone sits in the same room, working towards one single number: your revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE VALUES
          ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-amber-700 font-bold uppercase tracking-widest block mb-2">
            WHAT WE STAND FOR
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our Core Operating Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-indigo-300 transition-colors shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4-STEP GROWTH PROCESS TIMELINE
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold mb-3">
            <Workflow className="w-3.5 h-3.5 text-indigo-600" />
            <span>HOW WE OPERATE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            The 4-Step Revenue Acceleration Framework
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            A battle-tested methodology designed to transform brands from invisible to inevitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between relative group hover:border-amber-400 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-extrabold text-3xl text-indigo-200 group-hover:text-amber-500 transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="space-y-1.5 pt-4 border-t border-slate-100">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    Key Outcomes:
                  </div>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          NOIDA HEADQUARTERS & CULTURE
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-widest block">
                NOIDA TECH & CREATIVE HUB
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
                Rooted in Noida. Scaling Across India & Beyond.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our main headquarters in Sector 62, Noida houses our engineering station, editing suites, and production storage. We believe that physical proximity fosters unparalleled creative chemistry—enabling us to brainstorm, shoot, code, and deploy at speeds remote freelancers simply cannot match.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Noida HQ On-Site
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  Fast Delhi NCR Shoot Dispatch
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Hybrid Remote Engineers
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-heading font-semibold text-xs uppercase tracking-wider shadow-md shadow-indigo-500/20 transition-all flex items-center gap-2"
              >
                <span>Visit Our Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
