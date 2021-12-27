import * as types from './activities.types'
import axios from 'axios'


export const getActivities = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/api/activities")
        dispatch({
            type: types.ACTIVITIES_TABLE_LOAD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.ACTIVITIES_TABLE_FAILED,
            dispatch: error.response
        })
    }
}


export const deleteActivities = (id) => async (dispatch) => {
    try {

        await axios.delete(`/api/activities/${id}`)
        dispatch({
            type: types.ACTIVITIES_TABLE_DELETE_SUCCESS,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: types.ACTIVITIES_TABLE_FAILED,
            dispatch: error.response
        })
    }
}

export const addActivities = (person) => async (dispatch) => {
    try {

        const { data } = await axios.post(`/api/activities/`, person)

        dispatch({
            type: types.ACTIVITIES_TABLE_ADD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.ACTIVITIES_TABLE_FAILED,
            dispatch: error.response
        })
    }
}


export const updateActivities = (id, updateActivity) => async (dispatch) => {
    try {

        const { data } = await axios.patch(`/api/activities/${id}`, updateActivity)

        dispatch({
            type: types.ACTIVITIES_TABLE_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.ACTIVITIES_TABLE_FAILED,
            dispatch: error.response
        })
    }
}