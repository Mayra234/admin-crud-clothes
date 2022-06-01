import { TableHead } from './index';

export default {
  title: 'Components/TableHead',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableHead({ text: 'Hola', style: 'background: red' })}
    </div>
    <div>
      ${TableHead({ text: 'Mayra' })}
    </div>
  </div>
`;
