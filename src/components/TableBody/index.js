import './index.css';
import { TableCell } from '../TableCell';
export const TableBody = ({ children = '' }) => {
  return /*html*/ `
  <table><tbody >${children}</tbody></table>
  `;
};
