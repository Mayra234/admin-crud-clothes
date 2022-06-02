import { TableRow } from './index';
import { TableCell } from '../TableCell';

export default {
  title: 'Components/TableRow',
};

export const Overview = () => /*html*/ `
  <table style="border-spacing: 0px">
    ${TableRow({
      children: `
        ${TableCell({ children: 'Angélica' })}
        ${TableCell({ children: 'Mayra' })}
        ${TableCell({ children: 'Mario' })}
      `,
    })}
  </table>
`;
