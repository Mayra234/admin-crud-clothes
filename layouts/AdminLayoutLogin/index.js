import './index.css';
import { LoginBox } from '../../components/LoginBox';
import { LoginBackground } from '../../components/LoginBackground';

export const AdminLayoutLogin = ({} = {}) => {
  return /*html */ `
    <div>
        ${LoginBackground({ children: LoginBox({ children: 'mayra' }) })}
    </div>
    `;
};
