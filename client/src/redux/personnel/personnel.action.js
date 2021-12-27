import * as types from './personnel.types'
import axios from 'axios'


export const getPersonnel = () => async (dispatch) => {
    try {
        dispatch({
            type: types.PERSONNEL_TABLE_LOAD_USER_REQUEST
        })

        const { data } = await axios.get("/api/personnel")

        dispatch({
            type: types.PERSONNEL_TABLE_LOAD_COMPANIES_AND_PERSONNEL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.PERSONNEL_TABLE_FAILED,
            dispatch: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const personnelTableDelete = (id) => async (dispatch) => {
    try {
        dispatch({
            type: types.PERSONNEL_TABLE_LOAD_USER_REQUEST
        })

        await axios.delete(`/api/personnel/${id}`)

        dispatch({
            type: types.PERSONNEL_TABLE_DELETE_USER_SUCCESS,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: types.PERSONNEL_TABLE_DELETE_USER_FAILED,
            dispatch: error.response
        })
    }
}

export const addPersonnel = (person) => async (dispatch) => {
    try {
        dispatch({
            type: types.PERSONNEL_TABLE_ADD_USER_REQUEST,
        })

        const { data } = await axios.post(`/api/personnel/`, person)

        dispatch({
            type: types.PERSONNEL_TABLE_ADD_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.PERSONNEL_TABLE_FAILED,
            dispatch: error.response
        })
    }
}


export const updatePersonnel = (id, updatePerson) => async (dispatch) => {
    try {
        dispatch({
            type: types.PERSONNEL_TABLE_UPDATE_USER_REQUEST,
        })

        const { data } = await axios.patch(`/api/personnel/${id}`, updatePerson)

        dispatch(
            {
                type: types.PERSONNEL_TABLE_UPDATE_USER_SUCCESS,
                payload: data
            })
    } catch (error) {
        dispatch({
            type: types.PERSONNEL_TABLE_FAILED,
            dispatch: error.response
        })
    }
}