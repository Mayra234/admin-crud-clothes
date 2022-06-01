import { TableCell } from '../TableCell';
import './index.css';

export const TableRow = ({ style = '', fields = [] }) => {
  return /*html*/ `
    <tr >${fields
      .map((field) => TableCell({ style, text: field.text }))
      .join('')}</tr>
  `;
};
