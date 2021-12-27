import * as types from './equipments.types'

const initialState = {
    error:null,
    loading:true,
    equipments: []
}

export const equipmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EQUIPMENTS_TABLE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.EQUIPMENTS_TABLE_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                equipments: action.payload
            }
        case types.EQUIPMENTS_TABLE_DELETE_SUCCESS:
            return {
                ...state,
                loading:false,
                equipments: state.equipments.filter(equipment => equipment._id !== action.payload)
            }
        case types.EQUIPMENTS_TABLE_ADD_SUCCESS:
            return {
                ...state,
                loading:false,
                equipments: [...state.equipments, action.payload]
            }
        case types.EQUIPMENTS_TABLE_UPDATE_SUCCESS:
            return {
                ...state,
                loading:false,
                equipments:state.equipments.map(equipment => equipment._id === action.payload._id ? action.payload : equipment)
            }
            
        case types.EQUIPMENTS_TABLE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}




