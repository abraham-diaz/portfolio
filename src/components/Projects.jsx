const projects = [
  {
    title: 'GLaDOs',
    description: 'Sistema de gestión de conocimiento personal con IA. Captura texto libre, genera embeddings duales (MiniLM + MPNet) y organiza el conocimiento en conceptos que evolucionan automáticamente según su recurrencia.',
    technologies: ['TypeScript', 'Express', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker'],
    github: 'https://github.com/abraham-diaz/GLaDos',
    image: '/images/glados.png',
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
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Proyectos
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">
          Algunos de mis trabajos recientes
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Área de imagen/logo */}
              <div
                className={`h-48 flex items-center justify-center relative overflow-hidden ${!project.bgColor ? `bg-gradient-to-br ${project.color}` : ''}`}
                style={project.bgColor ? { backgroundColor: project.bgColor } : {}}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-white text-center">
                    <span className="text-5xl font-bold opacity-80">
                      {project.title.charAt(0)}
                    </span>
                    <p className="text-sm opacity-60 mt-2">Añadir imagen</p>
                  </div>
                )}

                {/* Overlay con enlaces */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full hover:bg-white/40 transition-colors flex items-center gap-1.5"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      <span className="text-white text-xs font-medium">{project.linkLabel}</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
