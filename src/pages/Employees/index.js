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

export const Employees = () => {
  return /*html*/ `
   <h4 class='form-element'>Empleados</h4>
    ${Card({
      children: /*html */ `
      <form class="employees-form">
        <div class='field'>
          ${Input({
            label: 'Primer nombre',
            type: 'text',
            placeholder: 'Digita tu primer nombre',
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Segundo nombre',
            type: 'text',
            placeholder: 'Digita tu segundo nombre',
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Apellido',
            type: 'text',
            placeholder: 'Digita tu apellido',
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Email',
            type: 'email',
            placeholder: 'Digita tu email',
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Contraseña',
            type: 'password',
            placeholder: 'Digita tu contraseña',
          })}
        </div>
      </form>
      ${Button({ children: 'Crear', style: 'margin-left: 12px' })}
      <div class='container-table'>
        ${Table({
          children: `
          ${TableHead({
            children: `
              ${TableRow({
                children: `
                ${TableHeader({ toUpperCase: true, children: 'id' })}
                ${TableHeader({ toUpperCase: true, children: 'primer nombre' })}
                ${TableHeader({
                  toUpperCase: true,
                  children: 'segundo nombre',
                })}
                ${TableHeader({ toUpperCase: true, children: 'apellido' })}
                ${TableHeader({ toUpperCase: true, children: 'email' })}
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
