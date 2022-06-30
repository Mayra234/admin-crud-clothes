export const cleanError = (fieldName) => {
  const field = document.querySelector(`[name="${fieldName}"]`);
  field.nextSibling?.remove();
  field.classList.remove('is-invalid');
};
