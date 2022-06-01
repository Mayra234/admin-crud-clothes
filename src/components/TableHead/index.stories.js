import { TableHead } from './index';

export default {
  title: 'Components/TableHead',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableHead({
        style: 'background: red',
        headers: [{ text: 'Nombre' }],
      })}
    </div>
    <div>
      ${TableHead({ text: 'Mayra' })}
    </div>
  </div>
`;
