import { Siderbar } from './index';

export default {
  title: 'Components/Siderbar',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Sidebar({})}
    </div>
    <br />
    <div>
      ${Siderbar({})}
    </div>
  </div>
`;
