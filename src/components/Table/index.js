import './index.css';

export const Table = ({ children = '', style = '' } = {}) => {
  return /*html */ `
    <table style=${style} class="table">${children}</table>
  `;
};
