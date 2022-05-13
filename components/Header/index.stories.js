import { Header } from './index';

export default {
  title: 'Components/Header',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Header({})}
    </div>
    <br />
    <div>
      ${Header({})}
    </div>
  </div>
`;
