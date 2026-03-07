import { ReactIcon, ViteIcon, TailwindIcon, JavaScriptIcon, NodeIcon, TypeScriptIcon, ExpressIcon, PrismaIcon, PythonIcon, MySQLIcon, DockerIcon, GitIcon } from './TechIcons';

const skills = [
  { name: 'JavaScript', icon: JavaScriptIcon, color: 'text-yellow-400', category: 'Lenguajes' },
  { name: 'TypeScript', icon: TypeScriptIcon, color: 'text-blue-500', category: 'Lenguajes' },
  { name: 'Python', icon: PythonIcon, color: 'text-yellow-300', category: 'Lenguajes' },
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
                <div
                  key={skill.name}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center gap-3 group hover:-translate-y-1"
                >
                  <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={48} />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
