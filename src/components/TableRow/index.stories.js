import { TableRow } from './index';

export default {
  title: 'Components/TableRow',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableRow({ style: 'color: red', text: 'Hola' })}
    </div>
    <br />
    <div>
      ${TableRow({ style: 'background: pink', text: 'Mayra' })}
    </div>
  </div>
`;
