import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { materialSchema } from '../../schemas/materialSchema';
import { extractErrors } from '../../utils/extractErrors';
import { cleanError } from '../../utils/cleanError';
import { printError } from '../../utils/printError';
import { cleanErrors } from '../../utils/cleanErrors';
import { printErrors } from '../../utils/printErrors';
import { useMaterialApi } from '../../apis/useMaterialApi';
import { useRef } from '../../utils/useRef';
import { mounted } from '../../utils/mounted';
import { DataTable } from '../../components/DataTable';

export const Materials = () => {
  let formData = {};
  let materials;
  const dataTableRef = useRef();
  const useMaterial = useMaterialApi();

  const setFormData = async (event) => {
    const { name, value } = event.target;
    formData[name] = value;

    try {
      cleanError(name);
      await materialSchema.validateAt(name, formData);
    } catch (error) {
      printError(name, error.message);
    }
  };

  const submit = async () => {
    const form = document.getElementById('materials-form');
    try {
      cleanErrors(formData);
      await materialSchema.validate(formData, { abortEarly: false });
      const material = await useMaterial.create(formData);
      materials.push(material);
      dataTableRef.current.refreshTable(materials);
      form.reset();
      formData = {};
    } catch (error) {
      printErrors(extractErrors(error));
    }
  };

  const listMaterials = async () => {
    materials = await useMaterial.list();
    dataTableRef.current.refreshTable(materials);
  };

  mounted(() => {
    listMaterials();
  });

  return /*html*/ `
   <h4 class='form-element'>Materiales</h4>
    ${Card({
      children: /*html */ `
      <form id="materials-form">
        <div class='field'>
          ${Input({
            label: 'Nombre',
            type: 'text',
            placeholder: 'Digita el nombre del material',
            name: 'name',
            onInput: setFormData,
          })}
        </div>
        <div>${Button({
          children: 'Crear',
          style: 'margin-left: 12px',
          onClick: submit,
        })}</div>
      </form>     
      <div class='container-table'>
        ${DataTable({ ref: dataTableRef })}
      </div> 
    `,
    })}
  `;
};
