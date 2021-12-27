import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PageTitle.styles.scss';
import { toggleSidebarMenu } from '../../redux/menu-sidebar/sidemenu.action';
import { MenuToggleEqually, MenuToggleCross } from './PageTitle.styles';

type StateSidebarMenu = {
  sidebarMenu: any;
};

export const PageTitle: FC = () => {
  // const [menuSidebar, toggleMenuSidebar] = useState()
  const dispatch = useDispatch();

  const sidebarMenu = useSelector(
    (state: StateSidebarMenu) => state.sidebarMenu
  );

  const { hidden } = sidebarMenu;

  return (
    <div className='page-title has-text-centered'>
      <div
        className='hamburger-title'
        onClick={() => dispatch(toggleSidebarMenu())}
      >
        {hidden ? <MenuToggleEqually /> : <MenuToggleCross />}
      </div>
      <div className='title-wrap'>
        <h1 className='title is-4'>Главная</h1>
      </div>
      <div className='toolbar ml-auto'>
        <div className='toolbar-link'>
          <span></span>
        </div>
        <div className='toolbar-link'>
          <span></span>
        </div>
        <div className='toolbar-link'>
          <span></span>
        </div>
      </div>
    </div>
  );
};
