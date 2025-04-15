import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

const cookieTypes = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    examples: ['Session ID', 'Security tokens', 'Server load balancing'],
    required: true
  },
  {
    id: 'functional',
    name: 'Functional Cookies',
    description: 'These cookies enable the website to provide enhanced functionality and personalization.',
    examples: ['Language preferences', 'Location-based content', 'Saved form data'],
    required: false
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
    examples: ['Pages visited', 'Time spent on site', 'Navigation paths'],
    required: false
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
    examples: ['Advertisements viewed', 'Products of interest', 'Referral sources'],
    required: false
  }
];

const Cookies = () => {
  const [cookiePreferences, setCookiePreferences] = React.useState({
    essential: true,
    functional: true,
    analytics: true,
    marketing: false
  });

  const handleToggleCookie = (id) => {
    if (id === 'essential') return; // Essential cookies cannot be toggled
    setCookiePreferences(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Your cookie preferences have been saved!');
  };

  React.useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    }
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Cookie Policy</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Understanding how we use cookies to improve your experience on our website.
          </p>
        </div>
      </section>

      {/* Cookie Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
            <p className="mb-4">
              At FranchiseHub, we use cookies to enhance your browsing experience, analyze site traffic, personalize content, 
              and serve targeted advertisements. This policy explains how we use these cookies and the choices you have regarding them.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How We Use Cookies</h2>
            <p className="mb-4">
              We use different types of cookies for various purposes. Some cookies are essential for the functionality of our website, 
              while others help us improve performance, provide enhanced features, or deliver better advertising.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6">
              {cookieTypes.map((cookieType) => (
                <motion.div 
                  key={cookieType.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{cookieType.name}</h3>
                    <div className="flex items-center">
                      {cookieType.required && (
                        <span className="text-sm text-gray-500 mr-4">Always Active</span>
                      )}
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={cookiePreferences[cookieType.id]}
                          onChange={() => handleToggleCookie(cookieType.id)}
                          disabled={cookieType.required}
                        />
                        <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 
                          ${cookiePreferences[cookieType.id] ? 'after:translate-x-full after:border-white bg-blue-600' : ''}
                          after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}>
                        </div>
                      </label>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-700">{cookieType.description}</p>
                  <div className="mt-2">
                    <p className="font-medium mb-2">Examples:</p>
                    <ul className="list-disc pl-5 text-gray-600">
                      {cookieType.examples.map((example, index) => (
                        <li key={index}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Managing Your Cookie Preferences</h2>
            <p className="mb-4">
              You can manage your cookie preferences at any time by adjusting the settings above. Please note that disabling certain 
              cookies may impact the functionality of our website and the services we are able to offer.
            </p>
            <p className="mb-4">
              In addition to the controls above, most web browsers allow you to manage your cookie preferences. You can:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Delete cookies from your device</li>
              <li>Block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies</li>
              <li>Set your browser to notify you when you receive a cookie</li>
            </ul>
            <p className="mb-4">
              Please note that if you choose to block all cookies, you may not be able to access all or parts of our site.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Changes to Our Cookie Policy</h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page 
              and updating the "Last Updated" date.
            </p>
            <p className="mb-4">
              Last Updated: April 6, 2025
            </p>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-lg"
              onClick={savePreferences}
            >
              Save Cookie Preferences
            </motion.button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Cookies;