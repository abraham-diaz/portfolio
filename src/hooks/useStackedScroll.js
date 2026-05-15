import { useEffect, useRef, useState } from 'react';
import { useLenisContext } from '../contexts/LenisContext';

/**
 * Hook especializado para el efecto de stacked cards
 * Calcula el progreso de scroll de cada card para crear el efecto de apilamiento
 *
 * @param {number} index - Índice de la card en el stack
 * @param {number} totalCards - Total de cards en el stack
 * @returns {Object} { cardRef, scale, opacity, y }
 */
export function useStackedScroll(index, totalCards) {
  const cardRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    scale: 1,
    opacity: 1,
    y: 0,
    progress: 0
  });
  const lenis = useLenisContext();

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const calculateTransforms = () => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardTop = rect.top;
      const cardHeight = rect.height;

      // Punto donde la card empieza a transformarse (cuando está cerca del top)
      const transformStart = windowHeight * 0.5;
      const transformEnd = 100; // Píxeles desde el top donde termina la transformación

      // Calcular el progreso de scroll de esta card (0 = no transformada, 1 = completamente transformada)
      let progress = 0;
      if (cardTop < transformStart) {
        progress = Math.min(1, (transformStart - cardTop) / (transformStart - transformEnd));
      }

      // Scale: la card se hace más pequeña mientras scrolleas
      // Va de 1 (tamaño completo) a 0.95 (5% más pequeña)
      const scale = 1 - (progress * 0.05 * (totalCards - index));

      // Opacity: la card se desvanece ligeramente
      // Va de 1 (opaca) a 0.8 (20% transparente)
      const opacity = 1 - (progress * 0.2);

      // Y: empuja la card hacia arriba para crear espacio para la siguiente
      // Cada card anterior se mueve más
      const y = -progress * 20 * (index + 1);

      setScrollState({ scale, opacity, y, progress });
    };

    // Calcular inicialmente
    calculateTransforms();

    // Usar eventos de Lenis si está disponible
    if (lenis) {
      lenis.on('scroll', calculateTransforms);
    } else {
      window.addEventListener('scroll', calculateTransforms, { passive: true });
    }

    // Recalcular en resize
    window.addEventListener('resize', calculateTransforms);

    return () => {
      if (lenis) {
        lenis.off('scroll', calculateTransforms);
      } else {
        window.removeEventListener('scroll', calculateTransforms);
      }
      window.removeEventListener('resize', calculateTransforms);
    };
  }, [index, totalCards, lenis]);

  return { cardRef, ...scrollState };
}
