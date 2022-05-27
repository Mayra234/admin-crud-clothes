import { ListItem } from './index';

export default {
  title: 'Components/ListItem',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${ListItem({
        items: [
          { icon: 'home', text: 'Home' },
          { icon: 'crown', text: 'Materials' },
        ],
      })}
    </div>
  </div>
`;
