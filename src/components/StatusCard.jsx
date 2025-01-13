import { motion } from 'framer-motion';

const StatusCard = ({ title, value, delay = 0, level }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="bg-gray-800/50 border border-blue-400/50 rounded-lg p-4"
    >
      <h3 className="text-blue-300 font-mono text-sm mb-1">{title}</h3>
      <p className="text-blue-400 font-mono text-2xl mb-2">{value}</p>
      <div className="h-2 bg-gray-700 rounded overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ delay, duration: 1 }}
          className="h-full bg-blue-500 rounded"
        />
      </div>
    </motion.div>
  );
};

export default StatusCard;
