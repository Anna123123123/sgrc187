import './Home.styles.scss'
import { ContentLayout } from '../../components/UI/ContentLayout/ContentLayout'
import { Layout } from '../../components/UI/Layout/Layout';
import {
    Routes,
    Route,
} from 'react-router-dom';
import { Equipments } from '../../pages/assets/equipments/Equipments';
import { ItAssets } from '../../pages/assets/it-assets/ItAssets';
import { Entity } from '../../pages/overview/entity/Entity';
import UpdatableEdge from '../../pages/workflow/process-grading/ProcessGrading';
import { Activities } from '../../pages/assets/activities/Activities';
import { CategorizationCommission } from '../../pages/workflow/categorization-commission/СategorizationСommission';
import { EquipmentsInfo } from '../../pages/assets/equipments/EquipmentsInfo/EquipmentsInfo';
import { Personnel } from '../../pages/assets/personnel/Personnel';

export const HomePage = () => {
    return (
        <>
            <Layout>
                <ContentLayout>
                    <Routes>
                        <Route
                            path={`/assets/personnel`}
                            element={<Personnel />}
                        />
                        <Route

                            path='/assets/equipments'
                            element={<Equipments />}
                        />

                        {/* <Route path='/:id/all'>
                            <EquipmentsInfo />
                        </Route> */}

                        <Route
                            exact
                            path='/assets/it-assets'
                            element={<ItAssets />}
                        />
                        <Route
                            exact
                            path='/overview/entity'
                            element={<Entity />}
                        />
                        <Route
                            exact
                            path='/assets/activities'
                            element={<Activities />}
                        />
                        <Route
                            exact
                            path='/assets/equipments'
                            element={<Equipments />}
                        />

                        <Route
                            exact
                            path='/workflow/process-grading'
                            element={<UpdatableEdge />}
                        />
                        <Route
                            exact
                            path='/workflow/categorization-commission'
                            element={<CategorizationCommission />}
                        />
                    </Routes>
                </ContentLayout>
            </Layout>

        </>
    )
}