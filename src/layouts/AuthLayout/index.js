import './index.css';
import { Card } from '../../components/Card';

export const AuthLayout = ({ children } = {}) => {
  return /*html */ `
    <div class='auth-background'>
      ${Card({
        children,
        style: 'max-width: 375px; height: 575px; width: 100%;',
      })}
    </div>
  `;
};
