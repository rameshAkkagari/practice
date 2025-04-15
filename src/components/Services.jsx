import React, { useState } from 'react';
import { motion } from 'framer-motion';

const franchiseCategories = [
  { id: 'all', name: 'All Categories' },
  { id: 'food', name: 'Food & Beverage' },
  { id: 'retail', name: 'Retail' },
  { id: 'service', name: 'Service-Based' },
  { id: 'fitness', name: 'Fitness & Health' },
  { id: 'education', name: 'Education' }
];

const franchiseListings = [
  {
    id: 1,
    name: "FoodFrenzy",
    category: "food",
    image: "/api/placeholder/400/300",
    description: "A fast-casual restaurant concept specializing in international fusion cuisine.",
    initialInvestment: "$150,000 - $300,000",
    royaltyFee: "5%",
    requiredNetWorth: "$500,000",
    franchiseFee: "$35,000",
    locations: 245
  },
  {
    id: 2,
    name: "FitLife Gym",
    category: "fitness",
    image: "/api/placeholder/400/300",
    description: "A 24/7 fitness center focusing on personalized training and state-of-the-art equipment.",
    initialInvestment: "$250,000 - $500,000",
    royaltyFee: "6%",
    requiredNetWorth: "$750,000",
    franchiseFee: "$45,000",
    locations: 178
  },
  {
    id: 3,
    name: "QuickClean",
    category: "service",
    image: "/api/placeholder/400/300",
    description: "Mobile cleaning service specializing in homes, offices, and commercial spaces.",
    initialInvestment: "$50,000 - $120,000",
    royaltyFee: "7%",
    requiredNetWorth: "$250,000",
    franchiseFee: "$25,000",
    locations: 312
  },
  {
    id: 4,
    name: "RetailRevolution",
    category: "retail",
    image: "/api/placeholder/400/300",
    description: "Boutique retail concept offering curated fashion and lifestyle products.",
    initialInvestment: "$180,000 - $350,000",
    royaltyFee: "5.5%",
    requiredNetWorth: "$400,000",
    franchiseFee: "$30,000",
    locations: 95
  },
  {
    id: 5,
    name: "BrainBoost",
    category: "education",
    image: "/api/placeholder/400/300",
    description: "Tutoring center providing personalized education for K-12 students.",
    initialInvestment: "$120,000 - $220,000",
    royaltyFee: "8%",
    requiredNetWorth: "$300,000",
    franchiseFee: "$40,000",
    locations: 67
  },
  {
    id: 6,
    name: "PizzaPerfect",
    category: "food",
    image: "/api/placeholder/400/300",
    description: "Gourmet pizza chain focusing on fresh ingredients and artisanal recipes.",
    initialInvestment: "$200,000 - $350,000",
    royaltyFee: "6%",
    requiredNetWorth: "$450,000",
    franchiseFee: "$35,000",
    locations: 124
  }
];

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

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFranchise, setSelectedFranchise] = useState(null);

  const filteredFranchises = activeCategory === 'all' 
    ? franchiseListings 
    : franchiseListings.filter(franchise => franchise.category === activeCategory);

  const handleFranchiseClick = (franchise) => {
    setSelectedFranchise(franchise);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => {
    setSelectedFranchise(null);
  };

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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Franchise Opportunities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our curated selection of premium franchise opportunities across various industries.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {franchiseCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Listings */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available Franchises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFranchises.map((franchise, index) => (
              <motion.div
                key={franchise.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index % 3), duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={franchise.image}
                  alt={franchise.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{franchise.name}</h3>
                  <p className="text-gray-600 mb-4">{franchise.description}</p>
                  <div className="mb-4">
                    <p><span className="font-semibold">Investment:</span> {franchise.initialInvestment}</p>
                    <p><span className="font-semibold">Locations:</span> {franchise.locations}+</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full text-center"
                    onClick={() => handleFranchiseClick(franchise)}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Detail Modal */}
      {selectedFranchise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-screen overflow-y-auto"
          >
            <div className="relative">
              <img
                src={selectedFranchise.image}
                alt={selectedFranchise.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{selectedFranchise.name}</h2>
              <p className="mb-6 text-lg">{selectedFranchise.description}</p>
              
              <h3 className="text-xl font-bold mb-3">Investment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold">Initial Investment</p>
                  <p className="text-lg">{selectedFranchise.initialInvestment}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold">Franchise Fee</p>
                  <p className="text-lg">{selectedFranchise.franchiseFee}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold">Royalty Fee</p>
                  <p className="text-lg">{selectedFranchise.royaltyFee}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold">Required Net Worth</p>
                  <p className="text-lg">{selectedFranchise.requiredNetWorth}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Support & Training</h3>
              <ul className="list-disc pl-5 mb-6">
                <li>Comprehensive initial training program (2-4 weeks)</li>
                <li>Site selection and build-out assistance</li>
                <li>Marketing and grand opening support</li>
                <li>Ongoing operational guidance</li>
                <li>Access to proprietary systems and technology</li>
              </ul>
              
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded font-medium text-lg"
                >
                  Request Information
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Franchise Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Franchise Consulting</h3>
              <p className="text-gray-600">
                Our experts help you find the perfect franchise match based on your goals, budget, and preferences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z" />
                  <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Business Planning</h3>
              <p className="text-gray-600">
                We assist with developing comprehensive business plans and revenue projections for your franchise.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Financing Solutions</h3>
              <p className="text-gray-600">
                Connect with our lending partners to explore financing options for your franchise investment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Receive continuous guidance and support even after your franchise location is up and running.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Become a Franchise Owner?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards business ownership today. Our franchise experts are ready to guide you through the process.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium text-lg"
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;