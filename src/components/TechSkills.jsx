import { ReactIcon, ViteIcon, TailwindIcon, JavaScriptIcon, NodeIcon, TypeScriptIcon, ExpressIcon, PrismaIcon, PythonIcon, MySQLIcon, DockerIcon, GitIcon, PostgreSQLIcon } from './TechIcons';
import { motion as Motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { name: 'JavaScript', icon: JavaScriptIcon, category: 'Lenguajes' },
  { name: 'TypeScript', icon: TypeScriptIcon, category: 'Lenguajes' },
  { name: 'Python',     icon: PythonIcon,     category: 'Lenguajes' },
  { name: 'React',      icon: ReactIcon,      category: 'Frontend' },
  { name: 'Tailwind',   icon: TailwindIcon,   category: 'Frontend' },
  { name: 'Node.js',    icon: NodeIcon,       category: 'Backend' },
  { name: 'Express',    icon: ExpressIcon,    category: 'Backend' },
  { name: 'Prisma',     icon: PrismaIcon,     category: 'Backend' },
  { name: 'PostgreSQL', icon: PostgreSQLIcon, category: 'Base de datos' },
  { name: 'MySQL',      icon: MySQLIcon,      category: 'Base de datos' },
  { name: 'Vite',       icon: ViteIcon,       category: 'Herramientas' },
  { name: 'Docker',     icon: DockerIcon,     category: 'Herramientas' },
  { name: 'Git',        icon: GitIcon,        category: 'Herramientas' },
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

const columnVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] } },
};

export default function TechSkills() {
  const { elementRef: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <Motion.div
            ref={headerRef}
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tecnologías
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Herramientas y tecnologías con las que trabajo
            </p>
          </Motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skillsByCategory.map((group, groupIndex) => (
              <Motion.div
                key={group.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ ...columnVariants, visible: { ...columnVariants.visible, transition: { staggerChildren: 0.07, delayChildren: groupIndex * 0.05 } } }}
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-medium">
                  {group.label}
                </p>
                <div className="flex flex-col gap-2">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <Motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                        className="bg-white dark:bg-gray-800 rounded-xl px-3 py-2.5 shadow-sm hover:shadow-md dark:shadow-gray-900/50 transition-shadow duration-200 flex items-center gap-3 group cursor-default"
                      >
                        <span className="text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-200 shrink-0">
                          <Icon size={40} />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium text-sm transition-colors duration-200">
                          {skill.name}
                        </span>
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
