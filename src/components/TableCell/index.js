import './index.css';

export const TableCell = ({ style = '', text = '' } = {}) => {
  return /*html*/ `
  <table>
    <td style="${style}">${text}</td>
  </table>
  `;
};
