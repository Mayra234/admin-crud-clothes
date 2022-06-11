import { AdminLayout } from '../layouts/AdminLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { Login } from '../pages/Login';
import { Employees } from '../pages/Employees';
import { Clothes } from '../pages/Clothes';
import { Companies } from '../pages/Companies';
import { Dashboard } from '../pages/Dashboard';
import { Materials } from '../pages/Materials';

export const routes = [
  { path: '/login', component: () => AuthLayout({ children: Login() }) },
  {
    path: '/dashboard',
    component: () => AdminLayout({ children: Dashboard() }),
  },
  { path: '/clothes', component: () => AdminLayout({ children: Clothes() }) },
  {
    path: '/companies',
    component: () => AdminLayout({ children: Companies() }),
  },
  {
    path: '/employees',
    component: () => AdminLayout({ children: Employees() }),
  },
  {
    path: '/materials',
    component: () => AdminLayout({ children: Materials() }),
  },
];
