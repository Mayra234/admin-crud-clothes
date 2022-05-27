import './index.css';

export const Content = ({ children = '' } = {}) => {
  return /*html*/ `<div class="content">${children}</div>`;
};
