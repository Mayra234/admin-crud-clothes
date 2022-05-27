import './index.css';

export const TableHead = ({ style = '', children = '' } = {}) => {
  return /*html */ `
    <thead style = '${style}'>${children}</thead>
    `;
};
