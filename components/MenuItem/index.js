import './index.css';

export const MenuItem = ({ style = '', children = '', property = '' }) => {
  return /*html*/ `
  <div class="menu-item" >
    <div>
      <a ${style}>
        <i class="${property}"></i>
        <p>${children}</p>
      </a>
    </div>
  </div>
  `;
};
