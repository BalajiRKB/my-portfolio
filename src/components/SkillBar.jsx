import { motion } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-blue-300">{skill.name}</span>
        <span className="font-mono text-blue-400">Level {skill.level}</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ delay: index * 0.1, duration: 1 }}
          className="h-full bg-blue-400 rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;