import { mainRoutes } from '../routes';

export const useNavigate = () => {
  const navigate = (path) => {
    _navigate(path);
  };

  const _navigate = (path, routes = mainRoutes, components = []) => {
    routes.forEach(() => {
      const foundRoute = routes.find((item) => item.path === path);
      components.push(foundRoute.element);
      if (foundRoute.children) {
        _navigate;
      } else {
      }
    });
  };

  return {
    navigate,
  };
};

/**
 *
 * foundRoute.element({children: foundRoute.children() })
 *
 */
