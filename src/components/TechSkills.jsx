import { ReactIcon, ViteIcon, TailwindIcon, JavaScriptIcon, NodeIcon, TypeScriptIcon, ExpressIcon, PrismaIcon, PHPIcon, MySQLIcon, DockerIcon, GitIcon } from './TechIcons';
import { motion as Motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', icon: JavaScriptIcon, color: 'text-yellow-400', category: 'Lenguajes' },
  { name: 'TypeScript', icon: TypeScriptIcon, color: 'text-blue-500', category: 'Lenguajes' },
  { name: 'PHP', icon: PHPIcon, color: 'text-indigo-400', category: 'Lenguajes' },
  { name: 'Node.js', icon: NodeIcon, color: 'text-green-500', category: 'Backend' },
  { name: 'Express', icon: ExpressIcon, color: 'text-gray-600', category: 'Backend' },
  { name: 'Prisma', icon: PrismaIcon, color: 'text-indigo-500', category: 'Backend' },
  { name: 'MySQL', icon: MySQLIcon, color: 'text-orange-400', category: 'Base de datos' },
  { name: 'React', icon: ReactIcon, color: 'text-blue-400', category: 'Frontend' },
  { name: 'Tailwind', icon: TailwindIcon, color: 'text-cyan-400', category: 'Frontend' },
  { name: 'Vite', icon: ViteIcon, color: 'text-purple-400', category: 'Herramientas' },
  { name: 'Docker', icon: DockerIcon, color: 'text-blue-400', category: 'Herramientas' },
  { name: 'Git', icon: GitIcon, color: 'text-orange-500', category: 'Herramientas' },
];

export default function TechSkills() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Tecnologías
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            Herramientas y tecnologías con las que trabajo
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Motion.div
                  key={skill.name}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-900/10 transition-shadow duration-300 flex flex-col items-center gap-3 group"
                >
                  <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`${skill.color} group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                    <IconComponent size={48} />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    {skill.name}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.category}
                  </span>
                </Motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
