import { TableHead } from './index';

export default {
  title: 'Components/TableHead',
};

export const Overview = () => /*html*/ `
  <table>
  ${TableHead({
    children: /*html*/ `
    <tr>
      <th style="padding: 12px">Nombre</th>
      <th style="padding: 12px">Edad</th>
      <th style="padding: 12px">Teléfono</th>
    </tr>
  `,
  })}
  </table>
`;
