import './index.css';

export const Footer = ({ children = '', style = '' }) => {
  return /*html*/ `
  <footer style="${style}">${children}</footer>
`;
};
