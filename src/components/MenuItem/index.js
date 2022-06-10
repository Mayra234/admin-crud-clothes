import './index.css';
import { useId } from '../../utils/useId';
import { mounted } from '../../utils/mounted';
import { useNavigate } from '../../utils/useNavigate';

export const MenuItem = ({ style = '', text = '', icon = '', route = '' }) => {
  const id = useId();
  const { navigate } = useNavigate();

  mounted(() => {
    const menuItem = document.getElementById(id);
    menuItem.addEventListener('click', () => {
      route && navigate(route);
    });
  });

  return /*html*/ `
  <div class="menu-item" >
    <div>
      <a id="${id}" ${style}>
        <i class="fa-solid fa-${icon}"></i>
        <p>${text}</p>
      </a>
    </div>
  </div>
  `;
};
