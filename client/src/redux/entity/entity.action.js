import * as types from './entity.types'
import axios from 'axios'


export const getEntity = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/api/company")
        dispatch(
            {
                type: types.ENTITY_TABLE_LOAD_SUCCESS,
                payload: data
            })
    } catch (error) {
        dispatch({
            type: types.ENTITY_TABLE_FAILED,
            dispatch: error.response
        })
    }
}


export const deleteEntity = (id) => async (dispatch) => {
    try {

        await axios.delete(`/api/company/${id}`)
        dispatch(
            {
                type: types.ENTITY_TABLE_DELETE_SUCCESS,
                payload: id
            })
    } catch (error) {
        dispatch({
            type: types.ENTITY_TABLE_FAILED,
            dispatch: error.response
        })
    }
}

export const addEntity = (person) => async (dispatch) => {
    try {

        const {data} = await axios.post(`/api/company/`, person)

        dispatch(
            {
                type: types.ENTITY_TABLE_ADD_SUCCESS,
                payload: data
            })
    } catch (error) {
        dispatch({
            type: types.ENTITY_TABLE_FAILED,
            dispatch: error.response
        })
    }
}


export const updateEntity = (id, updatePerson) => async (dispatch) => {
    try {

        const { data } = await axios.patch(`/api/company/${id}`, updatePerson)

        dispatch(
            {
                type: types.ENTITY_TABLE_UPDATE_SUCCESS,
                payload: data
            })
    } catch (error) {
        dispatch({
            type: types.ENTITY_TABLE_FAILED,
            dispatch: error.response
        })
    }
}