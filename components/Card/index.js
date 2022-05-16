import './index.css';

export const Card = ({ style = '', content = '' }) => {
  return /*html*/ `
  <div>
    <div id="card" style="${style}">
      <div class="body-card">${content}</div>
    </div>
  </div>
`;
};
