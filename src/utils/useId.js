export const useId = () => {
  return Math.floor(Math.random() * 999999999) + '-' + Date.now();
};
