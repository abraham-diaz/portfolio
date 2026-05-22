import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { useScrollDetection, useScrollDirection, scrollToSection as smoothScroll } from './script';
import { useLenisContext } from '../contexts/LenisContext';
import { useDarkMode } from '../hooks/useDarkMode';

const navItems = [
  { name: 'Inicio', id: 'hero' },
  { name: 'Skills', id: 'skills' },
  { name: 'Proyectos', id: 'projects' },
  { name: 'Contacto', id: 'contact' },
];

export default function Header() {
  const lenis = useLenisContext();
  const isScrolled = useScrollDetection(lenis);
  const isVisible = useScrollDirection(lenis);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useDarkMode();

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    smoothScroll(sectionId, () => setIsMobileMenuOpen(false), lenis);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.5, 0.8],
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'py-3' : 'py-6'}`}
    >
      <div className="container mx-auto px-4">
        <div className={`relative flex items-center justify-between rounded-full transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg shadow-gray-900/5 backdrop-blur-xl px-4 py-2'
            : ''
        }`}>
          {/* Logo */}
          <a href="#hero" onClick={() => handleNavigation('hero')} className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Abraham Díaz"
              className={`w-auto transition-all duration-500 dark:invert ${isScrolled ? 'h-10' : 'h-24'}`}
            />
          </a>

          {/* Navegación Desktop */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-lg shadow-gray-900/20'
                    : isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow'
                    : 'text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Derecha: toggle dark mode + botón móvil */}
          <div className="flex items-center gap-2">
            {/* Toggle dark/light */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Cambiar tema"
              className={`p-2 rounded-full transition-all duration-300 overflow-hidden ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <Motion.span
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="block"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </Motion.span>
              </AnimatePresence>
            </button>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-900 dark:text-gray-100' : 'text-black dark:text-white'
              }`}
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden mt-4 space-y-2 rounded-2xl p-2 ${
            isScrolled
              ? 'bg-gray-100 dark:bg-gray-800'
              : 'bg-white/20 dark:bg-gray-900/40 backdrop-blur-sm'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-lg'
                    : isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                    : 'text-black dark:text-white hover:bg-white/20'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
