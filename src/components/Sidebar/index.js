import './index.css';

export const Sidebar = ({ style = '', children = '' } = {}) => {
  return /*html*/ `
  <div class="content-menu" style="${style}">${children}</div>
  `;
};
