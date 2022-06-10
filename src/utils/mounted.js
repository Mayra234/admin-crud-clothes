/**
 * Función que simula el ciclo de vida mounted
 * es decir, cuando el componente está en el DOM.
 */
export const mounted = (callback) => {
  setTimeout(() => {
    callback();
  });
};
