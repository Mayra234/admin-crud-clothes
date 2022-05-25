import './index.css';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { ListItems } from '../../components/ListItems';
import { Content } from '../../components/Content';
import { SIDEBAR_MENU } from '../../constants/menus';

export const AdminLayout = () => {
  return /*html */ `<div class="admin-layout">
    <div>
      ${Header({ children: Navbar() })}
    </div>
    <div class="main-container">
      <div>
        ${Sidebar({ children: ListItems({ items: SIDEBAR_MENU }) })}
      </div>
      <div>${Content({ children: `Hello world` })}</div>
    </div>
  </div>`;
};
