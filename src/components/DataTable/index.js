import { mounted } from '../../utils/mounted';
import { useId } from '../../utils/useId';
import { Table } from '../Table';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { TableHeader } from '../TableHeader';

export const DataTable = ({
  id = '',
  ref = undefined,
  data = [],
  columnsNames = {},
} = {}) => {
  const _id = id || useId();
  let dataTable;
  let records;

  const prepareRecords = (initialData) => {
    records = {
      headers: null,
      body: [],
    };

    data = initialData || data;

    for (let item of data) {
      if (!records.headers) records.headers = Object.keys(item);

      const row = [];
      records.headers.forEach((header) => {
        row.push(item[header]);
      });
      records.body.push(row);
    }
  };

  const renderRecords = () => {
    renderHeaders(records.headers || []);
    renderRows(records.body || []);
  };

  const renderHeaders = (headers) => {
    const tableHeader = dataTable.querySelector('thead');
    tableHeader.innerHTML = `
    ${TableRow({
      children: headers
        .map(
          (header) => `
          ${TableHeader({ children: header })}
        `
        )
        .join(''),
    })}
  `;
  };

  const renderRows = (body) => {
    const tableBody = dataTable.querySelector('tbody');
    tableBody.innerHTML = /* html*/ `
    ${body.map((row) => TableRow({ children: renderColumns(row) })).join('')}
    `;
  };

  const renderColumns = (row) => {
    return /* html*/ `
      ${row.map((column) => TableCell({ children: column })).join('')}
    `;
  };

  const initRef = () => {
    ref.current['refreshTable'] = refreshTable;
  };

  const refreshTable = (data) => {
    prepareRecords(data);
    renderRecords();
  };

  mounted(() => {
    dataTable = document.getElementById(_id);
    ref && initRef();
    refreshTable();
  });

  return /* html*/ `
    ${Table({
      id: _id,
      children: /* html*/ `
      ${TableHead({})}
      ${TableBody({})}
    `,
    })}
  `;
};
