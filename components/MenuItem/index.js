import './index.css';

export const MenuItem = ({ style = '', text = '', icon = '' }) => {
  return /*html*/ `
  <div class="menu-item" >
    <div>
      <a ${style}>
        <i class="fa-solid fa-${icon}"></i>
        <p>${text}</p>
      </a>
    </div>
  </div>
  `;
};
