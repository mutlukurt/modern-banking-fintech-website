import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Home, 
  Shield, 
  Globe, 
  Building, 
  Calculator, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">Audisng</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-600 hover:text-purple-600 transition-colors relative ${
                    location.pathname === item.path ? 'text-purple-600' : ''
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-gray-600 hover:text-purple-600 transition-colors">
                Login
              </button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-xl font-semibold transition-colors"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={{
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4 border-t border-gray-100 mt-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: isMobileMenuOpen ? 0 : -20,
                    opacity: isMobileMenuOpen ? 1 : 0
                  }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors ${
                      location.pathname === item.path ? 'text-purple-600 bg-purple-50' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <div className="px-4 pt-4 space-y-3 border-t border-gray-100">
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: isMobileMenuOpen ? 0 : -20,
                    opacity: isMobileMenuOpen ? 1 : 0
                  }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Login
                </motion.button>
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: isMobileMenuOpen ? 0 : -20,
                    opacity: isMobileMenuOpen ? 1 : 0
                  }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="block w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-xl font-semibold transition-colors text-center"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <span className="text-xl font-bold">Audisng</span>
              </div>
              <p className="text-gray-400 mb-6">
                Modern banking solutions for the digital age. Secure, fast, and reliable financial services.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <Facebook size={18} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <Twitter size={18} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <Instagram size={18} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <Linkedin size={18} />
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Personal Banking</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Banking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home Loans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Insurance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investment</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-purple-600" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-purple-600" />
                  <span className="text-gray-400">info@audisng.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-purple-600" />
                  <span className="text-gray-400">123 Banking St, Finance City, FC 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Mutlu Kurt. Licensed under MIT License. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;