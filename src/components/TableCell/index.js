import './index.css';

export const TableCell = ({ style = '', children = '' }) => {
  return /*html*/ `
    <td class="td" style="${style}">${children}</td>
  `;
};
