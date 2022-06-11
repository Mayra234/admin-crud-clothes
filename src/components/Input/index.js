import { Label } from '../Label';

export const Input = ({
  placeholder = '',
  className = '',
  type = '',
  label = '',
  value = '',
  name = '',
} = {}) => {
  return /*html*/ `
    ${label && Label({ children: label })}
    <input placeholder=${placeholder} class='form-control ${className}' type="${type}" value="${value}" name="${name}">
  `;
};
