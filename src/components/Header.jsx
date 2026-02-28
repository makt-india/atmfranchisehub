import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, PARTNERS } from "../data/appData";
import { buttonHover } from "../utils/framerVariants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnersDropdownOpen, setIsPartnersDropdownOpen] = useState(false);
  const partnersDropdownRef = useRef(null);

  const location = useLocation();
  const currentPath = location.pathname;

  /* =========================
     Active Navigation Class
  ========================= */
  const navClass = (path) => {
    const isActive = currentPath === path;
    const isPartnerPage = currentPath.startsWith("/partners");

    if (path === "/partners" && isPartnerPage) {
      return "bg-red-50 text-red-700 font-bold shadow-sm";
    }

    return `text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
      isActive
        ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30"
        : "text-slate-600 hover:bg-red-50 hover:text-red-700"
    }`;
  };

  /* =========================
     Close Dropdown on Outside Click
  ========================= */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        partnersDropdownRef.current &&
        !partnersDropdownRef.current.contains(event.target)
      ) {
        setIsPartnersDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* =========================
     Lock Scroll on Mobile Menu
  ========================= */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* ================= LOGO ================= */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/common/logo.png"
              alt="ATM Franchise Hub Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="leading-tight text-left">
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
                ATM<span className="text-red-600">FranchiseHub</span>
              </div>
              <div className="text-xs font-semibold text-slate-600 tracking-wider">
                INDIA’S MOST TRUSTED AND TRANSPARENT ATM FRANCHISE NETWORK
              </div>
            
            </div>
          </Link>
        </motion.div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex space-x-2 items-center">
          {NAV_ITEMS.map((item) => {
            if (item.path === "/partners") {
              return (
                <div
                  key={item.path}
                  className="relative"
                  ref={partnersDropdownRef}
                >
                  <motion.button
                    type="button"
                    className={`${navClass("/partners")} flex items-center space-x-1 rounded-full`}
                    onClick={() =>
                      setIsPartnersDropdownOpen((prev) => !prev)
                    }
                    whileHover={buttonHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isPartnersDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {isPartnersDropdownOpen && (
                      <motion.div
                        className="absolute top-full right-0 mt-4 w-72 bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden z-[200]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <div className="py-3 px-4 bg-slate-50 border-b border-slate-100">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Official Banking Partners
                          </span>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto">
                          {PARTNERS.map((partner) => (
                            <Link
                              key={partner.page}
                              to={`/partners/${partner.page}`}
                              className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors border-b border-slate-50 last:border-0"
                              onClick={() =>
                                setIsPartnersDropdownOpen(false)
                              }
                            >
                              <div className="w-10 h-10 mr-3 bg-white rounded-lg border border-slate-100 flex items-center justify-center p-1 shadow-sm">
                                <img
                                  src={partner.img}
                                  alt={`${partner.name} Logo`}
                                  className="w-full h-full object-contain"
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <span className="block font-semibold">
                                  {partner.name}
                                </span>
                                <span className="text-xs text-slate-500">
                                  View Franchise Models
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <Link
                          to="/partners"
                          className="block px-4 py-3 text-center text-sm text-white font-bold bg-gradient-to-r from-red-600 to-red-700"
                          onClick={() =>
                            setIsPartnersDropdownOpen(false)
                          }
                        >
                          View All Partners
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <motion.div
                key={item.path}
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
                className="rounded-full"
              >
                <Link
                  to={item.path}
                  className={`${navClass(item.path)} block`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-red-600" />
          ) : (
            <Menu className="w-7 h-7 text-slate-800" />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-[100%] left-0 w-full bg-white border-b border-slate-100 shadow-2xl z-[90]"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <div className="flex flex-col p-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    currentPath === item.path
                      ? "bg-red-50 text-red-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
