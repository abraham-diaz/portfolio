import { useEffect, useState } from 'react';

// Variable global para rastrear si el scroll es programático
let isProgrammaticScroll = false;
let scrollTimeout: NodeJS.Timeout | null = null;

/**
 * Hook para detectar el scroll y cambiar el estilo del header
 * @param lenis - Instancia opcional de Lenis para usar eventos de Lenis en lugar de window scroll
 */
export function useScrollDetection(lenis?: any) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (data?: any) => {
      const scrollY = lenis ? data?.scroll || 0 : window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    if (lenis) {
      // Usar eventos de Lenis si está disponible
      lenis.on('scroll', handleScroll);
      return () => lenis.off('scroll', handleScroll);
    } else {
      // Fallback a window scroll events
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lenis]);

  return isScrolled;
}

/**
 * Hook para detectar la dirección del scroll y mostrar/ocultar el header
 * @param lenis - Instancia opcional de Lenis para usar eventos de Lenis en lugar de window scroll
 * @returns {boolean} true si el header debe estar visible, false si debe ocultarse
 */
export function useScrollDirection(lenis?: any) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (data?: any) => {
      const currentScrollY = lenis ? data?.scroll || 0 : window.scrollY;

      // Ignorar el scroll si es programático (navegación por botones)
      if (isProgrammaticScroll) {
        // Actualizar lastScrollY para evitar saltos cuando termine el scroll programático
        setLastScrollY(currentScrollY);
        return;
      }

      // Mostrar header si está en el top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Ocultar si hace scroll hacia abajo
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Mostrar si hace scroll hacia arriba
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    if (lenis) {
      // Usar eventos de Lenis si está disponible
      lenis.on('scroll', handleScroll);
      return () => lenis.off('scroll', handleScroll);
    } else {
      // Fallback a window scroll events
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY, lenis]);

  return isVisible;
}

/**
 * Función para navegación suave a las secciones
 * @param sectionId - ID de la sección a la que navegar
 * @param onNavigate - Callback opcional a ejecutar después de navegar
 * @param lenis - Instancia opcional de Lenis para smooth scroll premium
 */
export function scrollToSection(sectionId: string, onNavigate?: () => void, lenis?: any) {
  const element = document.getElementById(sectionId);
  if (element) {
    // Marcar que el scroll es programático
    isProgrammaticScroll = true;

    // Cancelar el timeout anterior si existe
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    const offset = 80; // Altura del header

    if (lenis) {
      // Usar Lenis para smooth scroll premium
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      lenis.scrollTo(offsetPosition, {
        duration: 1.5,
        onComplete: () => {
          isProgrammaticScroll = false;
          scrollTimeout = null;
        }
      });
    } else {
      // Fallback a scroll nativo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Después de que termine el scroll suave (~1.5 segundos), volver a permitir detección
      scrollTimeout = setTimeout(() => {
        isProgrammaticScroll = false;
        scrollTimeout = null;
      }, 1500);
    }
  }

  if (onNavigate) {
    onNavigate();
  }
}
