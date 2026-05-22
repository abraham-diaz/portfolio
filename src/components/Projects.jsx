import { motion as Motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'GLaDOS',
    description: 'Sistema de gestión de conocimiento con RAG y embeddings duales (MiniLM + MPNet). Los conceptos auto-evolucionan según recurrencia temporal usando búsqueda vectorial con pgvector. Arquitectura de microservicios con Express, FastAPI, PostgreSQL 16 + pgvector, y PWA con JWT.',
    technologies: ['TypeScript', 'Express', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker'],
    github: 'https://github.com/abraham-diaz/GLaDos',
    image: '/images/glados.svg',
    color: 'from-amber-400 to-orange-600',
  },
  {
    title: 'devstarter-cli',
    description: 'CLI publicada en npm que automatiza el scaffolding de proyectos con templates profesionales. Soporta frontend, backend y monorepo con detección automática de package manager.',
    technologies: ['TypeScript', 'Node.js', 'Vitest', 'npm'],
    github: 'https://github.com/abraham-diaz/devstarter-cli',
    link: 'https://www.npmjs.com/package/devstarter-tool',
    linkLabel: 'npm',
    image: '/images/devstarter.svg',
    color: 'from-green-400 to-emerald-600',
  },
  {
    title: 'Nexum',
    description: 'Aplicación full-stack de gestión de proyectos personal tipo Notion. Combina bases de datos con vistas tabla/kanban, documentos rich-text con Tiptap y proyectos jerárquicos anidados.',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    github: 'https://github.com/abraham-diaz/nexum',
    image: '/images/nexum.png',
    color: 'from-gray-900 to-black',
  },
  {
    title: 'DevUtils Manager',
    description: 'Extensión para VS Code que permite guardar, organizar e insertar fragmentos de código reutilizables.',
    technologies: ['TypeScript', 'VS Code API', 'Webpack'],
    github: 'https://github.com/abraham-diaz/devutils-manager',
    link: 'https://marketplace.visualstudio.com/items?itemName=abrahamdiazdev.devutils-manager',
    linkLabel: 'VS Marketplace',
    image: '/images/devutils.svg',
    color: 'from-blue-500 to-blue-700',
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { elementRef: headerRef, isInView: headerInView } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  });

  // Rastrear el progreso de scroll del contenedor completo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Detectar reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <div className="pt-20 pb-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <Motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Proyectos
          </h2>
          <p className="text-center text-gray-600 text-lg">
            Algunos de mis trabajos recientes
          </p>
        </Motion.div>

        {/* Contenedor de Cards Apiladas - Todas en el mismo punto */}
        <div
          ref={containerRef}
          className="relative w-full"
          style={{
            // Más recorrido para que el apilado avance de forma suave
            height: `${projects.length * 70}vh`
          }}
        >
          {/* Wrapper sticky que mantiene las cards en el viewport */}
          <div className="sticky top-0 h-screen flex items-center justify-center" style={{ marginBottom: 0 }}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                totalCards={projects.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
