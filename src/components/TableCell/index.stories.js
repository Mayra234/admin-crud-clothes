import { TableCell } from './index';

export default {
  title: 'Components/TableCell',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableCell({ text: 'Mayra' })}
    </div>
    <div>
      ${TableCell({ style: 'background: red', text: 'Mayra' })}
    </div>
  </div>
`;
