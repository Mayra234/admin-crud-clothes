import { SelectOption } from '../SelectOption';
import { Label } from '../Label';
import { useId } from '../../utils/useId';
import { mounted } from '../../utils/mounted';

export const Select = ({
  id = '',
  className = '',
  label = '',
  name = '',
  options = [],
  onInput = '',
}) => {
  const _id = id || useId();

  mounted(() => {
    const select = document.getElementById(_id);
    onInput && select.addEventListener('input', onInput);
  });

  return /*html*/ `
  ${label && Label({ children: label })}
  <select id="${_id}" class='form-control ${className}' name='${name}'>
    ${options
      .map((option) => SelectOption({ text: option.text, value: option.value }))
      .join('')}
  </select>
  `;
};
