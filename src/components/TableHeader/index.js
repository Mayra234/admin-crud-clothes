import { TableRow } from '../TableRow';
import './index.css';

export const TableHeader = ({ style = '', text = '' } = {}) => {
  return /*html*/ `
  <th ${style}>${text}</th>
  `;
};
