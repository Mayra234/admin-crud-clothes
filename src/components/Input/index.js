import { Label } from '../Label';

export const Input = ({
  className = '',
  type = '',
  label = '',
  value = '',
  name = '',
} = {}) => {
  return /*html*/ `
    ${label && Label({ children: label })}
    <input class='form-control ${className}' type="${type}" value="${value}" name="${name}">
  `;
};
