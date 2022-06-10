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
    <br /> 
    <div>
      ${Button({
        children: 'Cambiar a negro',
        style: 'background-color: green; color: white',
        onClick: (event) => {
          let color;
          let text;

          if (event.target.dataset.color === 'black') {
            color = 'green';
            text = 'Cambiar a negro';
          } else {
            color = 'black';
            text = 'Cambiar a verde';
          }

          event.target.dataset.color = color;
          event.target.style.backgroundColor = color;
          event.target.innerText = text;
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
