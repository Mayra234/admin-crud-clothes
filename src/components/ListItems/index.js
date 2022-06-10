import { MenuItem } from '../MenuItem';

export const ListItems = ({ items = [] }) => {
  return /*html*/ `<div>${items
    .map((item) =>
      MenuItem({ text: item.text, icon: item.icon, route: item.route })
    )
    .join('')}</div>`;
};
