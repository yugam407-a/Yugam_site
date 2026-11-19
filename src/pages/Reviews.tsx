import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Filter,
  MessageSquare,
  X,
  Send,
  Building,
  Quote,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const Reviews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Websites' | 'Content & Reels' | 'Google & Meta Ads'>('All');
  
  // Interactive "Leave a Review" Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('Growth Engine (Full-Stack)');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [submittedReview, setSubmittedReview] = useState(false);

  const reviewsList = [
    {
      id: 1,
      name: 'Aditya Malhotra',
      role: 'Founder & CEO',
      company: 'Urban Luxe Furnishings',
      industry: 'Luxury Furniture & Decor',
      category: 'Websites',
      rating: 5,
      date: 'October 2025',
      text: 'Before Yugam, we worked with three separate freelancers who couldn\'t get on the same page. Yugam redesigned our catalog into a blazing fast React storefront and came to our showroom to shoot 16 high-end reels. Inquiries jumped 3.4x within two months.',
      metrics: '3.4x Increase in Showroom Walk-ins',
    },
    {
      id: 2,
      name: 'Dr. Neha Varma',
      role: 'Clinical Director',
      company: 'Aura Aesthetics Clinics',
      industry: 'Dermatology & Wellness',
      category: 'Content & Reels',
      rating: 5,
      date: 'November 2025',
      text: 'Their video production crew in Noida is sensational. They scripted doctor-patient educational reels that addressed actual patient fears rather than sounding like awkward promotional ads. 4 of our reels crossed 100K organic views in Delhi NCR.',
      metrics: '100K+ Organic Video Reach',
    },
    {
      id: 3,
      name: 'Rajesh Singhal',
      role: 'Managing Partner',
      company: 'Apex Corporate Legal',
      industry: 'Corporate Law Firm',
      category: 'Google & Meta Ads',
      rating: 5,
      date: 'December 2025',
      text: 'Legal Google Search ads are brutally expensive with lots of spam clicks. Yugam audited our Google account, trimmed the negative keywords, and rebuilt our landing page. Our cost per qualified retainer inquiry dropped by 42%.',
      metrics: '42% Reduction in CPL',
    },
    {
      id: 4,
      name: 'Pooja Kashyap',
      role: 'Co-Founder',
      company: 'Vedik Herbs D2C',
      industry: 'Ayurvedic Wellness',
      category: 'Content & Reels',
      rating: 5,
      date: 'January 2026',
      text: 'The Growth Engine package took all the stress off my plate. We get 2 full-day shoots every month, crisp reel edits, and ad management that consistently delivers a 4.1x ROAS on Meta. They act like true co-founders.',
      metrics: '4.1x Blended ROAS',
    },
    {
      id: 5,
      name: 'Vikram Sethi',
      role: 'Director of Marketing',
      company: 'Nexus Real Estate Advisory',
      industry: 'Commercial Real Estate',
      category: 'Google & Meta Ads',
      rating: 5,
      date: 'February 2026',
      text: 'Selling premium commercial office space in Noida Expressway requires high-net-worth lead qualification. Yugam engineered multi-step interactive lead qualification forms that filtered out tire-kickers. The lead quality is unmatched.',
      metrics: '85% Qualified Lead Intent',
    },
    {
      id: 6,
      name: 'Tanvi Saxena',
      role: 'Principal Designer',
      company: 'Studio Kroma Interiors',
      industry: 'Architectural & Interior Design',
      category: 'Websites',
      rating: 5,
      date: 'March 2026',
      text: 'Our architectural portfolio needed a modern, minimalist dark aesthetic with ultra-crisp image rendering. Yugam delivered beyond our expectations. It looks like an international award-winning website and our bounce rate dropped by 60%.',
      metrics: 'Sub-second Load Times',
    },
  ];

  const filteredReviews = activeFilter === 'All'
    ? reviewsList
    : reviewsList.filter((r) => r.category === activeFilter);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !reviewText) return;
    setSubmittedReview(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmittedReview(false);
      setClientName('');
      setBusinessName('');
      setReviewText('');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      
      {/* =========================================================================
          HERO & TRUST SUMMARY BAR
          ========================================================================= */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>VERIFIED CLIENT OUTCOMES & EXPERIENCES</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Proof in Performance.{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              Trusted by Category Leaders.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Read verified reviews and detailed case studies from business owners and marketing executives scaling with Yugam’s integrated growth framework.
          </p>

          {/* Trust Score Header */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-heading font-extrabold text-xl text-slate-900 ml-2">4.9 / 5.0</span>
              <span className="text-xs text-slate-500 font-mono">Rating</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-heading font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              <span>Leave Us a Review</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED DEEP CASE STUDIES (2 In-Depth Cards)
          ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-mono text-indigo-700 font-bold uppercase tracking-widest block mb-2">
            IN-DEPTH IMPACT STUDIES
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            How We Solved Real-World Bottlenecks
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Case Study 1: Retail & Lifestyle */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                  RETAIL & LUXURY FURNISHINGS
                </span>
                <span className="text-emerald-600 font-heading font-bold text-base flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> 3.4x Inquiries
                </span>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  Urban Luxe Furnishings
                </h3>
                <p className="text-xs text-slate-500 mt-1">Delhi NCR Showroom & Custom Manufacturing</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div>
                  <strong className="text-rose-600 font-semibold block mb-1">The Challenge:</strong>
                  The client had a slow, outdated WordPress site that failed on mobile. They relied on expensive magazine prints that failed to drive foot traffic, and their Instagram had only static photos with flat engagement.
                </div>

                <div>
                  <strong className="text-indigo-600 font-semibold block mb-1">The Yugam Solution:</strong>
                  We built a sub-second React digital showroom featuring interactive 360-degree room layouts. Our production team dispatched to their Noida studio to shoot 16 aesthetic short-form reels focusing on wood quality and craftsmanship. Finally, we launched hyper-local Meta Ads targeting homeowners in high-value Delhi NCR pin codes.
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium space-y-1">
                  <div className="font-heading font-bold text-slate-900 text-sm">Measurable Result:</div>
                  <div>• 3.4x increase in showroom walk-in consultations within 60 days.</div>
                  <div>• Organic Instagram reach expanded from 1,200 to 84,000 monthly impressions.</div>
                  <div>• Website bounce rate decreased from 68% to 22%.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2: B2B Legal Firm */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                  B2B CORPORATE LEGAL SERVICES
                </span>
                <span className="text-amber-600 font-heading font-bold text-base flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> -42% CPL
                </span>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  Apex Corporate Legal
                </h3>
                <p className="text-xs text-slate-500 mt-1">Corporate Retainers, Mergers & IP Protection</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div>
                  <strong className="text-rose-600 font-semibold block mb-1">The Challenge:</strong>
                  The firm was spending over ₹2,50,000/month on Google Search Ads with an external agency. The cost per inquiry had climbed to ₹8,400, and over 60% of the inbound calls were consumer civil disputes outside their B2B corporate scope.
                </div>

                <div>
                  <strong className="text-amber-700 font-semibold block mb-1">The Yugam Solution:</strong>
                  We rebuilt their Google Search campaigns from the ground up, adding 400+ negative keywords to eliminate non-corporate traffic. We replaced their generic homepage link with a high-trust conversion landing page highlighting senior partner credentials and case precedents.
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium space-y-1">
                  <div className="font-heading font-bold text-slate-900 text-sm">Measurable Result:</div>
                  <div>• Cost per qualified retainer lead plummeted by 42% (from ₹8,400 to ₹4,870).</div>
                  <div>• Form-to-consultation conversion rate doubled from 7% to 15.4%.</div>
                  <div>• Zero non-corporate consumer calls received after keyword filter deployment.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          CLIENT REVIEWS GRID WITH CATEGORY FILTERS
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              What Business Owners Say
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Filter feedback by service area
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 overflow-x-auto max-w-full">
            {(['All', 'Websites', 'Content & Reels', 'Google & Meta Ads'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold whitespace-nowrap transition-colors ${
                  activeFilter === tab
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-200 font-semibold">
                    {rev.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div>
                <div className="mb-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-600 font-semibold">
                  <span>Outcome:</span>
                  <span>{rev.metrics}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-50 to-amber-50 border border-slate-200 flex items-center justify-center font-heading font-bold text-indigo-700 text-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-slate-900">{rev.name}</div>
                    <div className="text-[11px] text-slate-500">{rev.role}, {rev.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          INTERACTIVE LEAVE A REVIEW MODAL
          ========================================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-indigo-700 uppercase tracking-widest font-bold block mb-1">
                  CLIENT FEEDBACK
                </span>
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Leave a Review for Yugam
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  We appreciate honest feedback from our valued partners.
                </p>
              </div>

              {submittedReview ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-bold text-slate-900 text-lg">
                    Thank You, {clientName}!
                  </div>
                  <p className="text-xs text-slate-600">
                    Your review has been submitted to our verification team and will appear live shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Apex Lifestyle"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Websites">Website Development</option>
                        <option value="Content & Reels">Content Shoot & Reels</option>
                        <option value="Google & Meta Ads">Google & Meta Ads</option>
                        <option value="Growth Engine (Full-Stack)">Growth Engine (Full-Stack)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Rating (1 to 5 Stars)
                      </label>
                      <div className="flex items-center gap-1 py-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setRating(star)}
                            className="p-1 focus:outline-none"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Review / Experience
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Share what results or experience you had working with Yugam..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2"
                  >
                    <span>Submit Review</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
