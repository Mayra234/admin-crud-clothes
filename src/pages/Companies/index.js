import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { TableBody } from '../../components/TableBody';
import { TableHead } from '../../components/TableHead';
import { TableHeader } from '../../components/TableHeader';
import { TableCell } from '../../components/TableCell';
import { TableRow } from '../../components/TableRow';
import { companySchema } from '../../schemas/companySchema';
import './index.css';

export const Companies = () => {
  const formData = {};
  const setFormData = (event) => {
    const { name, value } = event.target;
    formData[name] = value;
  };

  const submit = async () => {
    try {
      await companySchema.validate(formData, { abortEarly: false });
      alert(JSON.stringify(formData));
    } catch (error) {
      alert(JSON.stringify(error));
    }

    console.log(error);
  };

  return /*html*/ `
   <h4 class='form-element'>Compañías</h4>
    ${Card({
      children: /*html */ `
      <form class="companies-form">
        <div class='field'>
          ${Input({
            label: 'Nombre',
            type: 'text',
            placeholder: 'Digita el nombre de la compañia',
            name: 'name',
            onInput: setFormData,
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Nit',
            type: 'number',
            placeholder: 'Digita Nit de la compañia',
            name: 'nit',
            onInput: setFormData,
          })}
        </div>
        <div>
          ${Button({
            children: 'Crear',
            style: 'margin-left: 12px',
            onClick: submit,
          })}
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
