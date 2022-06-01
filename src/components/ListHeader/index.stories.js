import { TableHead } from './index';

export default {
  title: 'Components/TableHead',
};

export const Overview = () => /*html*/ `
  <div>
      <div>
          ${TableHead({
            headers: [
              { text: 'Nombre' },
              { text: 'Apellido' },
              { text: 'Edad' },
            ],
          })}
      </div>
  </div>
`;
