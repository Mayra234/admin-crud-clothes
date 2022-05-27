import { TableRow } from '../TableRow';
import './index.css';

export const TableHeader = ({ style = '', children = '' } = {}) => {
  return /*html*/ `
  <th style=${style}>${children}</th>
  `;
};
