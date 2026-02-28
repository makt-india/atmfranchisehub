import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutGrid, Users, Phone, MapPin, CheckCircle,
  Shield, TrendingUp, Target, ThumbsUp, DollarSign,
  Banknote, ArrowRight, FileText
} from 'lucide-react';

// Import components
import Seo from '../components/Seo';
import VisibilityBoostSection from "../components/VisibilityBoostSection"

// Import data
import {
  PARTNER_PACKAGES,
  FRANCHISE_STATS
} from '../data/appData';

// Import animations
import {
  pageTransitionVariants,
  containerVariants,
  itemVariants,
  buttonHover
} from '../utils/framerVariants';

const FranchisePage = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Inquiry & Application",
      detail: "Submit your application. We review your profile and location feasibility.",
      icon: <Phone className="w-5 h-5 text-white" />
    },
    {
      title: "Site Survey & Vetting",
      detail: "Experts conduct a physical survey to check footfall and technical viability.",
      icon: <MapPin className="w-5 h-5 text-white" />
    },
    {
      title: "Agreement Signing",
      detail: "Sign the WLA Franchise Agreement and complete RBI compliance docs.",
      icon: <FileText className="w-5 h-5 text-white" />
    },
    {
      title: "Installation & Branding",
      detail: "We deploy the ATM, VSAT, and branding collateral at your shop.",
      icon: <LayoutGrid className="w-5 h-5 text-white" />
    },
    {
      title: "Go Live & Support",
      detail: "Transaction testing is done, and you start earning immediately.",
      icon: <CheckCircle className="w-5 h-5 text-white" />
    },
  ];

  const franchiseStats = FRANCHISE_STATS;

  return (
    <>
     <Seo
  title="ATM Franchise Models in India – Cost, Profit & ROI Comparison 2026"
  description="Compare ATM franchise models in India including India1, Hitachi and EPS. Detailed cost breakdown, commission structure, monthly profit potential and white label ATM ROI analysis."
  keywords="ATM franchise models India, ATM franchise cost comparison, ATM franchise profit India, India1 ATM franchise cost, Hitachi ATM franchise investment, white label ATM ROI"
  url="/atm-franchise-models"
/>

      <motion.main
        className="min-h-screen bg-slate-50"
        variants={pageTransitionVariants}
        initial="initial"
        animate="in"
        exit="out"
      >
        {/* --- Hero Section --- */}
<section className="relative h-[60vh] flex items-center bg-black text-white overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-red-950/90 to-black z-10"></div>

    <img
      src="/common/franchise.webp"
      alt="White Label ATM Franchise Business Model in India"
      className="w-full h-full object-cover opacity-35 grayscale"
      loading="eager"
      fetchPriority="high"
    />
  </div>

  <div className="container mx-auto px-4 relative z-20 text-center md:text-left">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >

      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        White Label ATM Franchise <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
          Business Model in India
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
        Understand how the White Label ATM (WLA) framework operates under RBI
        regulations. Explore investment structure, commission model, and
        operator-managed backend systems before you apply.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

        <motion.button
          whileHover={buttonHover}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className="px-8 py-4 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition-colors"
        >
          Download Franchise Brochure
        </motion.button>

      </div>

    </motion.div>
  </div>
</section>
        {/* --- Why WLA Section --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">

    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
        Why Consider a White Label ATM Franchise?
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        A structured infrastructure-based model where licensed operators manage backend operations while investors provide compliant locations.
      </p>
    </div>

    {/* Diagram Block */}
    <div className="mb-12 max-w-4xl mx-auto border border-slate-100 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-slate-50 p-2 text-center text-xs text-slate-500">
        Figure: Transaction fee flow – Customer → Bank → Operator → Franchise Partner
      </div>
    </div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      {/* Income Model */}
      <motion.div variants={itemVariants} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-red-100 rounded-lg text-red-600">
            <ThumbsUp className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Transaction-Based Revenue
          </h4>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Franchise partners earn commission on financial and non-financial transactions processed through the ATM. Income depends on location footfall and transaction volume.
        </p>
      </motion.div>

      {/* Security */}
      <motion.div variants={itemVariants} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-red-100 rounded-lg text-red-600">
            <Shield className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Operator-Managed Infrastructure
          </h4>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Licensed White Label ATM operators manage monitoring, cash logistics coordination, and regulatory compliance under RBI framework.
        </p>
      </motion.div>

      {/* ROI */}
      <motion.div variants={itemVariants} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-red-100 rounded-lg text-red-600">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            ROI Depends on Location Performance
          </h4>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Profitability varies based on transaction density, nearby commercial activity, and regional demand for cash withdrawals.
        </p>
      </motion.div>

      {/* Setup */}
      <motion.div variants={itemVariants} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-red-100 rounded-lg text-red-600">
            <Target className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Structured Deployment Process
          </h4>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Installation, connectivity, and branding are executed in coordination with approved operators following documentation verification and site approval.
        </p>
      </motion.div>

    </motion.div>

  </div>
</section>
        {/* --- Stats Strip --- */}
     <section className="py-14 bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-white relative overflow-hidden">

  {/* Subtle ambient glow */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[length:24px_24px]" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-red-800/40">

      {franchiseStats.map((stat) => (
        <div key={stat.label} className="p-4">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-1 tracking-tight">
            {stat.value}
          </h3>
          <p className="text-red-200 text-xs md:text-sm font-semibold uppercase tracking-wider">
            {stat.label}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

        {/* --- Investment & Packages --- */}
<section className="py-20 bg-slate-50">
  <div className="container mx-auto px-4">

    {/* ================= Investment Breakdown ================= */}
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-slate-200"
    >

      <div className="bg-gradient-to-r from-slate-900 to-black p-6 text-white text-center">
        <h3 className="text-2xl font-bold">
          Typical ATM Franchise Investment Components
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          Final cost depends on operator model, location type, and infrastructure requirements.
        </p>
      </div>

      <div className="p-8 md:p-12">
        <ul className="space-y-6">

          <li className="flex items-start">
            <DollarSign className="w-6 h-6 text-red-600 mr-4 mt-1" />
            <div>
              <p className="font-bold text-slate-900 text-lg">
                Franchise / Facilitation Fee
              </p>
              <p className="text-slate-600">
                Covers documentation guidance, coordination support, and onboarding assistance.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <Banknote className="w-6 h-6 text-red-600 mr-4 mt-1" />
            <div>
              <p className="font-bold text-slate-900 text-lg">
                Security Deposit (Operator Held)
              </p>
              <p className="text-slate-600">
                Refundable deposit held by the licensed operator against hardware and deployment assets.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <LayoutGrid className="w-6 h-6 text-red-600 mr-4 mt-1" />
            <div>
              <p className="font-bold text-slate-900 text-lg">
                Site Preparation & Utilities
              </p>
              <p className="text-slate-600">
                Civil modifications, electrical setup, earthing, and internet connectivity handled at location level.
              </p>
            </div>
          </li>

        </ul>

        <p className="text-xs text-slate-500 mt-8">
          *Actual investment varies depending on city category, footfall potential, and selected White Label ATM operator.
        </p>

      </div>
    </motion.div>

    {/* ================= Comparison Section ================= */}

    <div className="text-center mb-10">
      <h3 className="text-3xl font-bold text-slate-900">
        Compare White Label ATM Models
      </h3>
      <p className="text-slate-500 text-sm mt-2">
        Overview of commonly available operator frameworks.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-6 py-4 font-bold text-sm uppercase">Operator</th>
              <th className="px-6 py-4 font-bold text-sm uppercase">Model Type</th>
              <th className="px-6 py-4 font-bold text-sm uppercase">Network Size</th>
              <th className="px-6 py-4 font-bold text-sm uppercase">Key Strength</th>
              <th className="px-6 py-4 font-bold text-sm uppercase">Best Suited For</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {PARTNER_PACKAGES.map((pkg) => (
              <tr
                key={pkg.name}
                className="hover:bg-red-50/40 transition-colors"
              >
                <td className="px-6 py-4 font-bold text-slate-900">
                  {pkg.name}
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {pkg.package}
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {pkg.networkSize}
                </td>
                <td className="px-6 py-4 font-medium text-red-600">
                  {pkg.specialty}
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {pkg.bestFor}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>

  </div>
</section>
<VisibilityBoostSection/>

        {/* --- Process Flow --- */}
<section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="container mx-auto px-4">

    {/* Header */}
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
        ATM Franchise Onboarding Process
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed">
        A structured deployment workflow coordinated with licensed White Label ATM operators.
      </p>
    </div>

    {/* Timeline Indicator */}
    <div className="mb-14 max-w-5xl mx-auto rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
      <div className="bg-slate-100 px-4 py-3 text-center text-xs text-slate-500 font-medium tracking-wide">
        Typical timeline: Subject to documentation review, site verification & operator scheduling
      </div>
    </div>

    {/* Steps Grid */}
    <div className="relative">

      {/* Desktop Connector Line */}
      <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-red-200 via-red-400 to-red-200"></div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">

        {steps.map((step) => (
          <div
            key={step.title}
            className="relative flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
          >

            {/* Step Number Circle */}
            <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-red-300">
              {step.stepNumber}
            </div>

            <h4 className="font-bold text-slate-900 mb-3 text-base md:text-lg">
              {step.title}
            </h4>

            <p className="text-sm text-slate-600 leading-relaxed">
              {step.detail}
            </p>

          </div>
        ))}

      </div>
    </div>

    {/* Compliance Note */}
    <div className="mt-16 text-center">
      <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
        Final deployment timelines depend on documentation completeness, location suitability,
        regulatory alignment, and formal operator approval.
      </p>
    </div>

  </div>
</section>
   {/* --- CTA --- */}
<section className="relative py-24 bg-gradient-to-b from-slate-950 to-black text-white text-center overflow-hidden">

  {/* Subtle Red Ambient Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 blur-3xl rounded-full" />

  <div className="relative container mx-auto px-4">

    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
      Begin Your ATM Franchise Evaluation
    </h2>

    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
      Assess your location’s feasibility, investment requirements, and
      operator alignment before proceeding with deployment.
    </p>

    <motion.button
      whileHover={buttonHover}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/contact')}
      className="px-12 py-4 bg-red-600 hover:bg-white hover:text-slate-900 text-white font-bold rounded-full shadow-2xl transition-all inline-flex items-center"
    >
      Request Consultation
      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
    </motion.button>

    <p className="text-xs text-slate-500 mt-6 max-w-xl mx-auto">
      Final approval is subject to documentation review, site inspection,
      and licensed operator confirmation.
    </p>

  </div>
</section>

      </motion.main>
    </>
  );
};

export default FranchisePage;