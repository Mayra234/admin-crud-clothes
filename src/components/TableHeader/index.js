import './index.css';

export const TableHeader = ({ style = '', children = '' }) => {
  return /*html*/ `
    <th class="th" style="${style}">${children}</th>
  `;
};
