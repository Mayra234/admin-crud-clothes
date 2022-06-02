import { SelectOption } from './index';

export default {
  title: 'Components/SelectOption',
};

export const Overview = () => /*html*/ `
  <select>
    ${SelectOption({
      value: '',
      text: 'Seleccionar',
    })}
    ${SelectOption({
      value: 1,
      text: 'Comida',
    })}
    ${SelectOption({
      value: 2,
      text: 'Bebida',
    })}
    ${SelectOption({
      value: 3,
      text: 'Postre',
    })}
  </select>
`;
