import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import './index.css';

export const Clothes = () => {
  return /*html*/ `
    ${Card({
      children: /*html */ `
      <div class="clothes-container">
        <h1>Prendas</h1>
        ${Input({
          label: 'Nombre',
          placeholder: 'Digita el nombre de la prenda',
        })}
        ${Select({
          label: 'Seleccione una compañía',
          options: [],
        })}
      </div>
    `,
    })}
  `;
};
