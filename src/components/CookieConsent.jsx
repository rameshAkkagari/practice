import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieConsent = ({ onAccept }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-8">
          <p className="text-sm md:text-base">
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
            <Link to="/cookies" className="underline ml-1">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
            onClick={() => onAccept()}
          >
            Accept
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => onAccept()}
          >
            Accept All Cookies
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;