import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/about', label: 'ABOUT' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/skills', label: 'SKILLS' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-blue-400"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-blue-400 font-mono text-xl">
            Balaji's Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative font-mono hover:text-blue-400 transition-colors 
                  ${isActive ? 'text-blue-400' : 'text-blue-300'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 h-0.5 bg-blue-400 bottom-0"
                      />
                    )}
                  </>
                )}
              </NavLink>
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 bg-gray-900/95 md:hidden pt-20"
            >
              <div className="flex flex-col items-center space-y-8 p-8">
                {menuItems.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-mono hover:text-blue-400 transition-colors 
                      ${isActive ? 'text-blue-400' : 'text-blue-300'}`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;