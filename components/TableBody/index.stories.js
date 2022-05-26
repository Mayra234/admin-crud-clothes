import { TableBody } from './index';

export default {
  title: 'Components/TableBody',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${TableBody({ style: 'color: yellow' })}
    </div>
    <br />
    <div>
      ${TableBody({ children: 'Diavanera' })}
    </div>
  </div>
`;
