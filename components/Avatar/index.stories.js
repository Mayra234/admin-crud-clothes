import { Avatar } from './index';

export default {
  title: 'Components/Avatar',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Avatar({ mainText: 'María Angélica' })}
    </div>
    <br />
    <div>
      ${Avatar({ mainText: 'Mayra Alejandra' })}
    </div>
  </div>
`;
