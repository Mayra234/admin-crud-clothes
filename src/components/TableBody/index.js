import './index.css';

export const TableBody = ({ style = '', children = '' } = {}) => {
  return /*html*/ `
    <tbody class="tbody" style='${style}'>${children}</tbody>
  `;
};
