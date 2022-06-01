import './index.css';

export const SelectOption = ({ text = '', value = '' }) => {
  return /*html*/ `
    <option value="${value}">${text}</option>
  `;
};
