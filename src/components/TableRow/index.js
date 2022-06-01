import { TableCell } from '../TableCell';
import './index.css';

export const TableRow = ({ style = '', text = '' } = {}) => {
  return /*html*/ `
  <table>
    <tr>${TableCell({ text, style })}</tr>
  </table>
  `;
};
