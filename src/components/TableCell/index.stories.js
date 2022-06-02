import { TableCell } from './index';

export default {
  title: 'Components/TableCell',
};

export const Overview = () => /*html*/ `
  <table style="border-spacing: 0px">
    <tr>
      ${TableCell({ children: 'Mayra' })}
      ${TableCell({ children: 'Angélica' })}
      ${TableCell({ children: 'Mario' })}
    </tr>    
  </table>
`;
