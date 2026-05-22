import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollDetection, useScrollDirection, scrollToSection as smoothScroll } from './script';
import { useLenisContext } from '../contexts/LenisContext';

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
        <div className={`flex items-center justify-between gap-4 rounded-full transition-all duration-500 ${
          isScrolled ? 'bg-white/80 shadow-lg shadow-gray-900/5 backdrop-blur-xl px-4 py-2' : ''
        }`}>
          {/* Logo */}
          <a href="#hero" onClick={() => handleNavigation('hero')} className="flex-shrink-0">
            <img src="/images/logo.png" alt="Abraham Díaz" className={`w-auto transition-all duration-500 ${isScrolled ? 'h-12' : 'h-16'}`} />
          </a>

          {/* Navegación Desktop - Estilo Pill Centrado */}
          <nav className={'hidden md:flex bg-white/20 backdrop-blur-sm gap-2 p-2 rounded-full'}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-white hover:shadow'
                    : 'text-black hover:bg-white/20'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Spacer para mantener la nav centrada */}
          <div className="w-10 flex-shrink-0 hidden md:block"></div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-black'
            }`}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden mt-4 space-y-2 rounded-2xl p-2 ${
            isScrolled ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-white'
                    : 'text-black hover:bg-white/20'
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
