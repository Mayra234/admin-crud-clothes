import { ListItems } from './index';

export default {
  title: 'Components/ListItems',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${ListItems({
        items: [
          { icon: 'home', text: 'Home' },
          { icon: 'crown', text: 'Materials' },
        ],
      })}
    </div>
  </div>
`;
