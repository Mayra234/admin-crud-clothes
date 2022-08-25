import './index.css';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { companySchema } from '../../schemas/companySchema';
import { extractErrors } from '../../utils/extractErrors';
import { cleanError } from '../../utils/cleanError';
import { printError } from '../../utils/printError';
import { printErrors } from '../../utils/printErrors';
import { cleanErrors } from '../../utils/cleanErrors';
import { DataTable } from '../../components/DataTable';
import { useRef } from '../../utils/useRef';
import { mounted } from '../../utils/mounted';
import { useCompanyApi } from '../../apis/useCompanyApi';
import { ValidationError } from 'yup';

export const Companies = () => {
  let formData = {};
  let companies;
  const dataTableRef = useRef();
  const companyApi = useCompanyApi();

  const setFormData = async (event) => {
    const { name, value } = event.target;
    formData[name] = value;

    try {
      cleanError(name);
      await companySchema.validateAt(name, formData);
    } catch (error) {
      printError(name, error.message);
    }
  };

  const submit = async () => {
    try {
      cleanErrors(formData);
      await companySchema.validate(formData, { abortEarly: false });
      const company = await companyApi.create(formData);
      companies.push(company);
      dataTableRef.current.refreshTable(companies);
      reset();
    } catch (error) {
      if (error instanceof ValidationError) {
        printErrors(extractErrors(error));
      } else {
        console.error(error);
      }
    }
  };

  const reset = () => {
    const form = document.getElementById('companies-form');
    form.reset();
    formData = {};
  };

  const listCompanies = async () => {
    companies = await companyApi.list();
    dataTableRef.current.refreshTable(companies);
  };

  mounted(() => {
    listCompanies();
  });

  return /*html*/ `
   <h4 class='form-element'>Compañías</h4>
    ${Card({
      children: /*html */ `
      <form id="companies-form">
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
        ${DataTable({ ref: dataTableRef })}
      </div> 
    `,
    })}
  `;
};
