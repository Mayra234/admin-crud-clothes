import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { TableBody } from '../../components/TableBody';
import { TableCell } from '../../components/TableCell';
import { TableHead } from '../../components/TableHead';
import { TableHeader } from '../../components/TableHeader';
import { TableRow } from '../../components/TableRow';

import './index.css';

export const Clothes = () => {
  return /*html*/ `
  <h4 class='form-element'>Prendas</h4>
    ${Card({
      children: /*html */ `
      <form class="clothes-form">
        <div class='field'>
          ${Input({
            label: 'Nombre',
            type: 'text',
            placeholder: 'Digita el nombre de la prenda',
          })}
        </div>
        <div class='field'>
          ${Select({
            label: 'Seleccione una compañía',
            options: [],
          })}
        </div>
         <div class='field'>
          ${Select({
            label: 'Seleccione un material',
            options: [],
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Precio',
            type: 'number',
            placeholder: 'Digita el valor de la prenda',
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Cantidad',
            type: 'number',
            placeholder: 'Digita la cantidad de prendas',
          })}
        </div>
        <div class="field-button">
      ${Button({ children: 'Crear', style: 'margin-left: 12px' })}
      </div>
      </form>
      <div class='container-table'>
        ${Table({
          children: `
          ${TableHead({
            children: `
              ${TableRow({
                children: `
                ${TableHeader({ toUpperCase: true, children: 'id' })}
                ${TableHeader({ toUpperCase: true, children: 'compañia' })}
                ${TableHeader({ toUpperCase: true, children: 'material' })}
                ${TableHeader({ toUpperCase: true, children: 'nombre' })}
                ${TableHeader({ toUpperCase: true, children: 'precio' })}
                ${TableHeader({ toUpperCase: true, children: 'cantidad' })}
                ${TableHeader({ toUpperCase: true, children: 'acciones' })}
              `,
              })}
            `,
          })}
          ${TableBody({
            children: `
            ${TableRow({
              children: `
              ${TableCell({ children: 'Vacio' })}
              ${TableCell({ children: 'Vacio' })}
              ${TableCell({ children: 'Vacio' })}
              ${TableCell({ children: 'Vacio' })}
              ${TableCell({ children: 'Vacio' })}
              ${TableCell({ children: 'Vacio' })}
              ${TableCell({ children: 'Vacio' })}

            `,
            })}
          `,
          })}
       `,
        })}
      </div> 
    `,
    })}
  `;
};
