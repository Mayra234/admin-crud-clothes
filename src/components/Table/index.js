import './index.css';

export const Table = ({ children = '' } = {}) => {
  return /*html */ `
    <table class="table">${children}</table>
  `;
};
