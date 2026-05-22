import { motion as Motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
};

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center px-6 pt-24 md:pt-0">
      <div className="max-w-2xl w-full text-center">

        <Motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Motion.h1
            className="text-5xl md:text-7xl font-black text-gray-900 leading-none tracking-tight"
            variants={itemVariants}
          >
            Hola,<br />
            <span className="text-gray-400">soy </span>Abraham
          </Motion.h1>

          <Motion.div className="flex justify-center" variants={itemVariants}>
            <span className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg text-lg font-mono">
              Full Stack Developer
            </span>
          </Motion.div>

          <Motion.p className="text-gray-600 text-lg leading-relaxed" variants={itemVariants}>
            Desarrollo con <strong>Node.js, TypeScript, React y Python</strong> — desde APIs REST
            y CLIs hasta sistemas con IA. Enfocado en backend, tooling y automatizaciones
            que resuelven problemas reales.
          </Motion.p>

          <Motion.div className="flex gap-4 flex-wrap justify-center" variants={itemVariants}>
            <a
              href="/CV-Abraham.pdf"
              download
              className="px-6 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium"
            >
              Descargar CV
            </a>
          </Motion.div>

          <Motion.div className="pt-4" variants={itemVariants}>
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">Sígueme</p>
            <div className="flex gap-4 justify-center">
              <a href="https://www.linkedin.com/in/abraham-díaz-ahijón" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/abraham-diaz" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </Motion.div>
        </Motion.div>

      </div>

      {/* Scroll indicator */}
      <Motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
        <Motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </Motion.div>
      </Motion.div>
    </div>
  );
}
