import { TableHeader } from '../TableHeader';
import './index.css';

export const TableHead = ({ style = '', headers = [] }) => {
  return /*html*/ `
    <thead >${headers
      .map((header) => TableHeader({ style, text: header.text }))
      .join('')}</thead>
  `;
};
