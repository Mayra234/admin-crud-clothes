import './index.css';
import { TableHeader } from '../TableHeader';
import { TableBody } from '../TableBody';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { TableHead } from '../TableHead';

export const Table = ({ style = '', children = '' } = {}) => {
  return /*html*/ `
  <table style='${style}'>
    ${TableHead({
      children: TableRow({ children: TableHeader({ children: 'Nombre' }) }),
    })}
    ${TableBody({
      children: TableRow({ children: TableCell({ children: 'pepe' }) }),
    })}
  </table>
  `;
};
