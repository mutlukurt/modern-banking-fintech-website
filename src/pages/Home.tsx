import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Download, 
  Smartphone, 
  TrendingUp, 
  ChevronDown, 
  ArrowRight,
  Home,
  Shield,
  Globe,
  Building,
  Calculator,
  Calendar,
  HelpCircle,
  Mail,
  Check
} from 'lucide-react';

interface NewsletterForm {
  email: string;
}

const HomePage: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterForm>();

  const onSubmit = (data: NewsletterForm) => {
    console.log('Newsletter subscription:', data);
    setIsSubscribed(true);
    reset();
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const services = [
    { icon: Calendar, title: 'Booking', description: 'Schedule appointments and manage bookings' },
    { icon: Home, title: 'Home Loan', description: 'Competitive rates for your dream home' },
    { icon: Shield, title: 'Insurance', description: 'Protect what matters most' },
    { icon: Globe, title: 'International', description: 'Global banking solutions' },
    { icon: Building, title: 'Business', description: 'Solutions for growing businesses' },
    { icon: Calculator, title: 'Rates & Calculators', description: 'Calculate loans and savings' }
  ];

  return (
    <div className="overflow-x-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 sm:p-6 lg:p-4 max-w-7xl mx-auto"
      >
        
        {/* Hero Section - Top Left */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <motion.h1 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                An easier<br />
                Responsible<br />
                Banking
              </motion.h1>
              <motion.p 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed"
              >
                Open a bank account instantly and get access to the best financial tools and resources to help you grow your money and build your future.
              </motion.p>
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(20, 184, 166, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 text-sm sm:text-base"
                >
                  <Download size={20} />
                  Download App
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, borderColor: "#6B7280" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 text-sm sm:text-base"
                >
                  <Smartphone size={20} />
                  iOS Android
                </motion.button>
              </motion.div>
            </div>
            
            {/* Phone Mockup with Animation */}
            <motion.div 
              initial={{ x: 100, opacity: 0, rotateY: 45 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <motion.div 
                whileHover={{ rotateY: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-48 sm:w-56 lg:w-64 h-72 sm:h-84 lg:h-96 bg-black rounded-3xl p-2 shadow-2xl mx-auto lg:mx-0"
              >
                <div className="w-full h-full bg-white rounded-2xl relative overflow-hidden">
                  {/* Phone Content */}
                  <div className="p-3 sm:p-4">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs sm:text-sm text-gray-500">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Cards with Animation */}
                    <div className="space-y-4">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl p-3 sm:p-4 text-white"
                      >
                        <div className="text-xs sm:text-sm mb-1">Balance</div>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.3, duration: 0.5 }}
                          className="text-lg sm:text-2xl font-bold"
                        >
                          € 56,100
                        </motion.div>
                      </motion.div>
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl p-3 sm:p-4 text-white"
                      >
                        <div className="text-xs sm:text-sm mb-1">Savings</div>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5, duration: 0.5 }}
                          className="text-lg sm:text-2xl font-bold"
                        >
                          € 14,851
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Transaction List */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.7, duration: 0.5 }}
                      className="mt-3 sm:mt-4 space-y-2"
                    >
                      <div className="flex justify-between items-center p-1 sm:p-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-purple-100 rounded-full"></div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium">Netflix</div>
                            <div className="text-xs text-gray-500">Today</div>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm font-bold">-€12.99</div>
                      </div>
                      <div className="flex justify-between items-center p-1 sm:p-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-100 rounded-full"></div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium">Salary</div>
                            <div className="text-xs text-gray-500">Yesterday</div>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-green-600">+€2,450</div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-2 sm:p-4">
                    <div className="flex justify-around">
                      <div className="w-4 sm:w-6 h-4 sm:h-6 bg-purple-600 rounded-full"></div>
                      <div className="w-4 sm:w-6 h-4 sm:h-6 bg-gray-300 rounded-full"></div>
                      <div className="w-4 sm:w-6 h-4 sm:h-6 bg-gray-300 rounded-full"></div>
                      <div className="w-4 sm:w-6 h-4 sm:h-6 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Revenue Chart - Top Center */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-3 bg-white rounded-2xl p-4 sm:p-6 shadow-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-900">€ 4,620</div>
            </motion.div>
            <div className="flex items-center gap-1 bg-gray-50 rounded-lg px-2 sm:px-3 py-1">
              <span className="text-sm text-gray-600">6 Month</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          
          {/* Animated Chart */}
          <div className="relative h-24 sm:h-32">
            <svg className="w-full h-full" viewBox="0 0 200 100">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                d="M 10 80 Q 30 60, 50 65 T 90 45 T 130 35 T 170 20 T 190 15"
                fill="none"
                stroke="#14B8A6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                d="M 10 80 Q 30 60, 50 65 T 90 45 T 130 35 T 170 20 T 190 15 L 190 100 L 10 100 Z"
                fill="url(#chartGradient)"
              />
            </svg>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <TrendingUp className="absolute top-2 right-2 text-teal-500" size={20} />
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid - Top Right */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-3 bg-white rounded-2xl p-4 sm:p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Our Services</h3>
            <ArrowRight className="text-gray-400" size={20} />
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(107, 58, 160, 0.1)",
                  borderColor: "#C4B5FD"
                }}
                className="p-2 sm:p-3 rounded-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 cursor-pointer"
              >
                <service.icon className="text-purple-600 mb-2" size={20} />
                <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">{service.title}</div>
                <div className="text-xs text-gray-500 hidden sm:block">{service.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics Section - Bottom Left */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl p-6 sm:p-8 text-white shadow-lg"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <motion.h3 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl sm:text-2xl font-bold mb-2"
              >
                Helping Australia Grow
              </motion.h3>
              <motion.p 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-purple-100 text-sm sm:text-base"
              >
                We're proud to support millions of Australians in achieving their financial goals through innovative banking solutions.
              </motion.p>
            </div>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <TrendingUp className="text-purple-200" size={32} />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {[
              { value: '1.6m', label: 'Everyday Australians' },
              { value: '70k', label: 'Active Business' },
              { value: '24', label: 'Offices from Office' },
              { value: '5.0', label: 'Year History' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
                  className="text-2xl sm:text-3xl font-bold mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-purple-100 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Animated Chart Illustration */}
          <div className="relative h-16 sm:h-20 mb-4 sm:mb-6">
            <svg className="w-full h-full opacity-30" viewBox="0 0 300 80">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
                d="M 20 60 Q 60 40, 100 45 T 180 25 T 260 15 T 280 10"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <motion.circle 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.5, duration: 0.5 }}
                cx="280" 
                cy="10" 
                r="4" 
                fill="white" 
              />
            </svg>
          </div>
          
          <motion.button 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(20, 184, 166, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base"
          >
            View Facts & Figures
          </motion.button>
        </motion.div>

        {/* CTA Section - Bottom Center */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 bg-gradient-to-br from-purple-800 to-purple-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg"
        >
          <div className="flex items-start justify-between mb-6">
            <motion.h3 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl sm:text-2xl font-bold"
            >
              What you should know
            </motion.h3>
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="bg-teal-500 rounded-full p-3"
            >
              <HelpCircle size={20} />
            </motion.div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Important information</h4>
              <ul className="space-y-2 text-sm text-purple-100">
                <li>• Compliance support for home loan applications</li>
                <li>• What's your lending criteria?</li>
                <li>• Online applications</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <h4 className="font-semibold mb-2 text-sm sm:text-base">General banking information</h4>
              <ul className="space-y-2 text-sm text-purple-100">
                <li>• Dispute information</li>
                <li>• Online applications</li>
                <li>• Compliance support</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter Signup - Bottom Right */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <div className="flex-1">
              <motion.h3 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-4"
              >
                Sign up for our newsletter
              </motion.h3>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-gray-600 mb-6 text-sm sm:text-base"
              >
                Stay updated with the latest banking insights, financial tips, and product updates.
              </motion.p>
              
              <motion.form 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 text-sm sm:text-base"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 text-sm sm:text-base"
                >
                  {isSubscribed ? <Check size={18} /> : <Mail size={18} />}
                  {isSubscribed ? 'Subscribed!' : 'Submit'}
                </motion.button>
              </motion.form>
              
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-2"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>
            
            {/* Phone Mockup */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                whileHover={{ rotateY: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-24 sm:w-32 h-36 sm:h-48 bg-black rounded-2xl p-1 shadow-xl mx-auto lg:mx-0"
              >
                <div className="w-full h-full bg-gradient-to-b from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <div className="text-white text-xs text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2, duration: 0.5 }}
                      className="mb-2 text-2xl"
                    >
                      📱
                    </motion.div>
                    <div className="text-xs sm:text-sm">Banking App</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;