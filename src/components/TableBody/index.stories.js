import { TableBody } from './index';

export default {
  title: 'Components/TableBody',
};

export const Overview = () => /*html*/ `
  <table style="border-spacing: 0px">
    <thead>
      <tr>
        <th>Persona 1</th>
        <th>Persona 2</th>
        <th>Persona 3</th>
      </tr>
    </thead>
    ${TableBody({
      children: /*html*/ `
      <tr>
        <td>Mayra</td>
        <td>Angélica</td>
        <td>Mario</td>
      </tr>    
    `,
    })}
    
  </table>
`;
