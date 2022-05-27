import './index.css';

export const TableRow = ({ style = '', children = '' } = {}) => {
  return /*html*/ `
  <tr  style="${style}" >${children}</tr>
  `;
};
