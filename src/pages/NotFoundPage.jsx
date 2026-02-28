import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Import Helmet directly for "noindex"

// Import components
// We use Helmet directly to add a "noindex" tag
// import Seo from '../components/Seo'; 

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* NEW: Special SEO for 404 Page.
        We tell Google *not* to index this page.
      */}
      <Helmet>
        <title>404 Page Not Found | ATMFraanchiseHub</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.main
        className="container mx-auto px-4 py-16 md:py-24 min-h-[80vh] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center p-12 bg-white rounded-xl shadow-2xl border-t-8 border-red-600 max-w-lg mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.2 }}
            className="inline-block p-4 bg-red-100 rounded-full"
          >
            <AlertTriangle className="w-16 h-16 text-red-600" />
          </motion.div>
          
          <h1 className="text-6xl font-extrabold text-red-600 mt-6 mb-2">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-700 mb-10">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you may have mistyped the URL.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-xl shadow-red-600/50 hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center mx-auto"
            onClick={() => navigate('/')} // Navigate to Home
          >
            <Home className="w-5 h-5 mr-2" />
            Go Back Home
          </motion.button>
        </div>
      </motion.main>
    </>
  );
};

export default NotFoundPage;