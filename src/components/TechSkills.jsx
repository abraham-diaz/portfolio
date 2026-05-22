import { ReactIcon, ViteIcon, TailwindIcon, JavaScriptIcon, NodeIcon, TypeScriptIcon, ExpressIcon, PrismaIcon, PythonIcon, MySQLIcon, DockerIcon, GitIcon } from './TechIcons';
import { motion as Motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { name: 'JavaScript', icon: JavaScriptIcon, color: 'text-yellow-400', category: 'Lenguajes' },
  { name: 'TypeScript', icon: TypeScriptIcon, color: 'text-blue-500', category: 'Lenguajes' },
  { name: 'Python', icon: PythonIcon, color: 'text-yellow-300', category: 'Lenguajes' },
  { name: 'React', icon: ReactIcon, color: 'text-blue-400', category: 'Frontend' },
  { name: 'Tailwind', icon: TailwindIcon, color: 'text-cyan-400', category: 'Frontend' },
  { name: 'Node.js', icon: NodeIcon, color: 'text-green-500', category: 'Backend' },
  { name: 'Express', icon: ExpressIcon, color: 'text-gray-600', category: 'Backend' },
  { name: 'Prisma', icon: PrismaIcon, color: 'text-indigo-500', category: 'Backend' },
  { name: 'MySQL', icon: MySQLIcon, color: 'text-orange-400', category: 'Base de datos' },
  { name: 'Vite', icon: ViteIcon, color: 'text-purple-400', category: 'Herramientas' },
  { name: 'Docker', icon: DockerIcon, color: 'text-blue-400', category: 'Herramientas' },
  { name: 'Git', icon: GitIcon, color: 'text-orange-500', category: 'Herramientas' },
];

const categoryOrder = ['Lenguajes', 'Frontend', 'Backend', 'Base de datos', 'Herramientas'];

const skillsByCategory = categoryOrder.map((cat) => ({
  label: cat,
  skills: skills.filter((s) => s.category === cat),
}));

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
};

export default function TechSkills() {
  const { elementRef: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <Motion.div
            ref={headerRef}
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tecnologías
            </h2>
            <p className="text-gray-600 text-lg">
              Herramientas y tecnologías con las que trabajo
            </p>
          </Motion.div>

          <div className="space-y-10">
            {skillsByCategory.map((group, groupIndex) => (
              <Motion.div
                key={group.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07, delayChildren: groupIndex * 0.03 } },
                }}
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-medium">
                  {group.label}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {group.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <Motion.div
                        key={skill.name}
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                        className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-900/10 transition-shadow duration-300 flex flex-col items-center gap-3 group"
                      >
                        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className={`${skill.color} group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                          <IconComponent size={48} />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                      </Motion.div>
                    );
                  })}
                </div>
              </Motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
