import { Button } from './index';

export default {
  title: 'Components/Button',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Button({ children: 'Botón 1' })}
    </div>
    <br />
    <div>
      ${Button({ children: 'Botón 2', style: 'background-color: red' })}
    </div>
  </div>
`;

export const ButtonWithOnClick = () => /*html*/ `
  <div>
    ${Button({
      onClick: () => {
        alert('Hola mundo 1');
      },
      children: 'Saludar 1',
    })}
    ${Button({
      onClick: () => {
        alert('Hola mundo 2');
      },
      children: 'Saludar 2',
    })}
  </div>
`;
