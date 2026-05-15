import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Hook para inicializar y manejar el lifecycle de Lenis smooth scroll
 * @returns {Lenis | null} Instancia de Lenis o null si no está inicializado
 */
export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Inicializar Lenis con configuración premium
    const lenis = new Lenis({
      duration: 1.5,    // Duración más lenta para efecto dramático
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smooth: true,
      smoothTouch: false,  // Scroll nativo en móvil para mejor UX
      touchMultiplier: 2,
      wheelMultiplier: 1,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Añadir clase al HTML para estilos específicos de Lenis
    document.documentElement.classList.add('lenis');

    // RequestAnimationFrame loop para Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      document.documentElement.classList.remove('lenis');
      lenisRef.current = null;
    };
  }, []);

  return lenisRef.current;
}
