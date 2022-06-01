import './index.css';

export const TableCell = ({ style = '', text = '' }) => {
  return /*html*/ `
    <td style="${style}">${text}</td>
  `;
};
