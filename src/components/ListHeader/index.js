import { TableHeader } from '../TableHeader';
import './index.css';

export const ListHeader = ({ headers = [] } = {}) => {
  return /*html */ `
    <thead>${headers
      .map((header) => TableHeader({ text: header.text }))
      .join('')}</thead>
    `;
};
