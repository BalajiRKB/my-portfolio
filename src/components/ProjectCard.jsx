import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import GlowingBorder from './GlowingBorder';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative group"
    >
      <GlowingBorder>
      <div className="absolute inset-0 bg-blue-400 rounded-lg blur opacity-0 
                    group-hover:opacity-20 transition-opacity duration-300" />
      <div className="relative border border-blue-400/50 rounded-lg p-6 
                    hover:border-blue-400 transition-colors duration-300">
        <h3 className="text-xl font-mono text-blue-400 mb-2">{project.title}</h3>
        <p className="text-blue-300/80 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-400/10 rounded text-sm text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a
            href={project.demo}
            target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
            </GlowingBorder>
    </motion.div>
  );
};

export default ProjectCard;