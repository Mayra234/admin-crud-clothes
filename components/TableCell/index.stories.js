import { TableCell } from './index';

export default {
  title: 'Components/TableCell',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableCell({ style: 'background: red' })}
    </div>
    <br />
    <div>
      ${TableCell({ children: 'Mayra' })}
    </div>
  </div>
`;
