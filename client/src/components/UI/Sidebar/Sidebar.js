import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import "./Sidebar.styles.scss"
import Button from "../../../components/Button/Button"
import logo from "../../../images/atom-svg.svg"
import Sun from "../../../images/sun.svg"
import { FiActivity } from "react-icons/fi"
import { FiAlertTriangle } from "react-icons/fi"
import { FiClock } from "react-icons/fi"
import { FiDatabase } from "react-icons/fi"
import { logout } from "../../../redux/auth/auth.action"

export const Sidebar = () => {
    const dispatch = useDispatch();
    const SideBarComponent = () => {
        try {
            return (
                <aside className="main-sidebar sidebar-fixed">
                    <div className="sidebar-brand">

                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="sidebar-inner">
                        <ul className="icon-menu">
                            <li>
                                <Link to="">
                                    <FiActivity className="sidebar-svg router-link-active" />
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <FiClock className="sidebar-svg" />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="disable">
                                    <FiAlertTriangle className="sidebar-svg disable" />
                                </Link>
                            </li>
                        </ul>

                        <ul>
                            <Button onClick={() => dispatch(logout())}>Выйти</Button>
                        </ul>
                        <ul className="bottom-menu">
                            {/* <li>
                        <img src={Sun} onClick={toggleTheme} />
                    </li> */}
                            <li>
                                <Link to="">
                                    <FiDatabase className="sidebar-svg disable" />
                                </Link>
                            </li>
                            <li id="user-menu">
                                <div id="profile-menu" className="dropdown">
                                    <img />
                                    <span className="status-indicator"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            )
        } catch (err) {
            return err

        }
    }

    return <SideBarComponent />
}