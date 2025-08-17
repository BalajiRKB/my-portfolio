import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#about', label: 'ABOUT' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
  };

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-blue-400"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('#home')} 
            className="text-blue-400 font-mono text-xl hover:text-blue-300 transition-colors"
          >
            Balaji R
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className="relative font-mono hover:text-blue-400 transition-colors text-blue-300 group"
              >
                {label}
                <span className="absolute left-0 right-0 h-0.5 bg-blue-400 bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-400 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X /> : <Menu />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation with Enhanced Blur Effect */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Background overlay with strong blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-2xl md:hidden z-30"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu content with its own styling */}
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed inset-0 bg-gray-900/90 backdrop-blur-xl md:hidden pt-20 z-40"
              >
                <div className="flex flex-col items-center space-y-6 p-8">
                  {menuItems.map(({ href, label }, index) => (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full max-w-xs"
                    >
                      <button
                        onClick={() => scrollToSection(href)}
                        className="text-xl font-mono transition-colors block w-full text-center py-4 px-6 rounded-lg
                          bg-gray-800/80 text-blue-300 border border-blue-500/30 hover:bg-blue-900/50 hover:text-blue-200"
                      >
                        {label}
                      </button>
                    </motion.div>
                  ))}
                  
                  {/* Home Link in Mobile Menu */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: menuItems.length * 0.1 }}
                    className="w-full max-w-xs mt-4"
                  >
                    <button
                      onClick={() => scrollToSection('#home')}
                      className="text-xl font-mono transition-colors block w-full text-center py-4 px-6 rounded-lg
                        bg-gray-800/80 text-blue-300 border border-blue-500/30 hover:bg-blue-900/50 hover:text-blue-200"
                    >
                      HOME
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;