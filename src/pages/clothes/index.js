import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import './index.css';
import { clotheSchema } from '../../schemas/clotheSchema';
import { cleanError } from '../../utils/cleanError';
import { printError } from '../../utils/printError';
import { cleanErrors } from '../../utils/cleanErrors';
import { printErrors } from '../../utils/printErrors';
import { extractErrors } from '../../utils/extractErrors';
import { DataTable } from '../../components/DataTable';
import { useRef } from '../../utils/useRef';
import { useClotheApi } from '../../apis/useClotheApi';
import { mounted } from '../../utils/mounted';

export const Clothes = () => {
  const formData = {};
  const dataTableRef = useRef();
  const useClothe = useClotheApi();

  const setFormData = async (event) => {
    const { name, value } = event.target;
    formData[name] = value;

    try {
      cleanError(name);
      await clotheSchema.validateAt(name, formData);
    } catch (error) {
      printError(name, error.message);
    }
  };

  const submit = async () => {
    const form = document.getElementById('clothes-form');
    try {
      cleanErrors(formData);
      await clotheSchema.validate(formData, { abortEarly: false });
      alert(JSON.stringify(formData));
      form.reset();
    } catch (error) {
      printErrors(extractErrors(error));
    }
  };

  const listClothes = async () => {
    const clothes = await useClothe.list();
    dataTableRef.current.refreshTable(clothes);
  };

  mounted(() => {
    listClothes();
  });

  return /*html*/ `
  <h4 class='form-element'>Prendas</h4>
    ${Card({
      children: /*html */ `
      <form id="clothes-form">
        <div class='field'>
          ${Input({
            label: 'Nombre',
            type: 'text',
            placeholder: 'Digita el nombre de la prenda',
            name: 'name',
            onInput: setFormData,
          })}
        </div>
        <div class='field'>
          ${Select({
            label: 'Seleccione una compañía',
            options: [],
            name: 'companyId',
            onInput: setFormData,
          })}
        </div>
         <div class='field'>
          ${Select({
            label: 'Seleccione un material',
            options: [],
            name: 'materialId',
            onInput: setFormData,
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Precio',
            type: 'number',
            placeholder: 'Digita el valor de la prenda',
            name: 'price',
            onInput: setFormData,
          })}
        </div>
        <div class='field'>
          ${Input({
            label: 'Cantidad',
            type: 'number',
            placeholder: 'Digita la cantidad de prendas',
            name: 'quantity',
            onInput: setFormData,
          })}
        </div>
        <div class="field-button">
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
