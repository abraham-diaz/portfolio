import { ArrowUpRight, FileText, Github, Linkedin, Sparkles } from 'lucide-react';

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/abraham-diaz',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abraham-diaz-ahijon',
    icon: Linkedin,
  },
  {
    label: 'CV',
    href: '/CV-Abraham.pdf',
    icon: FileText,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <Sparkles size={16} className="text-cyan-300" />
              Disponible para proyectos backend, tooling e IA aplicada
            </div>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Construimos algo interesante?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
              Me gusta convertir ideas técnicas en productos usables: APIs limpias,
              automatizaciones, extensiones y sistemas con IA que resuelven problemas reales.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group inline-flex w-full items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 md:w-72"
                >
                  <span className="inline-flex items-center gap-3 font-medium">
                    <Icon size={20} className="text-cyan-300" />
                    {link.label}
                  </span>
                  <ArrowUpRight size={18} className="text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>Abraham Díaz Ahijón. Todos los derechos reservados.</p>
          <p>Backend Developer Jr. · JavaScript · TypeScript · APIs REST</p>
        </div>
      </div>
    </footer>
  );
}
