import './index.css';
import { TableRow } from '../TableRow';
import { FIELDS } from '../../constants/fields';

export const TableBody = () => {
  return /*html*/ `
    <tbody >${TableRow({ fields: FIELDS })}</tbody>
  `;
};
