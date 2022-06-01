import { Header } from './index';

export default {
  title: 'Components/Header',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Header({ style: 'background: red' })}
    </div>
    <br />
    <div>
      ${Header({ style: 'background: silver' })}
    </div>
  </div>
`;
