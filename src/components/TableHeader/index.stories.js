import { TableHeader } from './index';

export default {
  title: 'Components/TableHeader',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableHeader({ text: 'number', style: 'background: red' })}
    </div>
    <br />
    <div>
      ${TableHeader({ style: 'color: blue', text: 'text' })}
    </div>
  </div>
`;
