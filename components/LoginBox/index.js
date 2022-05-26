import './index.css';

export const LoginBox = ({ children = '' } = {}) => {
  return /*html */ `
    <div class='account-page'>
        <div class='container-page'>${children}</div>
    </div>
    `;
};
