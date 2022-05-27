import { LoginBackground } from './index';

export default {
  title: 'Components/LoginBackground',
};

export const Overview = () => {
  return /*html */ `
    <div>
        <div>
            ${LoginBackground({ children: 'a' })}
        </div>
    </div>
    `;
};
