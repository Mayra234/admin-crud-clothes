import { SelectOption } from '../SelectOption';
import { Label } from '../Label';

export const Select = ({
  className = '',
  label = '',
  name = '',
  options = [],
}) => {
  return /*html*/ `
  ${label && Label({ children: label })}
  <select class='form-control ${className}' name='${name}'>
    ${options
      .map((option) => SelectOption({ text: option.text, value: option.value }))
      .join('')}
  </select>
  `;
};
