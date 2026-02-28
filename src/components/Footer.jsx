import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { PARTNERS } from "../data/appData";
import { itemVariants } from "../utils/framerVariants";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "ATM Franchise Hub",
    url: "https://atmfranchisehub.com",
    logo: "https://atmfranchisehub.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+918883335553",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: "English"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "India"
    }
  };

  return (
    <footer className="bg-slate-50 text-slate-700 border-t-4 border-red-600 font-sans">
      
      {/* Structured Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-5">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/common/logo.png"
                alt="ATM Franchise Hub Logo"
                className="h-12 w-auto object-contain"
              />
              <h4 className="text-2xl font-extrabold tracking-tight text-slate-900">
                ATM<span className="text-red-600">FranchiseHub</span>
              </h4>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed">
              ATM Franchise Hub connects entrepreneurs with RBI-authorized
              White Label ATM operators including Hitachi, India1, EPS and
              other regulated networks across India.
            </p>

            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>RBI-Regulated WLA Network Facilitation</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-5 text-slate-900 border-l-4 border-red-600 pl-3">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/atm-franchise-in-india" className="hover:text-red-600 transition">
                  ATM Franchise in India – Cost & ROI Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-600 transition">
                  Apply for ATM Franchise
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-600 transition">
                  About Our WLA Facilitation Model
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-red-600 transition">
                  ATM Business Articles & Resources
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Partner Pages */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-5 text-slate-900 border-l-4 border-red-600 pl-3">
              WLA Operators
            </h4>
            <ul className="space-y-3 text-sm">
              {PARTNERS.map((p) => (
                <li key={p.name}>
                  <Link
                    to={`/partners/${p.page}`}
                    className="hover:text-red-600 transition"
                  >
                    {p.name} ATM Franchise Model
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-5 text-slate-900 border-l-4 border-red-600 pl-3">
              Contact
            </h4>

            <address className="not-italic text-sm space-y-4">
              <a
                href="mailto:maktin.help@gmail.com"
                className="flex items-start group"
              >
                <Mail className="w-5 h-5 mr-3 text-red-600 mt-0.5" />
                <span className="group-hover:text-red-600 transition-colors">
                  maktin.help@gmail.com
                </span>
              </a>

              <a
                href="tel:+918883335553"
                className="flex items-start group"
              >
                <Phone className="w-5 h-5 mr-3 text-red-600 mt-0.5" />
                <span className="group-hover:text-red-600 transition-colors">
                  +91 88833 35553
                </span>
              </a>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-red-600 mt-0.5" />
                <span>India (Nationwide WLA Deployment Support)</span>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Legal + Disclaimer */}
        <div className="mt-14 pt-8 border-t border-slate-200 text-xs text-slate-500 space-y-4">

          <p>
            ATM Franchise Hub operates as a facilitation platform connecting
            applicants with RBI-authorized White Label ATM operators.
            We are not a licensed bank or direct ATM operator. Deployment
            approvals, commission structure, and operational policies are
            subject to the respective operator’s regulatory framework.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              © {new Date().getFullYear()} ATMFranchiseHub.com — All Rights Reserved.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-red-600 transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-red-600 transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
