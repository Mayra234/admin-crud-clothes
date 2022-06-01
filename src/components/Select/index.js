import { SelectOption } from '../SelectOption';
import './index.css';

export const Select = ({ children = '', items = [] }) => {
  return /*html*/ `
  <select class='form-control'>
    ${items
      .map((item) => SelectOption({ text: item.text, value: item.value }))
      .join('')}
  </select>
  `;
};
