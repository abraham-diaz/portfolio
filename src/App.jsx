import { useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import Loading from './components/Loadin.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TechSkills from './components/TechSkills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

// Lenis smooth scroll
import { useLenis } from './hooks/useLenis';
import { LenisContext } from './contexts/LenisContext';

// COLOR GLOBAL DEL PORTFOLIO
// Para gradiente, usa: 'linear-gradient(to bottom right, #ColorInicial, #ColorFinal)'
// Para color sólido, usa: '#CodigoColor'
const BACKGROUND_GLOBAL = 'linear-gradient(to bottom right, #ffffff, #f5f5f5)';

function App() {
  const [loading, setLoading] = useState(true);
  const lenis = useLenis();

  return (
    <>
      {/* Pantalla de carga inicial */}
      <AnimatePresence>
        {loading && (
          <Motion.div key="loading" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Loading onLoadingComplete={() => setLoading(false)} />
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal del portfolio */}
      {!loading && (
        <LenisContext.Provider value={lenis}>
          <div className="min-h-screen" style={{ background: BACKGROUND_GLOBAL }}>
            {/* Header fijo con navegación */}
            <Header />

            {/* Sección Hero - Presentación principal */}
            <section id="hero">
              <Hero />
            </section>

            {/* Sección Skills - Tecnologías */}
            <section id="skills">
              <TechSkills />
            </section>

            {/* Sección Projects - Proyectos realizados */}
            <section id="projects">
              <Projects />
            </section>
            {/* Footer */}
            <Footer />
          </div>
        </LenisContext.Provider>
      )}
    </>
  );
}

export default App;