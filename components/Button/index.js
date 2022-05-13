import './index.css';

export const Button = ({ style = '', children = '' } = {}) => {
  return /*html*/ `<button style="${style}">${children}</button>`;
};
