import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-blue-400 text-4xl font-mono"
        >
          LOADING...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;