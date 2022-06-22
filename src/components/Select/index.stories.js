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
      { value: '', text: 'Seleccionar...' },
      { value: 1, text: 'Casa' },
      { value: 2, text: 'Comida' },
    ],
  });

export const OnInputExample = () => {
  const onInput = (event) => {
    const message = document.getElementById('message');
    message.innerText = event.target.value;
  };
  return /*html */ `
  ${Select({
    label: 'País',
    options: [
      { value: '', text: 'Seleccionar...' },
      { value: '1', text: 'Colombia' },
      { value: '2', text: 'Venezuela' },
      { value: '3', text: 'Ecuador' },
    ],
    onInput,
  })}
  <br />
<span>Mensaje: </span>
<span id='message'></span>
  `;
};
