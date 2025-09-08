import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Shield, 
  Globe, 
  Building, 
  Calculator, 
  Calendar,
  CreditCard,
  PiggyBank,
  TrendingUp,
  Users,
  ArrowRight,
  Check
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Home Loans',
      description: 'Competitive rates and flexible terms for your dream home',
      features: ['Low interest rates', 'Quick approval', 'Flexible repayment', 'Expert guidance'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Comprehensive protection for you and your family',
      features: ['Life insurance', 'Health coverage', 'Property protection', '24/7 support'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'International Banking',
      description: 'Global banking solutions for international transactions',
      features: ['Multi-currency accounts', 'International transfers', 'Foreign exchange', 'Global ATM access'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Building,
      title: 'Business Banking',
      description: 'Tailored solutions for growing businesses',
      features: ['Business accounts', 'Commercial loans', 'Merchant services', 'Cash management'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CreditCard,
      title: 'Credit Cards',
      description: 'Flexible credit solutions with rewards and benefits',
      features: ['Cashback rewards', 'Travel benefits', 'Purchase protection', 'Contactless payments'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: PiggyBank,
      title: 'Savings & Investment',
      description: 'Grow your wealth with our investment products',
      features: ['High-yield savings', 'Investment portfolios', 'Retirement planning', 'Financial advice'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive banking solutions designed to meet all your financial needs. 
            From personal banking to business solutions, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" 
              }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="text-teal-500" size={20} />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 mt-auto text-sm sm:text-base"
              >
                Learn More
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-3xl p-8 sm:p-12 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8">
              Join millions of satisfied customers who trust us with their financial future. 
              Open your account today and experience modern banking.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                Open Account
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors text-sm sm:text-base"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;