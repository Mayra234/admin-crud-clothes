import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { TableBody } from '../../components/TableBody';
import { TableHead } from '../../components/TableHead';
import { TableHeader } from '../../components/TableHeader';
import { TableCell } from '../../components/TableCell';
import { TableRow } from '../../components/TableRow';

import './index.css';

export const Companies = () => {
  return /*html*/ `
   <h4 class='form-element'>Compañías</h4>
    ${Card({
      children: /*html */ `
      <form class="companies-container">
        <div class='field'>
          ${Input({
            label: 'Nombre',
            type: 'text',
            placeholder: 'Digita el nombre de la compañia',
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Nit',
            type: 'number',
            placeholder: 'Digita Nit de la compañia',
          })}
        </div>
      </form>
      ${Button({ children: 'Crear', style: 'margin-left: 12px' })}
      <div class='content-table'>
        ${Table({
          children: `
          ${TableHead({
            children: `
              ${TableRow({
                children: `
                ${TableHeader({ toUpperCase: true, children: 'id' })}
                ${TableHeader({ toUpperCase: true, children: 'nombre' })}
                ${TableHeader({ toUpperCase: true, children: 'nit' })}
                ${TableHeader({ toUpperCase: true, children: 'Acciones' })}
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
