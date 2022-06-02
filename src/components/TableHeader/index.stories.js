import { TableHeader } from './index';

export default {
  title: 'Components/TableHeader',
};

export const Overview = () => /*html*/ `
<table>
  <thead>
    <tr>
      ${TableHeader({ children: 'Nombre' })}
      ${TableHeader({ children: 'Edad' })}
      ${TableHeader({ children: 'Teléfono' })}
    </tr>
  </thead>
</table>
`;
