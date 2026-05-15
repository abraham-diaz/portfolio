import { useEffect, useRef, useState } from 'react';
import { useLenisContext } from '../contexts/LenisContext';

/**
 * Hook para detectar cuando un elemento entra al viewport y calcular su scroll progress
 * @param {Object} options - Opciones de configuración
 * @param {number} options.threshold - Porcentaje del elemento que debe ser visible (0-1)
 * @param {boolean} options.triggerOnce - Si true, la animación solo se ejecuta una vez
 * @returns {Object} { elementRef, isInView, scrollProgress }
 */
export function useScrollAnimation({ threshold = 0.1, triggerOnce = true } = {}) {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const hasAnimated = useRef(false);
  const lenis = useLenisContext();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // IntersectionObserver para detectar cuando el elemento entra al viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce && hasAnimated.current) return;

        if (entry.isIntersecting) {
          setIsInView(true);
          hasAnimated.current = true;
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    // Calcular scroll progress para parallax effect
    const calculateScrollProgress = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calcular progress (0 cuando está fuera del viewport, 1 cuando está completamente visible)
      const start = windowHeight;
      const end = -elementHeight;
      const distance = start - end;
      const progress = Math.max(0, Math.min(1, (start - elementTop) / distance));

      setScrollProgress(progress);
    };

    // Usar eventos de Lenis si está disponible, sino usar window scroll
    if (lenis) {
      lenis.on('scroll', calculateScrollProgress);
    } else {
      window.addEventListener('scroll', calculateScrollProgress, { passive: true });
      calculateScrollProgress(); // Calcular inicialmente
    }

    return () => {
      observer.disconnect();
      if (lenis) {
        lenis.off('scroll', calculateScrollProgress);
      } else {
        window.removeEventListener('scroll', calculateScrollProgress);
      }
    };
  }, [threshold, triggerOnce, lenis]);

  return { elementRef, isInView, scrollProgress };
}
