import { TableHeader } from './index';

export default {
  title: 'Components/TableHeader',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableHeader({ children: 'number', style: 'background: red' })}
    </div>
    <br />
    <div>
      ${TableHeader({ children: 'text' })}
    </div>
  </div>
`;
