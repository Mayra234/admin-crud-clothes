import './index.css';
import { mounted } from '../../utils/mounted';
import { useId } from '../../utils/useId';

export const Button = ({
  id = '',
  style = '',
  children = '',
  onClick = '',
  onMouseEnter = '',
} = {}) => {
  const _id = id || useId();

  mounted(() => {
    const button = document.getElementById(_id);
    onClick && button.addEventListener('click', onClick);
    onMouseEnter && button.addEventListener('mouseenter', onMouseEnter);
  });

  return /*html*/ `<button id="${_id}" class="button" style="${style}">${children}</button>`;
};
