import { useSelector } from 'react-redux'
import { VerticalMenu } from '../../VerticalMenu/VerticalMenu'
import './SidebarMenu.styles.scss'

export const SidebarMenu = () => {
    const sidebarMenu = useSelector(state => state.sidebarMenu)
    const { hidden } = sidebarMenu

    return (
        <div id="sidebar-menu" className={hidden ? `sidebar-panel` : `is-active sidebar-panel`}>
            <div className="subpanel-header">
                <h1>Меню</h1>
            </div>
            <div>
                <VerticalMenu />
            </div>
        </div>
    )
}