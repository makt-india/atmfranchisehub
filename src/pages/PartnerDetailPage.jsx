import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Info, Check,
} from "lucide-react";
import Seo from "../components/Seo";
import { PARTNER_DETAILS } from "../data/appData.jsx";
import {
  pageTransitionVariants,
  containerVariants,
  itemVariants,
  buttonHover
} from "../utils/framerVariants";

// --- Main Page Component ---
const PartnerDetailPage = () => {
  const navigate = useNavigate();
  const { partnerSlug } = useParams(); 

  // Case-insensitive lookup
  const details = PARTNER_DETAILS[partnerSlug?.toLowerCase()];
  
  // If data doesn't exist, redirect to the main partners page
  if (!details) {
    return <Navigate to="/partners" replace />;
  }

  const benefits = details.benefits; 

  return (
    <>
      <Seo
        title={`${details.heroTitle} | ATM Franchise Hub`}
        description={details.aboutContent.description.substring(0, 155) + "..."}
      />

      <motion.main
        className="min-h-screen bg-slate-50"
        variants={pageTransitionVariants}
        initial="initial"
        animate="in"
        exit="out"
      >
        {/* --- HERO SECTION --- */}
        <section className="relative h-[60vh] bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={details.heroImage || "/common/franchise.webp"}
              alt={`${details.heroTitle} Background`}
              className="w-full h-full object-cover opacity-50" 
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
            <motion.button
              className="group flex items-center text-slate-300 font-medium hover:text-white transition mb-6 w-fit px-4 py-2 rounded-full bg-white/10 backdrop-blur-md"
              onClick={() => navigate("/partners")}
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Partners
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 max-w-4xl tracking-tight">
                {details.heroTitle}
              </h1>
              <div className="h-1 w-24 bg-red-600 rounded-full mb-4"></div>
            </motion.div>
          </div>
        </section>

        {details?.aboutContent && (
          <>
            {/* --- ABOUT SECTION (Overlapping Hero) --- */}
            <section className="relative z-20 -mt-20 pb-20">
              <div className="container mx-auto px-4">
                <motion.div 
                  className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {/* Title & Subtitle */}
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                      {details.aboutContent.sectionTitle}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                      {details.aboutContent.sectionSubtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="max-w-4xl mx-auto text-center mb-12">
                    <p className="text-lg font-semibold text-red-600 mb-4 uppercase tracking-wider text-sm">
                      Authorized Strategic Partner
                    </p>
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                      {details.aboutContent.description}
                    </p>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {details.aboutContent.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center"
                      >
                        <h3 className="text-4xl font-extrabold text-slate-900 mb-2">
                          {stat.value}
                        </h3>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          </>
        )}

        {/* --- WHY CHOOSE SECTION --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              
              {/* Left: Image & Diagram Trigger */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src={details.heroImage || "/common/cash-simle3.webp"}
                  alt={details.whyPartner.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl z-10 relative"
                />
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-red-100 rounded-2xl -z-0"></div>
                
                {/* Visual Aid for Business Model */}
                <div className="mt-8">
                   
                   <p className="text-xs text-center text-gray-500 mt-2 italic">Figure: The Franchise Operational Workflow</p>
                </div>
              </motion.div>
              
              {/* Right: Content */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="inline-block px-4 py-1 bg-red-50 text-red-600 font-bold text-xs rounded-full mb-4 uppercase tracking-wider border border-red-100">
                  {details.whyPartner.badge}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  {details.whyPartner.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {details.whyPartner.text}
                </p>
                
                <ul className="space-y-4">
                  {["High Reliability", "Low Maintenance", "Secure Network"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-800 font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <Check className="w-4 h-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- KEY BENEFITS (Marquee) --- */}
        <section className="bg-slate-900 py-24 overflow-hidden relative">
          <div className="container mx-auto px-4 mb-12 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Franchise Benefits
            </h2>
            <p className="text-slate-400">Why thousands of entrepreneurs choose {partnerSlug.toUpperCase()}</p>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden mask-linear-gradient">
              <motion.div
                className="flex gap-6 pl-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                style={{ width: "fit-content" }}
              >
                {/* Doubled array for seamless loop */}
                {[...benefits, ...benefits].map((benefit, index) => (
                  <div
                    key={index}
                    className="w-[300px] md:w-[350px] flex-shrink-0 bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-red-500 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-red-600/20 text-red-500 rounded-lg flex items-center justify-center mb-6">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- INVESTMENT PACKAGES --- */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Investment Plans
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Select the tier that best fits your location and budget.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-6 font-bold text-slate-900 text-sm uppercase tracking-wider">Package</th>
                      <th className="p-6 font-bold text-slate-900 text-sm uppercase tracking-wider">Ideal For</th>
                      <th className="p-6 font-bold text-slate-900 text-sm uppercase tracking-wider">Investment</th>
                      <th className="p-6 font-bold text-slate-900 text-sm uppercase tracking-wider">Inclusions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {details.packages.map((pkg, i) => (
                      <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-6 font-bold text-slate-900">{pkg.pkg}</td>
                        <td className="p-6 text-slate-600">{pkg.ideal}</td>
                        <td className="p-6 text-red-600 font-bold">{pkg.investment}</td>
                        <td className="p-6 text-slate-600 text-sm">{pkg.inclusions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- REQUIREMENTS GRID --- */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-16">
              Setup Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.requirements.map((req, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 p-3 bg-red-50 text-red-600 rounded-lg mr-5">
                    {req.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Requirement {i + 1}</h4>
                    <p className="text-slate-600">{req.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SEO CONTENT --- */}
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-slate-400 mr-3" />
                <h2 className="text-xl font-bold text-slate-800">{details.seoContent.title}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {details.seoContent.text}
              </p>
            </div>
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="py-24 bg-gradient-to-br from-red-700 to-red-900 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Ready to Partner with {partnerSlug.toUpperCase()}?
            </h2>
            <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
              Get your complete franchise kit and site feasibility report today.
            </p>
            <motion.button
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="px-10 py-4 bg-white text-red-700 font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-colors flex items-center mx-auto"
            >
              Request Franchise Kit <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </section>

      </motion.main>
    </>
  );
};

export default PartnerDetailPage;