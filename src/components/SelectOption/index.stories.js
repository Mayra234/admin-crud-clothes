import { SelectOption } from './index';

export default {
  title: 'Components/SelectOption',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${SelectOption({
        value: 'comida',
        text: 'comida',
      })}
  </div>
`;
