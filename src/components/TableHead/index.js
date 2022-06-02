import './index.css';

export const TableHead = ({ style = '', children = '' }) => {
  return /*html*/ `
    <thead class="thead" style='${style}'>${children}</thead>
  `;
};
