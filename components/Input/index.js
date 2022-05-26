import './index.css';

export const Input = ({ type = '' } = {}) => {
  return /*html*/ `
  <input class='form-control' type="${type}" >
  `;
};
