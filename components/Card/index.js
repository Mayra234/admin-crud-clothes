import './index.css';

export const Card = ({ style = '', children = '' }) => {
  return /*html*/ `
    <div class="card" style="${style}">
      <div class="body-card">${children}</div>
    </div>
`;
};
