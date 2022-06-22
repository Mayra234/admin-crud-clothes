import { Input } from './index';

export default {
  title: 'Components/Input',
};

export const NumberInput = () => Input({ label: 'Edad', type: 'number' });

export const TextInput = () => Input({ label: 'Nombre', type: 'text' });

export const OnInputExample = () => {
  const onInput = (event) => {
    const message = document.getElementById('message');
    message.innerText = event.target.value;
  };

  return /*html */ `    
    ${Input({ label: 'Nombre', type: 'text', onInput })}
    <br />
    <span>Mensaje: </span>
    <span id="message"></span>    
  `;
};
