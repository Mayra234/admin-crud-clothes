import './index.css';

export const IconButton = ({ icon = '', style = '' } = {}) => {
  return /*html*/ `<button style="${style}" class="icon-button fa-solid fa-${icon}"></button>`;
};
