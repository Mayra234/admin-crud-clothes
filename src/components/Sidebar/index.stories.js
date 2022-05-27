import { Sidebar } from './index';

export default {
  title: 'Components/Sidebar',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Sidebar({
        style:
          'background-color: blue; max-width: 100px; width: 100%; height: 700px',
      })}
    </div>
    <br />
    <div>
      ${Sidebar({ style: 'max-width: 100px; width: 100%; height: 700px' })}
    </div>
  </div>
`;
