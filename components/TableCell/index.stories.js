import { TableCell } from './index';

export default {
  title: 'Components/TableCell',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableCell({ children: 'Mayra' })}
    </div>
  </div>
`;
