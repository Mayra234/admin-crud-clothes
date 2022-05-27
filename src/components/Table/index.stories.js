import { Table } from './index';

export default {
  title: 'Components/Table',
};

export const Overview = () => /*html*/ `
  <div>
      <div>
        ${Table({ style: 'border: 1px solid gray' })}
      </div>
  </div>
`;
