import { AdminLayout } from '../layouts/AdminLayout';

export const routes = [
  {
    path: 'admin',
    element: AdminLayout,
    children: [{ path: 'route-1', element: () => `<h1>Hello world</h1>` }],
  },
];
