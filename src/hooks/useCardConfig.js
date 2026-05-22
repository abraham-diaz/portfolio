import { useTransform } from 'framer-motion';

// Todos los parámetros de las tarjetas en un solo lugar
export const CARD_CONFIG = {
  cardHeight: 550,       // px — altura fija de cada card
  yOffset: -72,          // vh — cuánto sube la card al salir
  scaleEnd: 0.96,        // escala final cuando termina de moverse
  scaleMid: 0.985,       // escala en el punto intermedio
  scaleMidOffset: 0.15,  // fracción del segmento donde ocurre el punto mid
  opacityMid: 0.6,       // opacidad en el punto intermedio
  opacityMidOffset: 0.15,// fracción del segmento donde empieza a desvanecerse
};

// Detecta una sola vez por sesión (no cambia en runtime)
const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

/**
 * Devuelve los MotionValues de y, scale y opacity para una card del stack.
 * Cambia CARD_CONFIG arriba para afectar todas las tarjetas a la vez.
 */
export function useCardAnimations({ progress, index, totalCards }) {
  const isLastCard = index === totalCards - 1;
  const noAnim = prefersReducedMotion || isLastCard;

  const cardScrollStart = index / totalCards;
  const cardScrollEnd = (index + 1) / totalCards;

  const { yOffset, scaleEnd, scaleMid, scaleMidOffset, opacityMid, opacityMidOffset } =
    CARD_CONFIG;

  const yValue = useTransform(
    progress,
    [cardScrollStart, cardScrollEnd],
    [0, noAnim ? 0 : yOffset]
  );

  const y = useTransform(yValue, (v) => `${v}vh`);

  const scale = useTransform(
    progress,
    [cardScrollStart, cardScrollStart + scaleMidOffset, cardScrollEnd],
    [1, noAnim ? 1 : scaleMid, noAnim ? 1 : scaleEnd]
  );

  const opacity = useTransform(
    progress,
    [cardScrollStart, cardScrollEnd - opacityMidOffset, cardScrollEnd],
    isLastCard ? [1, 1, 1] : [1, opacityMid, 0]
  );

  return { y, scale, opacity, isLastCard, prefersReducedMotion };
}
