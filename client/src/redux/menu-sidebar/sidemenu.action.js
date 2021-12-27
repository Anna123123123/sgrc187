import * as types from './sidemenu.types'

export const toggleSidebarMenu = () => async (dispatch) => {
    dispatch({
        type: types.SIDEBAR_MENU_TOGGLE
    })
}