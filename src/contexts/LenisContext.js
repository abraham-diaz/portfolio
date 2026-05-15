import { createContext, useContext } from 'react';

/**
 * Context para compartir la instancia de Lenis en toda la aplicación
 */
export const LenisContext = createContext(null);

/**
 * Hook helper para acceder al contexto de Lenis
 * @returns {Lenis | null} Instancia de Lenis o null
 */
export function useLenisContext() {
  return useContext(LenisContext);
}
