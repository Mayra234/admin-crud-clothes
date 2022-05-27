import './index.css';

export const Header = ({ style = '', children = '' } = {}) => {
  return /*html*/ `
  <div class="container-header" style="${style}">
    ${children}
  </div>
  `;
};
