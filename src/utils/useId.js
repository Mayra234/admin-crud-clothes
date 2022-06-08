export const useId = () => {
  return `${String(Date.now())}-${Math.floor(Math.random() * 99999999999)}`;
};
