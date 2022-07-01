import { DataTable } from './index';
import { Button } from '../Button';
import { useRef } from '../../utils/useRef';

export default {
  title: 'Components/DataTable',
};

export const Overview = () => {
  const dataTableRef = useRef();

  const refreshTable = () => {
    dataTableRef.current.refreshTable([
      {
        id: 1,
        firstName: 'José',
        secondName: 'Alberto',
        lastName: 'Gómez',
      },
      {
        id: 2,
        firstName: 'Andrea',
        secondName: 'Carolina',
        lastName: 'López',
      },
      {
        id: 3,
        firstName: 'Andrea',
        secondName: 'Carolina',
        lastName: 'López',
      },
    ]);
  };

  return /*html*/ `
  <div>
    <div>
      ${Button({ onClick: refreshTable, children: 'Refresh Table' })}
      ${DataTable({
        ref: dataTableRef,
        data: [
          {
            id: 1,
            firstName: 'María',
            secondName: 'Angelica',
            lastName: 'Diavanera',
          },
          {
            id: 2,
            firstName: 'Mayra',
            secondName: 'Alejandra',
            lastName: 'Diavanera',
          },
        ],
      })}
    </div>
  </div>
`;
};
