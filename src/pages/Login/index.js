import './index.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Login = () => {
  return /*html */ `
    <div class='header-login text-center'>
      <h4>Iniciar Sesión</h4>
      <p>
        Ingrese su dirección de correo electrónico y contraseña para
        acceder al panel de administración.
      </p>
    </div>
    <form>
      <div class='field'>
      ${Input({
        label: 'Dirección email',
        name: 'email',
        type: 'email',
        placeholder: 'Introduce tu correo electrónico',
        className: 'control-email',
      })}
      </div>
      <div class='field'>
        <a href="" class='float'>
          <small>¿Olvidaste la contraseña?</small>
        </a>
        ${Input({
          label: 'Contraseña',
          placeholder: 'Introduce tu contraseña',
          type: 'password',
          name: 'password',
          className: 'control-password',
        })}
        <div class='icon'>
          <span><i class="fa-solid fa-eye"></i></span>
        </div>
      </div>
      <div class='field'>
        <div class='form-check'>
          ${Input({ label: 'Recordar', type: 'checkbox', name: 'checkbox' })}
        </div>
      </div>
      <div class='field text-center'>
        ${Button({ id: 'submit', children: 'Iniciar sesión' })}
      </div>
    </form>
    
  `;
};
