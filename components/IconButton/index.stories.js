import { IconButton } from './index';

export default {
  title: 'Components/IconButton',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${IconButton({ icon: 'arrow-right-from-bracket' })}
    </div>
    <br />
    <div>
      ${IconButton({ icon: 'music' })}
    </div>
  </div>
`;
