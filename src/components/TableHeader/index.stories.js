import { TableHeader } from './index';

export default {
  title: 'Components/TableHeader',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableHeader({ text: 'Hola', style: 'background: red' })}
    </div>
    <div>
      ${TableHeader({ style: 'color: blue', text: 'Mayra' })}
    </div>
  </div>
`;
