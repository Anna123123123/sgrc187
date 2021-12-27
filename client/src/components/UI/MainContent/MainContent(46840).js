import { Footer } from '../Footer/Footer'
import { useSelector } from 'react-redux'
import './MainContent.styles.scss'
import { Personnel } from '../../../pages/assets/personnel/Personnel'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from '../../../pages/home/HomePage'
import { Equipments } from '../../../pages/assets/equipments/Equipments'
import { ItAssets } from '../../../pages/assets/it-assets/ItAssets'
import { Entity } from '../../../pages/overview/entity/Entity'
import UpdatableEdge from '../../../pages/workflow/process-grading/ProcessGrading'
import { Activities } from '../../../pages/assets/activities/Activities'
import { CategorizationCommission } from '../../../pages/workflow/categorization-commission/СategorizationСommission'
import { AuthPage } from '../../../pages/auth/AuthPage'

export const MainContent = () => {

    const sidebarMenu = useSelector(state => state.sidebarMenu)
    const { hidden } = sidebarMenu

    return (
        <div className={hidden ? `view-wrapper` : `is-pushed-full view-wrapper`}>
            <div className="page-content-wrapper">
                <main className="page-content">
                    <Switch>

                        <Route exact path='/' render={() => <HomePage />} />
                        {/* assets */}
                        <Route exact path='/assets/personnel' component={() => <Personnel />} />
                        <Route exact path='/assets/equipments' component={() => <Equipments />} />
                        <Route exact path='/assets/it-assets' component={() => <ItAssets />} />
                        <Route exact path='/overview/entity' component={() => <Entity />} />
                        <Route exact path='/assets/activities' component={() => <Activities />} />
                        <Route exact path='/assets/equipments' component={() => <Equipments />} />

                        {/* workflow */}
                        <Route exact path='/workflow/process-grading' component={() => <UpdatableEdge />} />
                        <Route exact path='/workflow/categorization-commission' component={() => <CategorizationCommission />} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </div>
    )
}