import { MenuItem } from './index';

export default {
  title: 'Components/MenuItem',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${MenuItem({
        children: 'Dashboard',
        property: 'fa-solid fa-house',
      })}
    </div>
    <br />
    <div>
      ${MenuItem({
        style: 'color: blue',
        children: 'Materiales',
        property: 'fa-solid fa-crown',
      })}
    </div>
  </div>
`;
