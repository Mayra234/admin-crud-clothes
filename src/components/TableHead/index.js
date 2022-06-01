import './index.css';
import { TableHeader } from '../TableHeader';

export const TableHeader = ({ style = '', text = '' } = {}) => {
  return /*html*/ `
  <table>
    <thead ${style}>${TableHeader({
    text,
  })}</thead>
  </table>
  
  `;
};
