import * as types from './sidemenu.types'

const initialState = {
    hidden: true
}

export const sidebarMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIDEBAR_MENU_TOGGLE:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}