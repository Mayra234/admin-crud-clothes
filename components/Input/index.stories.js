import { Input } from './index';

export default {
  title: 'Components/Input',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Input({ type: 'number' })}
    </div>
    <br />
    <div>
      ${Input({ type: 'text' })}
    </div>
  </div>
`;
