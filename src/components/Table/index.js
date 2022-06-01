import { TableBody } from '../TableBody';
import { TableHead } from '../TableHead';
import { HEADERS } from '../../constants/headers';
import './index.css';

export const Table = () => {
  return /*html */ `
    <table>
        ${TableHead({ headers: HEADERS })}
        ${TableBody()}
    </table>
    `;
};
