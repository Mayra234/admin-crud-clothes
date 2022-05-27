import './index.css';

export const LoginBackground = ({ children = '' } = {}) => {
  return /*html */ `
    <div class='login-background'>${children}</div>
    `;
};
