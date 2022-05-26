import './index.css';

export const Select = ({ children = '', validation = '', array = [] } = {}) => {
  return /*html*/ `
  <select class='form-control' >
    <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option value="coconut">Coconut</option>
    <option value="mango">Mango</option>
  </select>
  `;
};
