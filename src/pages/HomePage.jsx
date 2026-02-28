import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  DollarSign, Users, Lightbulb, ArrowRight, Clipboard, MapPin,
  Landmark, Rocket, Quote, Star, TrendingUp, ShieldCheck
} from 'lucide-react';

// Import components
import Seo from '../components/Seo';

// Import data
import { PARTNERS, TESTIMONIALS, FRANCHISE_STATS } from "../data/appData";

// Import animations
import {
  containerVariants,
  itemVariants,
  heroTextVariants,
  buttonHover
} from '../utils/framerVariants';

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    variants={itemVariants}
    className="p-6 bg-white rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-red-600 hover:shadow-2xl h-full flex flex-col"
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 bg-red-50 text-red-600 rounded-full shadow-sm">
        {React.cloneElement(icon, { className: "w-6 h-6" })}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <div className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</div>
  </motion.div>
);

// --- Page Component ---

const HomePage = () => {
  const navigate = useNavigate();

  const steps = [
    { num: 1, title: "Initial Consultation", detail: "Submit your application. We analyze your location's potential or help you find a high-traffic site.", icon: <Clipboard className="w-6 h-6 text-white" /> },
    { num: 2, title: "Site Approval", detail: "Our team conducts a physical survey to ensure the site meets RBI guidelines and safety norms.", icon: <MapPin className="w-6 h-6 text-white" /> },
    { num: 3, title: "Setup & Installation", detail: "We handle the complete installation, branding, and VSAT network connectivity.", icon: <Landmark className="w-6 h-6 text-white" /> },
    { num: 4, title: "Go Live & Earn", detail: "Your ATM goes live. We manage cash loading and maintenance while you earn transaction fees.", icon: <Rocket className="w-6 h-6 text-white" /> },
  ];

  return (
    <>
      {/* SEO Component - Critical for Ranking */}
<Seo
  title="ATM Franchise in India 2026 – Cost, Profit, Commission & Apply Online"
  description="Complete guide to ATM franchise in India. Check ATM franchise cost, monthly profit, commission per transaction, RBI guidelines, white label ATM operators, India1 & Hitachi models. Apply online with low investment."
/>
      <motion.main
        className="min-h-screen bg-slate-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
{/* --- HERO SECTION --- */}
<section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center bg-gray-900">

  {/* Background Image */}
  <img
    src="/common/hero-1.webp"
    alt="ATM Franchise in India Business Opportunity"
    className="absolute inset-0 w-full h-full object-cover opacity-60"
    loading="eager"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent z-[1]"></div>

  {/* Content */}
  <div className="relative z-[10] container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
    <div className="max-w-3xl text-center md:text-left">

      <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
        <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
        <span className="text-red-100 text-xs font-bold uppercase tracking-wider">
          ATM Franchise in India – 2026 Business Model
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
        ATM Franchise in India <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
          Cost, Profit & ROI Guide
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
        Start your own ATM franchise business in India with low investment and high monthly returns. 
        Learn about ATM franchise cost, profit per month, white label ATM models, and RBI guidelines before you apply.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

        <button
          onClick={() => navigate('/atm-franchise-in-india')}
          className="px-8 py-4 bg-red-600 text-white font-bold rounded-full shadow-lg shadow-red-600/30 hover:bg-red-700 transition-all"
        >
          Check Investment Details
        </button>

        <button
          onClick={() => navigate('/contact')}
          className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
        >
          Apply for ATM Franchise
        </button>

      </div>

    </div>
  </div>

</section>
        {/* --- STATS STRIP (NEW) - Builds Trust Immediately --- */}
        <section className="bg-white border-b border-gray-200 relative z-20 -mt-8 mx-4 md:mx-8 rounded-xl shadow-xl p-6 md:p-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
              {FRANCHISE_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                   <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">{stat.value}</h3>
                   <p className="text-xs md:text-sm font-semibold text-red-600 uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
           </div>
        </section>

        {/* --- VALUE PROPOSITION --- */}
<section className="py-20 bg-slate-50">
  <div className="container mx-auto px-4 md:px-8">

    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
        Why Choose Our ATM Franchise in India?
      </h2>
      <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        A structured white label ATM business model designed for stable cash flow, regulatory compliance, and long-term sustainability.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Income */}
      <FeatureCard
        icon={<DollarSign />}
        title="Attractive Monthly Income Potential"
        description={
          <>
            Depending on location, footfall, and transaction volume, an ATM franchise in India may generate 
            <span className="font-bold text-red-600"> ₹30,000 – ₹1,00,000+ per month</span>. 
            Revenue is earned through commission on financial and non-financial transactions under the white label ATM model.
            Actual earnings vary based on site performance and operator structure.
          </>
        }
      />

      {/* Operations */}
      <FeatureCard
        icon={<ShieldCheck />}
        title="Managed Operations & Technical Support"
        description={
          <>
            Most white label ATM operators provide centralized monitoring, cash management coordination, 
            and technical servicing. As a franchise partner, your primary responsibility is to provide a 
            compliant high-footfall location while the operator manages backend operations.
          </>
        }
      />

      {/* Demand */}
      <FeatureCard
        icon={<TrendingUp />}
        title="Strong Transaction Demand in India"
        description={
          <>
            India continues to record high ATM transaction volumes across urban and rural regions. 
            Under the regulatory framework of the Reserve Bank of India (RBI), 
            white label ATM operators expand networks to improve financial inclusion, 
            creating opportunities for franchise partners.
          </>
        }
      />

    </div>

  </div>
</section>
        {/* --- PARTNER ECOSYSTEM (Grid Fixed) --- */}
<section className="py-24 relative bg-slate-50 overflow-hidden">
  {/* 1. Dot Pattern Background */}
  <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

  <div className="container mx-auto px-4 md:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className="text-red-600 font-semibold tracking-wider uppercase text-sm">Trusted Network</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
        Official Banking Partners
      </h2>
      <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
        We are authorized channel partners for India's leading White Label ATM operators. 
        Reliability you can bank on.
      </p>
    </div>

    {/* Partners Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {PARTNERS.map((partner) => (
        <motion.div
          key={partner.name}
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Decorative Top Border on Hover */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

          {/* Logo Area */}
          <div className="h-20 w-full flex items-center justify-center mb-6">
            <img 
              src={partner.img} 
              alt={`${partner.name} Logo`} 
              className="max-h-14 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" 
            />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2">{partner.name}</h3>
          
          <button 
            onClick={() => navigate(`/partners/${partner.page}`)}
            className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-red-600 group-hover:text-red-700 transition-colors"
          >
            View Models 
            <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </button>
        </motion.div>
      ))}
    </div>
  </div>
