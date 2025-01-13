import { motion } from 'framer-motion';

const GlowingBorder = ({ children, className }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg blur-sm"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {children}
    </motion.div>
  );
};

export default GlowingBorder;
