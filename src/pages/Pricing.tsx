import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star,
  CreditCard,
  Shield,
  Smartphone,
  Globe,
  Users,
  Building
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Personal',
      icon: Users,
      description: 'Perfect for individuals and families',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Free checking account',
        'Mobile banking app',
        'Online bill pay',
        'ATM fee reimbursement (up to $10/month)',
        'Email support',
        'Basic financial tools'
      ],
      notIncluded: [
        'Premium investment options',
        'Priority customer support',
        'Advanced analytics'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Premium',
      icon: Star,
      description: 'Enhanced features for active users',
      monthlyPrice: 15,
      annualPrice: 150,
      features: [
        'Everything in Personal',
        'Premium investment options',
        'Priority customer support',
        'Advanced financial analytics',
        'Unlimited ATM fee reimbursement',
        'Travel insurance',
        'Cashback rewards (1.5%)',
        'Financial advisor consultation'
      ],
      notIncluded: [
        'Business banking features',
        'Multi-user access'
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Business',
      icon: Building,
      description: 'Comprehensive solutions for businesses',
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        'Everything in Premium',
        'Business checking accounts',
        'Multi-user access',
        'Advanced reporting',
        'API access',
        'Dedicated account manager',
        'Business credit cards',
        'Payroll services',
        'Invoice management',
        'Tax preparation assistance'
      ],
      notIncluded: [],
      popular: false,
      color: 'from-green-500 to-green-600'
    }
  ];

  const additionalServices = [
    {
      icon: CreditCard,
      title: 'Credit Cards',
      description: 'Premium credit cards with rewards',
      price: 'No annual fee'
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Life, health, and property insurance',
      price: 'From $25/month'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Premium',
      description: 'Advanced mobile banking features',
      price: '$5/month'
    },
    {
      icon: Globe,
      title: 'International Banking',
      description: 'Global transfers and currency exchange',
      price: 'From $10/transfer'
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Choose the plan that fits your needs. All plans include our core banking features 
            with no hidden fees or surprises.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                isAnnual ? 'bg-purple-600' : 'bg-gray-300'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
              >
                Save 17%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: plan.popular 
                  ? "0 25px 50px rgba(147, 51, 234, 0.2)" 
                  : "0 25px 50px rgba(0, 0, 0, 0.1)" 
              }}
              className={`relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col ${
                plan.popular ? 'ring-2 ring-purple-500 md:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                >
                  Most Popular
                </motion.div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                <plan.icon className="text-white" size={32} />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">{plan.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {isAnnual && plan.monthlyPrice > 0 && (
                  <p className="text-sm text-gray-500 mt-1">
                    ${plan.monthlyPrice}/month billed annually
                  </p>
                )}
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </motion.li>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 + (plan.features.length + featureIndex) * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <X className="text-gray-400 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-400 text-sm sm:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 sm:py-4 rounded-xl font-semibold transition-colors mt-auto text-sm sm:text-base ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {plan.monthlyPrice === 0 ? 'Get Started Free' : 'Choose Plan'}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Additional Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Enhance your banking experience with our optional premium services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <p className="text-teal-600 font-semibold text-sm sm:text-base">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 sm:p-12"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                Can I switch plans anytime?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                Are there any hidden fees?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                No hidden fees. All costs are clearly outlined in your plan. We believe in transparent pricing.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                Is there a free trial?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our Personal plan is completely free. Premium and Business plans offer 30-day free trials.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We accept all major credit cards, bank transfers, and digital payment methods.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;