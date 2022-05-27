import { TableHeader } from '../TableHeader';
import { TableHead } from './index';

export default {
  title: 'Components/TableHead',
};

export const Overview = () => /*html*/ `
  <div>
      <div>
          ${TableHead({
            style: 'border: 1px solid red',
          })}
      </div>
  </div>
`;
