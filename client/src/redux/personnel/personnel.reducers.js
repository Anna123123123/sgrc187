import * as types from './personnel.types'

const initialState = {
    loading: true,
    personnel: [],
    companies: [],
    error: null,
}

export const personnelReducer = (state = initialState, action
) => {
    switch (action.type) {
        case types.PERSONNEL_TABLE_LOAD_USER_REQUEST:
            return {
                ...state,
                personnel: [],
                loading: true,
            }
        case types.PERSONNEL_TABLE_LOAD_COMPANIES_AND_PERSONNEL_SUCCESS:
            return {
                ...state,
                loading: false,
                companies: action.payload.company,
                personnel: action.payload.persons,
            }
        // case types.PERSONNEL_TABLE_LOAD_USER_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         personnel: action.payload.persons
        //     }
        case types.PERSONNEL_TABLE_ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                personnel: [...state.personnel, action.payload],
            }
        case types.PERSONNEL_TABLE_DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                personnel: state.personnel.filter(
                    (person) => person._id !== action.payload
                ),
            }
        case types.PERSONNEL_TABLE_DELETE_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.PERSONNEL_TABLE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
