import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, TrendingUp, Building2, Users, ShieldCheck } from 'lucide-react';
import Seo from '../components/Seo';
import { PARTNERS } from '../data/appData';
import {
  pageTransitionVariants,
  containerVariants,
  itemVariants,
  buttonHover
} from '../utils/framerVariants';

const PartnersPage = () => {
  const navigate = useNavigate();

  return (
  <>
  <Seo
    title="Hitachi, India1, EPS & Findi ATM Franchise in India – Cost, Profit & Apply Online"
    description="Compare Hitachi ATM franchise cost, India1 ATM investment, EPS commission model and Findi ATM profit. Detailed white label ATM franchise guide with ROI and application process."
    keywords="Hitachi ATM franchise cost, India1 ATM franchise apply online, EPS ATM franchise commission, Findi ATM franchise profit, white label ATM franchise India"
    url="/banking-partners"
  />
      <motion.main
        className="min-h-screen bg-slate-50"
        variants={pageTransitionVariants}
        initial="initial"
        animate="in"
        exit="out"
      >
        {/* --- PAGE HEADER --- */}
        <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
           {/* Abstract Network Background */}
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-slate-900 to-black"></div>
           
           <div className="container mx-auto px-4 relative z-10 text-center">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center px-4 py-2 rounded-full bg-red-900/30 border border-red-500/30 text-red-300 text-sm font-bold mb-6 backdrop-blur-sm"
             >
                <ShieldCheck className="w-4 h-4 mr-2" /> RBI Authorized Networks
             </motion.div>

             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
             >
               Strategic Banking <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                 Alliances
               </span>
             </motion.h1>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="max-w-3xl mx-auto"
             >
               <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-8">
                 We connect you directly with India's financial infrastructure giants. 
                 Secure transactions, guaranteed settlements, and high uptime.
               </p>
               
               {/* Visual Aid for Understanding the Network */}
               <div className="hidden md:block opacity-80 hover:opacity-100 transition-opacity duration-300">
                  
                  <p className="text-xs text-slate-500 mt-2">Figure: How the White Label ATM Network operates</p>
               </div>
             </motion.div>
           </div>
        </section>

        {/* --- PARTNER CARDS GRID --- */}
        <section className="py-20 -mt-16 relative z-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }} 
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {PARTNERS.map((partner) => (
                <motion.div
                  key={partner.name}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 cursor-pointer group flex flex-col h-full"
                  onClick={() => navigate(`/partners/${partner.page}`)}
                >
                  {/* Top Accent Line */}
                  <div className="h-1 bg-gradient-to-r from-slate-200 via-red-600 to-slate-200 w-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="p-8 flex flex-col h-full">
                    {/* Header: Logo & Name */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 p-2 group-hover:border-red-100 transition-colors">
                        <img
                          src={partner.img}
                          alt={`${partner.name} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">{partner.name}</h3>
                        <div className="flex items-center mt-1">
                          <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Accepting Applications</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div 
                      className="text-slate-600 mb-8 text-sm leading-relaxed flex-grow border-b border-slate-50 pb-6"
                      dangerouslySetInnerHTML={{ __html: partner.description }}
                    />

                    {/* Comparison Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {/* Investment */}
                        <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">
                          <Wallet className="w-4 h-4 text-slate-400 mx-auto mb-2" />
                          <p className="text-xs font-bold text-slate-900">{partner.investment}</p>
                          <p className="text-[10px] text-slate-400 uppercase font-bold mt-1">Min. Invest</p>
                        </div>
                        {/* Return */}
                        <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">
                          <TrendingUp className="w-4 h-4 text-slate-400 mx-auto mb-2" />
                          <p className="text-xs font-bold text-slate-900">{partner.return}</p>
                          <p className="text-[10px] text-slate-400 uppercase font-bold mt-1">Est. ROI</p>
                        </div>
                        {/* Space */}
                        <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">
                          <Building2 className="w-4 h-4 text-slate-400 mx-auto mb-2" />
                          <p className="text-xs font-bold text-slate-900">{partner.space}</p>
                          <p className="text-[10px] text-slate-400 uppercase font-bold mt-1">Sq.Ft</p>
                        </div>
                    </div>

                    {/* Footer Link */}
                    <button className="w-full py-3 rounded-lg bg-slate-900 text-white text-sm font-bold flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      View Franchise Models <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CLOSING CTA --- */}
        <section className="py-20 bg-white border-t border-slate-100">
          <motion.div 
            className="container mx-auto px-4 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-4 bg-red-50 rounded-full mb-6 ring-4 ring-red-50/50">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              Our consultants can analyze your location and budget to recommend the most profitable partner for you.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 transition-colors"
            >
              Get Expert Recommendation
            </motion.button>
          </motion.div>
        </section>
      </motion.main>
    </>
  );
};

export default PartnersPage;