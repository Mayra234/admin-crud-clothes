import { TableRow } from '../TableRow';
import './index.css';

export const TableHeader = ({ style = '', text = '' } = {}) => {
  return /*html*/ `
  <table>
    <th style="${style}">${text}</th>
  </table>
  `;
};
