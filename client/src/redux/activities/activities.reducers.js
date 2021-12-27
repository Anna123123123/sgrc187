import * as types from './activities.types'

const initialState = {
    loading: true,
    error: null,
    activities: []
}

export const activitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ACTIVITIES_TABLE_LOAD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.ACTIVITIES_TABLE_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                activities: action.payload
            }
        case types.ACTIVITIES_TABLE_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                activities: state.activities.filter(activity => activity._id !== action.payload)
            }
        case types.ACTIVITIES_TABLE_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                activities: [...state.activities, action.payload]
            }
        case types.ACTIVITIES_TABLE_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                activities: state.activities.map(activity => activity._id === action.payload._id ? action.payload : activity)
            }
        case types.ACTIVITIES_TABLE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}




