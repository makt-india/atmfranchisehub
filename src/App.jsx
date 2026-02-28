import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "./components/Layout";

/* Critical Pages */
import HomePage from "./pages/HomePage";
import FranchisePage from "./pages/FranchisePage";

/* Lazy Pages */
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const PartnersPage = lazy(() => import("./pages/PartnersPage"));
const PartnerDetailPage = lazy(() => import("./pages/PartnerDetailPage"));
const BlogPage = lazy(() => import("./pages/Blog"));
const BlogPostPage = lazy(() => import("./pages/BlogPost"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

/* Scroll Reset */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/* Loader */
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50">
    <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    <p className="mt-4 text-gray-500 font-medium">Loading...</p>
  </div>
);

/* Global Structured Data */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ATM Franchise Hub",
  url: "https://atmfranchisehub.com",
  logo: "https://atmfranchisehub.com/logo.png",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ATM Franchise Hub",
  url: "https://atmfranchisehub.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://atmfranchisehub.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

function App() {
  return (
    <Layout>
      <Helmet>
        {/* Performance */}
        <link rel="preconnect" href="https://atmfranchisehub.com" />

        {/* Default Language */}
        <html lang="en-IN" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/atm-franchise-in-india" element={<FranchisePage />} />

        <Route
          path="/about"
          element={
            <Suspense fallback={<PageLoader />}>
              <AboutUsPage />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactUsPage />
            </Suspense>
          }
        />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        <Route
          path="/partners"
          element={
            <Suspense fallback={<PageLoader />}>
              <PartnersPage />
            </Suspense>
          }
        />

        <Route
          path="/partners/:partnerSlug"
          element={
            <Suspense fallback={<PageLoader />}>
              <PartnerDetailPage />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;