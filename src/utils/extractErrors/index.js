export const extractErrors = (errors) => {
  const obj = {};
  errors.inner.forEach((item) => {
    obj[item.path] = item.message;
  });

  return obj;
};
