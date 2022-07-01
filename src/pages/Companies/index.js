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

export const Companies = () => {
  const formData = {};
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
    const form = document.getElementById('companies-form');

    try {
      cleanErrors(formData);
      await companySchema.validate(formData, { abortEarly: false });
      alert(JSON.stringify(formData));
      form.reset();
    } catch (error) {
      printErrors(extractErrors(error));
    }
  };

  const listCompanies = async () => {
    const companies = await companyApi.list();
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
