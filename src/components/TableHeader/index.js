import './index.css';

export const TableHeader = ({
  style = '',
  children = '',
  toUpperCase = '',
}) => {
  return /*html*/ `
    <th class="th" style="${style}">${
    toUpperCase ? children.toUpperCase() : children
  }</th>
  `;
};
