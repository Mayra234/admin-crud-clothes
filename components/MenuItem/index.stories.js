import { MenuItem } from './index';

export default {
  title: 'Components/MenuItem',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${MenuItem({
        icon: 'house',
        text: 'Dashboard',
      })}
    </div>
    <br />
    <div>
      ${MenuItem({
        style: 'color: blue',
        icon: 'crown',
        text: 'Materiales',
      })}
    </div>
  </div>
`;
