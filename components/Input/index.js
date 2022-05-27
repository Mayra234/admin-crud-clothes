import './index.css';

export const Input = ({ type = '', children = '' } = {}) => {
  return /*html*/ `
  <input class='form-control' type="${type}" >
  `;
};
