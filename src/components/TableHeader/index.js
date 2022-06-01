import './index.css';

export const TableHeader = ({ style = '', text = '' }) => {
  return /*html*/ `
    <th style="${style}">${text.toUpperCase()}</th>
  `;
};
