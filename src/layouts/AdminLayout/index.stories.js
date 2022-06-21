import { AdminLayout } from './index';

export default {
  title: 'Layouts/AdminLayout',
};

export const Overview = () =>
  /*html*/ AdminLayout({
    children: /*html */ `<div style='height: 500px; background: pink'></div>`,
  });
