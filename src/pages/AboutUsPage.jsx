import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, ShieldCheck, TrendingUp, Users, 
  Award, BarChart3, CheckCircle2, ArrowRight, Building2 
} from 'lucide-react';

// Import components
import Seo from '../components/Seo';
import ComplianceModelSection from "../components/ComplianceModelSection"

// Import animations
import {
  containerVariants,
  itemVariants,
  heroTextVariants,
  buttonHover
} from '../utils/framerVariants';

const AboutUsPage = () => {
  const navigate = useNavigate();

  // Live stats data to build trust
  const stats = [
    { label: "Years Experience", value: "12+", icon: <Award className="w-6 h-6 text-red-500" /> },
    { label: "ATMs Installed", value: "8,500+", icon: <BarChart3 className="w-6 h-6 text-red-500" /> },
    { label: "Franchise Partners", value: "4,200+", icon: <Users className="w-6 h-6 text-red-500" /> },
    { label: "Uptime Guaranteed", value: "99.8%", icon: <TrendingUp className="w-6 h-6 text-red-500" /> },
  ];

  // Core values data
 const values = [
  { 
    title: "Transparent Cost Structure", 
    desc: "Clear explanation of security deposit, installation charges, electricity requirements, and commission structure before application submission.", 
    icon: <ShieldCheck className="w-10 h-10 text-white" /> 
  },
  { 
    title: "Structured Evaluation Process", 
    desc: "Location feasibility assessment and documentation guidance aligned with white label ATM operator requirements.", 
    icon: <TrendingUp className="w-10 h-10 text-white" /> 
  },
  { 
    title: "Operator-Level Support Framework", 
    desc: "Approved White Label ATM operators manage network monitoring, technical servicing, and transaction processing under regulatory guidelines.", 
    icon: <Users className="w-10 h-10 text-white" /> 
  },
];


  return (
    <>
<Seo
  title="About ATM Franchise Hub – ATM Franchise in India Cost, Profit & Registration Support 2026"
  description="ATM Franchise Hub provides expert guidance on ATM franchise cost in India, white label ATM registration process, commission structure, operator coordination and location feasibility analysis."
  keywords="ATM franchise company India, ATM franchise consultants India, white label ATM franchise provider, ATM franchise registration support, ATM franchise cost guidance"
  url="/about"
/>
      <motion.main
        className="min-h-screen bg-slate-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* --- HERO SECTION --- */}
<section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">

  {/* Background Pattern (CSS for instant paint, no image request) */}
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage:
        "radial-gradient(#4b5563 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }}
  />

  {/* Red Glow Accent */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

  <div className="container mx-auto px-4 relative z-10 text-center">

    {/* Established Badge */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-6"
    >
      <Building2 className="w-4 h-4 mr-2 text-red-500" />
      Established 2012
    </motion.div>

    {/* Heading */}
    <motion.h1
      variants={heroTextVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
    >
      About ATM Franchise Hub <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
        ATM Franchise Network in India
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      variants={heroTextVariants}
      initial="hidden"
      animate="visible"
      className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
    >
      ATM Franchise Hub is a structured platform that assists investors in
      evaluating and applying for white label ATM franchise opportunities in India.
      We provide guidance on location feasibility, documentation requirements,
      registration processes, and coordination with approved ATM operators.
    </motion.p>

  </div>
</section>

        {/* --- OUR STORY & MISSION --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

      {/* Left Content */}
      <motion.div 
        className="flex-1"
        variants={itemVariants}
      >
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
          <Target className="w-4 h-4 mr-2" /> Our Role & Mission
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
          Building a Reliable ATM Franchise <br />
          <span className="text-red-600">Network Across India</span>
        </h2>

        <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
          <p>
            Despite rapid digital growth, cash transactions continue to play a significant role in the Indian economy. 
            ATM Franchise Hub helps bridge infrastructure gaps by assisting investors in evaluating white label ATM franchise opportunities.
          </p>

          <p>
            We guide applicants through location feasibility assessment, documentation preparation, and coordination with approved White Label ATM operators. 
            Our goal is to simplify the process while maintaining regulatory compliance and operational transparency.
          </p>
        </div>

        {/* Checklist */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Coordination with Approved WLA Operators",
            "Transparent Cost Breakdown",
            "Operator-Level Technical Support",
            "Structured Installation Process"
          ].map((item, i) => (
            <div key={item} className="flex items-center space-x-2 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Visual Area */}
      <motion.div 
        className="flex-1 w-full"
        variants={itemVariants}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 p-2">
          <div className="bg-slate-900 rounded-xl h-[400px] w-full flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
            
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900 via-slate-900 to-slate-900"></div>

            <ShieldCheck className="w-20 h-20 text-red-500 mb-6 relative z-10" />

            <h3 className="text-3xl font-bold text-white relative z-10 mb-2">
              Compliance & Operator Framework
            </h3>

            <p className="text-slate-400 relative z-10 max-w-sm">
              White Label ATM operations in India function under regulatory guidelines issued by the Reserve Bank of India (RBI). 
              Approved operators manage network uptime, monitoring, and transaction settlement systems.
            </p>

            <div className="mt-8 relative z-10 w-full bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-xs text-slate-300 uppercase tracking-widest mb-1">
                Operational Model
              </p>
              <p className="text-lg font-semibold text-white">
                White Label ATM (WLA) Framework
              </p>
            </div>

          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>
        {/* --- STATS SECTION --- */}
<section className="py-16 bg-slate-100 border-y border-slate-200">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-slate-200">

      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="p-4"
        >
          <div className="bg-white w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md text-red-600">
            {stat.icon}
          </div>

          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">
            {stat.value}
          </h3>

          <p className="text-slate-500 text-xs uppercase tracking-wide font-bold">
            {stat.label}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
</section>
<ComplianceModelSection/>
        {/* --- OUR VALUES --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
        Why Choose ATM Franchise Hub?
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        We focus on structured evaluation, regulatory awareness, and transparent guidance for investors exploring ATM franchise opportunities in India.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((item) => (
        <motion.div
          key={item.title}
          variants={itemVariants}
          className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group"
        >
          <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {item.title}
          </h3>

          <p className="text-slate-600 leading-relaxed text-sm">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
        {/* --- CTA --- */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Ready to Join the Revolution?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                The best time to start your passive income journey was yesterday. The second best time is now.
              </p>
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-xl hover:bg-red-700 transition-all flex items-center mx-auto"
              >
                Start Your Application <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </section>

      </motion.main>
    </>
  );
};

export default AboutUsPage;