import * as types from './itAssets.types'

const initialState = {
    loading: true,
    error: null,
    assets: []
}
// const INITIAL_STATA = {
//     assets: []
// }

export const assetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.IT_ASSETS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.IT_ASSETS_TABLE_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                assets: action.payload
            }
        case types.IT_ASSETS_TABLE_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                assets:[...state.assets, action.payload]
            }
        case types.IT_ASSETS_TABLE_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                assets: state.assets.filter(asset => asset._id !== action.payload)
            }
        

            case types.IT_ASSETS_TABLE_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                assets: state.assets.map(asset => asset._id === action.payload._id ? action.payload : asset)
            }
            case types.IT_ASSETS_TABLE_FAILED:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        default:
            return state
    }
}
