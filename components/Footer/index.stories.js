import { Card } from './index';

export default {
  title: 'Components/Card',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Card({})}
    </div>
    <br />
    <div>
      ${Card({})}
    </div>
  </div>
`;
