import { useSelector } from 'react-redux'
import { Footer } from '../Footer/Footer'
import "./MainContent.styles.scss"
export const MainContent = ({ children }) => {

    const sidebarMenu = useSelector(state => state.sidebarMenu)
    const { hidden } = sidebarMenu

    return (
        <div className={hidden ? `view-wrapper` : `is-pushed-full view-wrapper`}>
            <div className="page-content-wrapper">
                <main className="page-content">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}