import './index.css';

export const Button = ({ style = '', children = '' } = {}) => {
  return /*html*/ `<button class="button" style="${style}">${children}</button>`;
};
