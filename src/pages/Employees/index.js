import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { TableBody } from '../../components/TableBody';
import { TableHead } from '../../components/TableHead';
import { TableHeader } from '../../components/TableHeader';
import { TableCell } from '../../components/TableCell';
import { TableRow } from '../../components/TableRow';
import { employeeSchema } from '../../schemas/employeeSchema';
import './index.css';
import { cleanError } from '../../utils/cleanError';
import { cleanErrors } from '../../utils/cleanErrors';
import { printError } from '../../utils/printError';
import { printErrors } from '../../utils/printErrors';
import { extractErrors } from '../../utils/extractErrors';

export const Employees = () => {
  const formData = {};
  const setFormData = async (event) => {
    const { name, value } = event.target;
    formData[name] = value;

    try {
      cleanError(name);
      await employeeSchema.validateAt(name, formData);
    } catch (error) {
      printError(name, error.message);
    }
  };

  const submit = async () => {
    const form = document.getElementById('employees-form');
    try {
      cleanErrors(formData);
      await employeeSchema.validate(formData, { abortEarly: false });
      alert(JSON.stringify(formData));
      form.reset();
    } catch (error) {
      printErrors(extractErrors(error));
    }
  };

  return /*html*/ `
   <h4 class='form-element'>Empleados</h4>
    ${Card({
      children: /*html */ `
      <form id="employees-form">
        <div class='field'>
          ${Input({
            label: 'Primer nombre',
            type: 'text',
            placeholder: 'Digita tu primer nombre',
            name: 'firstName',
            onInput: setFormData,
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Segundo nombre',
            type: 'text',
            placeholder: 'Digita tu segundo nombre',
            name: 'secondName',
            onInput: setFormData,
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Apellido',
            type: 'text',
            placeholder: 'Digita tu apellido',
            name: 'lastName',
            onInput: setFormData,
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Email',
            type: 'email',
            placeholder: 'Digita tu email',
            name: 'email',
            onInput: setFormData,
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Contraseña',
            type: 'password',
            placeholder: 'Digita tu contraseña',
            name: 'password',
            onInput: setFormData,
          })}
        </div>
      </form>
      ${Button({
        children: 'Crear',
        style: 'margin-left: 12px',
        onClick: submit,
      })}
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
