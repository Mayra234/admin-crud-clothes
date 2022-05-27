import { Label } from './index';

export default {
  title: 'Components/Label',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Label({ children: 'Edad' })}
    </div>
    <br />
    <div>
      ${Label({ children: 'Nombre' })}
    </div>
  </div>
`;
