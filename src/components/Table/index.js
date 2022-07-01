import { useId } from '../../utils/useId';
import './index.css';

export const Table = ({ id = '', children = '', style = '' } = {}) => {
  const _id = id || useId();

  return /*html */ `
    <table id="${_id}" style="${style}" class="table">${children}</table>
  `;
};
