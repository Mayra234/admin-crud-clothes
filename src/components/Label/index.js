export const Label = ({ children = '' } = {}) => {
  return /*html*/ `
  <label class='form-label'>${children}</label>
  `;
};
