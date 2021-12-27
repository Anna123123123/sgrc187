import * as types from './auth.types'
import axios from 'axios'
import $api from '../../api/http.axios'

// router.get('/users/', authorizedHeader, controller.getUsers);
// router.get('/activation/:link', controller.activation)
// router.get('/refresh', controller.refresh)
// router.post('/sign-up', controller.createUsers)
// router.post('/login', controller.login)
// router.post('/logout', controller.logout)
// router.delete('/users/', controller.deleteUsers)

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: types.LOGIN_REQUEST
        })

        const response = await $api.post('/api/login', { email, password })

        localStorage.setItem('token', response.data.accessToken)

        console.log('!response:', response)

        dispatch(
            {
                type: types.LOGIN_SUCCESS,
                payload: response.data.user
            })
        console.log(' response.data:', response.data)
        console.log('response.data.user', response.data.user)
        console.log('response.data.accessToken', response.data.accessToken)
    } catch (error) {
        console.log(error)
        dispatch({
            type: types.LOGIN_FAILED,

        })
    }
}


export const signup = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: types.SIGN_UP_REQUEST
        })

        const response = await $api.post('/api/sign-up', { email, password })

        localStorage.setItem('token', response.data.accessToken)

        dispatch(
            {
                type: types.SIGN_UP_SUCCESS,
                payload: response.data.user
            })
    } catch (error) {
        console.log(error)
        dispatch({
            type: types.SIGN_UP_FAILED,

        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: types.LOGOUT_REQUEST
        })

        await $api.post('/api/logout')

        localStorage.removeItem('token')

        dispatch(
            {
                type: types.LOGOUT_SUCCESS,

            })
    } catch (error) {
        console.log(error)
        dispatch({
            type: types.LOGOUT_FAILED,

        })
    }
}

export const checkAuth = () => async (dispatch) => {
    console.log('checkAuth')
    try {
        dispatch({
            type: types.CHECK_AUTH_REQUEST
        })

        const response = await axios.get('/api/refresh', { withCredentials: true })
        localStorage.setItem('token', response.data.accessToken)

        dispatch({
            type: types.CHECK_AUTH_SUCCESS,
            payload: response
        })
    } catch (error) {
        dispatch({
            type: types.CHECK_AUTH_FAILED,
            payload: error.response
        })
    }
}


// export const getUsers = () => async (dispatch) => {
//     try {
//         const response = await $api.get('/api/users')

//         dispatch({
//             type: types.GET_USERS_SUCCESS,
//             payload: response.data
//         })

//     } catch (err) {

//     }
// }
