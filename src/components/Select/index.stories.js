import { Select } from './index';

export default {
  title: 'Components/Select',
};

export const Overview = () =>
  /*html*/ Select({
    items: [
      { text: 'Seleccionar...' },
      { value: 'casa', text: 'Casa' },
      { value: 'comida', text: 'Comida' },
    ],
  });
