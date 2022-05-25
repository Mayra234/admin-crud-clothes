import './index.css';
import { Avatar } from '../Avatar';
import { IconButton } from '../IconButton';

export const Navbar = () => {
  return /* html */ `<div class="navbar">
    <div></div>
    <div>
      ${Avatar({ mainText: 'Mayra Alejandra' })}
      ${IconButton({
        icon: 'arrow-right-from-bracket',
        style: 'margin-right: 10px',
      })}
    </div>
  </div>`;
};
