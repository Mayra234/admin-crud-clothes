import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { employeeSchema } from '../../schemas/employeeSchema';
import './index.css';
import { cleanError } from '../../utils/cleanError';
import { cleanErrors } from '../../utils/cleanErrors';
import { printError } from '../../utils/printError';
import { printErrors } from '../../utils/printErrors';
import { extractErrors } from '../../utils/extractErrors';
import { useRef } from '../../utils/useRef';
import { mounted } from '../../utils/mounted';
import { useEmployeeApi } from '../../apis/useEmployeeApi';
import { DataTable } from '../../components/DataTable';

export const Employees = () => {
  let formData = {};
  let employees;
  const dataTableRef = useRef();
  const employeeApi = useEmployeeApi();

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
      const employee = await employeeApi.create(formData);
      employees.push(employee);
      dataTableRef.current.refreshTable(employees);
      form.reset();
      formData = {};
    } catch (error) {
      printErrors(extractErrors(error));
    }
  };

  const listEmployees = async () => {
    employees = await employeeApi.list();
    dataTableRef.current.refreshTable(employees);
  };

  mounted(() => {
    listEmployees();
  });

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
        ${DataTable({ ref: dataTableRef })}
      </div> 
    `,
    })}
  `;
};
