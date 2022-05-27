import { TableRow } from './index';

export default {
  title: 'Components/TableRow',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableRow({ style: 'background: red', children: 'Ale' })}
    </div>
    <br />
    <div>
      ${TableRow({ children: 'Mayra' })}
    </div>
  </div>
`;
