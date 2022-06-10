import { AdminLayout } from '../layouts/AdminLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { View1 } from '../pages/View1';
import { View2 } from '../pages/View2';
import { Clothes } from '../pages/Clothes';

export const routes = [
  { path: '/auth', component: () => AuthLayout({ children: View2() }) },
  { path: '/admin', component: () => AdminLayout({ children: View1() }) },
  { path: '/clothes', component: () => AdminLayout({ children: Clothes() }) },
  { path: '/employees', component: () => AdminLayout({ children: View2() }) },
];
