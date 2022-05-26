import './index.css';
import { LoginBox } from '../../components/LoginBox';

export const AdminLayoutLogin = ({} = {}) => {
  return /*html */ `
    <div>
        ${LoginBox({ children: 'mayra' })}
    </div>
    `;
};
