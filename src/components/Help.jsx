// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const pageVariants = {
//   initial: {
//     opacity: 0,
//     y: 20
//   },
//   in: {
//     opacity: 1,
//     y: 0
//   },
//   exit: {
//     opacity: 0,
//     y: -20
//   }
// };

// const faqItems = [
//   {
//     question: "How do I find the right franchise opportunity?",
//     answer: "Finding the right franchise starts with self-assessment. Consider your budget, skills, interests, and goals. Our franchising consultants can help match you with opportunities that align with these factors. We recommend scheduling a consultation where we can discuss your specific needs and preferences."
//   },
//   {
//     question: "What's the typical investment range for a franchise?",
//     answer: "Franchise investments vary widely depending on the industry and brand. They can range from $50,000 for home-based or mobile businesses to over $1 million for large restaurant or hospitality concepts. The investment typically includes the franchise fee, equipment, inventory, leasehold improvements, and working capital."
//   },
//   {
//     question: "How long does it take to open a franchise?",
//     answer: "The timeline varies by concept, but most franchises take 6-12 months from signing the franchise agreement to opening day. This includes time for site selection, lease negotiation, build-out, training, hiring, and other pre-opening activities."
//   },
//   {
//     question: "What ongoing fees do franchisees pay?",
//     answer: "Most franchises require ongoing royalty fees (typically 4-8% of gross sales) and marketing or advertising fees (1-3% of gross sales). Some may have additional fees for technology platforms, support services, or inventory purchasing."
//   },
//   {
//     question: "Do I need experience in the industry to buy a franchise?",
//     answer: "Not necessarily. Many franchisors provide comprehensive training and support systems designed to help franchisees succeed regardless of prior industry experience. However, business management skills, customer service orientation, and willingness to follow systems are important qualities."
//   },
//   {
//     question: "Can FranchiseHub help with financing?",
//     answer: "Yes, we work with lending partners who specialize in franchise financing. Options may include SBA loans, conventional bank loans, equipment leasing, 401(k) rollovers (ROBS), and other financing solutions. We can connect you with financial experts to explore your best options."
//   }
// ];

// const Help = () => {
//   const [activeAccordion, setActiveAccordion] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     investmentLevel: '',
//     interests: '',
//     message: ''
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const toggleAccordion = (index) => {
//     setActiveAccordion(activeAccordion === index ? null : index);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setFormSubmitted(true);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       investmentLevel: '',
//       interests: '',
//       message: ''
//     });
//     setTimeout(() => setFormSubmitted(