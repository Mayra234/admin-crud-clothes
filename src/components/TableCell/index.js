import './index.css';

export const TableCell = ({ children = '' } = {}) => {
  return /*html*/ `
  <td>${children}</td>
  `;
};
