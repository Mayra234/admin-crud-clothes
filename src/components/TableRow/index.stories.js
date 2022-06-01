import { TableRow } from './index';

export default {
  title: 'Components/TableRow',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableRow({
        style: 'background: pink',
        fields: [{ text: 'Johana' }],
      })}
    </div>
    <div>
      ${TableRow({
        style: 'background: green',
        fields: [{ text: 'Rocio' }],
      })}
    </div>
  </div>
`;
