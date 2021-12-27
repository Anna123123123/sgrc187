import { combineReducers } from "redux";
import { personnelReducer } from './personnel/personnel.reducers'
import { assetsReducer } from './itAssets/itAssets.reducer'
import { entityReducer } from './entity/entity.reducers'
import { activitiesReducer } from './activities/activities.reducers'
import { equipmentsReducer } from './equipments/equipments.reducers'
import { sidebarMenuReducer } from './menu-sidebar/sidemenu.reducers'
import { authReducer } from './auth/auth.reducer'

export default combineReducers({
  personnelList: personnelReducer,
  assetsList: assetsReducer,
  entityList: entityReducer,
  activityList: activitiesReducer,
  equipmentsList: equipmentsReducer,
  sidebarMenu: sidebarMenuReducer,
  authService: authReducer
});