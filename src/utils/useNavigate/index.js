import { routes } from '../routes';

export const useNavigate = () => {
  const root = document.getElementById('root');

  //Realiza el history push
  const navigate = (path) => {
    window.history.pushState(null, '', path);
    render(path);
  };

  const render = (path) => {
    const foundRoute = routes.find((route) => route.path === path);
    root.innerHTML = foundRoute.component();
  };

  //Escucha los botones de atrás y adelante del navegador
  window.addEventListener('popstate', () => {
    const pathname = window.location.pathname;
    render(pathname);
  });

  return {
    navigate,
  };
};
