import { Card } from './index';

export default {
  title: 'Components/Card',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Card({
        style: 'background-color: blue; height: 700px',
        content: 'Lupita',
      })}
    </div>
    <br />
    <div>
      ${Card({
        content: 'Lucinda',
      })}
    </div>
  </div>
`;
