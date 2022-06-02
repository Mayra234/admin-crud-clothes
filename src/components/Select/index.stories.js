import { Select } from './index';

export default {
  title: 'Components/Select',
};

export const SelectWithLabel = () =>
  Select({
    label: 'Propiedad',
    options: [
      { text: 'Seleccionar...' },
      { value: 1, text: 'Casa' },
      { value: 2, text: 'Comida' },
    ],
  });

export const SelectWithoutLabel = () =>
  Select({
    options: [
      { text: 'Seleccionar...' },
      { value: 1, text: 'Casa' },
      { value: 2, text: 'Comida' },
    ],
  });
