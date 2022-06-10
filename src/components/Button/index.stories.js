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

export const OnClickExample = () => /*html*/ `
  <div>
    <div>
      ${Button({
        children: 'Saludo 1',
        onClick: () => {
          alert('Hola 1');
        },
      })}
    </div>
    <br />
    <div>
      ${Button({
        children: 'Saludo 2',
        style: 'background-color: red',
        onClick: () => {
          alert('Hola 2');
        },
      })}
    </div>
  </div>
`;

export const OnMouseEnterExample = () => /*html*/ `
  <div>
    <div>
      ${Button({
        children: 'Hover',
        onMouseEnter: () => {
          alert('Mouse ingresó');
        },
      })}
    </div>
    <br />
  </div>
`;
