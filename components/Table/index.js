import './index.css';
import { TableHeader } from '../TableHeader';
import { TableBody } from '../TableBody';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';

export const Table = ({} = {}) => {
  return /*html*/ `
  <table>
    ${TableHeader({})}
    ${TableBody({})}
  </table>
  `;
};
