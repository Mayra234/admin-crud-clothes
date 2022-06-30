export const printError = (fieldName, message) => {
  const field = document.querySelector(`[name="${fieldName}"]`);
  field.nextSibling?.remove();
  field.classList.add('is-invalid');
  const errorMessage = document.createElement('small');
  errorMessage.innerText = message;
  errorMessage.style.color = 'red';
  field.after(errorMessage);
};