</section>        {/* --- HOW IT WORKS (Process Flow) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        How to Start an ATM Franchise in India (Step-by-Step Process)
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        The ATM franchise registration process typically involves location evaluation, 
        operator approval, agreement signing, and machine installation under white label ATM guidelines.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

      <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10"></div>

      {steps.map((step) => (
        <motion.div
          key={step.num}
          variants={itemVariants}
          className="flex flex-col items-center text-center bg-white"
        >
          <div className="w-24 h-24 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg mb-6 relative">
            {step.icon}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
              {step.num}
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {step.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            {step.detail}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-12">
      <p className="text-slate-600 mb-4">
        Approval timelines vary depending on documentation, site suitability, 
        and operator policies. Proper high-footfall location increases approval chances.
      </p>
      <button
        onClick={() => navigate('/contact')}
        className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all"
      >
        Start Your ATM Franchise Application
      </button>
    </div>

  </div>
</section>

        {/* --- TESTIMONIALS --- */}
<section className="py-20 bg-slate-50 border-t border-slate-200">
  <div className="container mx-auto px-4 md:px-8">

    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-6">
      ATM Franchise Income Case Studies in India
    </h2>

    <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
      Realistic examples of how ATM franchise locations perform based on footfall, 
      transaction volume, and commission structure. Actual income varies by site performance.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {TESTIMONIALS.map((t, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="bg-white p-8 rounded-xl shadow-md"
        >

          <h4 className="font-bold text-slate-900 mb-3">
            {t.locationType} – {t.city}
          </h4>

          <p className="text-sm text-slate-600 mb-4">
            Estimated Monthly Transactions: <strong>{t.transactions}</strong>
          </p>

          <p className="text-sm text-slate-600 mb-4">
            Approximate Monthly Income: <strong className="text-red-600">{t.income}</strong>
          </p>

          <p className="text-xs text-slate-500">
            *Income depends on location, operator policy, and transaction volume.
          </p>

        </motion.div>
      ))}
    </div>

  </div>
</section>
        {/* --- CTA SECTION --- */}
<section className="py-24 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">

  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

  <div className="container mx-auto px-4 text-center relative z-10">

    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
      Start Your ATM Franchise in India
    </h2>

    <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
      Get a detailed consultation on ATM franchise cost, location feasibility, 
      commission structure, and white label ATM operator options before you invest.
    </p>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/contact')}
      className="px-10 py-5 bg-white text-red-700 font-bold text-lg rounded-full shadow-2xl hover:bg-gray-50 transition-colors"
    >
      Apply for ATM Franchise Consultation
    </motion.button>

    <p className="mt-4 text-sm text-red-200 opacity-80">
      Site evaluation subject to documentation and operator approval.
    </p>

  </div>
</section>
      </motion.main>
    </>
  );
};

export default HomePage;