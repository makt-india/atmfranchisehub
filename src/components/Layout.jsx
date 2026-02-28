import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/* ----------------------------
   Scroll To Top On Route Change
----------------------------- */
const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that section smoothly
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Otherwise scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
};

const Layout = ({ children }) => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                   bg-red-600 text-white px-4 py-2 rounded-md z-50 shadow-lg 
                   focus:outline-none focus:ring-4 focus:ring-red-300 transition"
      >
        Skip to main content
      </a>

      <Header />

      {/* Main Content */}
      <main
        id="main-content"
        role="main"
        className="flex-grow w-full relative flex flex-col"
      >
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default Layout;
