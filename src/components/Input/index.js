import { Label } from '../Label';
import { mounted } from '../../utils/mounted';
import { useId } from '../../utils/useId';

export const Input = ({
  id = '',
  placeholder = '',
  className = '',
  type = '',
  label = '',
  value = '',
  name = '',
  onInput = '',
} = {}) => {
  const _id = id || useId();

  mounted(() => {
    const input = document.getElementById(_id);
    onInput && input.addEventListener('input', onInput);
  });

  return /*html*/ `
    ${label && Label({ children: label })}
    <input id="${_id}" placeholder="${placeholder}" class='form-control ${className}' type="${type}" value="${value}" name="${name}">
  `;
};
