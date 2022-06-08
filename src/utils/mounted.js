export const mounted = (callback) => {
  setTimeout(() => {
    callback();
  });
};
