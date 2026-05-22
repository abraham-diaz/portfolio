import { motion as Motion } from 'framer-motion';
import { CARD_CONFIG, useCardAnimations } from '../hooks/useCardConfig';

export default function ProjectCard({ project, index, totalCards, progress }) {
  const { y, scale, opacity, prefersReducedMotion } = useCardAnimations({
    progress,
    index,
    totalCards,
  });

  const isSvg = project.image?.endsWith('.svg');

  return (
    <Motion.div
      style={{
        y,
        scale: prefersReducedMotion ? 1 : scale,
        opacity,
        zIndex: totalCards - index,
      }}
      className="absolute inset-0 flex items-center justify-center px-4"
    >
      <Motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-gray-900/25 dark:shadow-gray-950/50 w-full max-w-7xl transition-shadow duration-300"
      >
        <div className="grid md:grid-cols-2" style={{ height: CARD_CONFIG.cardHeight }}>
          {/* Área de imagen/logo */}
          <div
            className={`relative overflow-hidden flex items-center justify-center ${
              !project.bgColor ? `bg-gradient-to-br ${project.color}` : ''
            }`}
            style={project.bgColor ? { backgroundColor: project.bgColor } : {}}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className={
                  isSvg
                    ? 'w-full h-full object-contain'
                    : 'w-full h-full object-cover'
                }
              />
            ) : (
              <div className="text-white text-center w-full h-full flex flex-col items-center justify-center">
                <span className="text-8xl font-bold opacity-80">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}

            {/* Overlay con enlaces */}
            <div className="absolute top-6 right-6 flex gap-3 z-20">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-full hover:bg-white/40 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <span className="text-white text-sm font-semibold">{project.linkLabel}</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Contenido */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-gray-800">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-6 leading-relaxed line-clamp-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Motion.div>
    </Motion.div>
  );
}
