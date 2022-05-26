import './index.css';

export const TableBody = ({ style = '', children = '' } = {}) => {
  return /*html*/ `
  <tbody style=${style}>${children}</tbody>
  `;
};
