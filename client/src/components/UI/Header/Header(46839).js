import { Link } from 'react-router-dom'
import './Header.styles.scss'

export const Header = () => {
    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="left-flex">
                    <div className="navbar-brand-box">
                        <Link to="/" className="logo">
                            <span className="logo-lg">
                                <h1>SGRC КИИ</h1>
                            </span>
                        </Link>
                    </div>
                    <div>
                        {/* breadcrumbs */}
                    </div>

                </div>
                <div className="right-flex"></div>
            </div>
        </header>
    )
}