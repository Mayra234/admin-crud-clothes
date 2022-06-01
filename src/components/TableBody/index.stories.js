import { TableBody } from './index';

export default {
  title: 'Components/TableBody',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableBody({
        children: 'Mayra',
      })}
    </div>
  </div>
`;
