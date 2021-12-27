import * as types from './auth.types'

const initialState = {
    error: null,
    loading: false,
    isAuth: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                setUser: action.payload
            }
        case types.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case types.SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                setUser: action.payload
            }
        case types.SIGN_UP_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: false,
                setUser: []
            }
        case types.LOGOUT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.CHECK_AUTH_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.CHECK_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                setUser: action.payload
            }
        case types.CHECK_AUTH_FAILED:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        default:
            return state
    }
}




