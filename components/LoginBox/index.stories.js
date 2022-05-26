import { LoginBox } from './index';

export default {
  title: 'Components/LoginBox',
};

export const Overview = () => /*html*/ `
  <div>
      ${LoginBox({ children: 'Lucinda' })}
  </div>
`;
