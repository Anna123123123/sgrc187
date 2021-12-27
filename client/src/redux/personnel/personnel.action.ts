import { ActionType } from './personnel.types'
import axios from 'axios'
import { Dispatch } from 'redux'
import { Action } from './personnel.creators'


export const getPersonnel = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type: ActionType.PERSONNEL_TABLE_LOAD_USER_REQUEST
        })

        const { data } = await axios.get("/api/personnel")

        dispatch({
            type: ActionType.PERSONNEL_TABLE_LOAD_COMPANIES_AND_PERSONNEL_SUCCESS,
            payload: data
        })
    } catch (error: any) {
        dispatch({
            type: ActionType.PERSONNEL_TABLE_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


// export const personnelTableDelete = (id:any) => async (dispatch: Dispatch<Action>) => {
//     try {
//         dispatch({
//             type: ActionType.PERSONNEL_TABLE_LOAD_USER_REQUEST
//         })

//         await axios.delete(`/api/personnel/${id}`)

//         dispatch({
//             type: ActionType.PERSONNEL_TABLE_DELETE_USER_SUCCESS,
//             payload: id
//         })
//     } catch (error) {
//         dispatch({
//             type: ActionType.PERSONNEL_TABLE_DELETE_USER_FAILED,
//             dispatch: error.response
//         })
//     }
// }

// export const addPersonnel = (person) => async (dispatch) => {
//     try {
//         dispatch({
//             type: ActionType.PERSONNEL_TABLE_ADD_USER_REQUEST,
//         })

//         const { data } = await axios.post(`/api/personnel/`, person)

//         dispatch({
//             type: ActionType.PERSONNEL_TABLE_ADD_USER_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: ActionType.PERSONNEL_TABLE_FAILED,
//             dispatch: error.response
//         })
//     }
// }


// export const updatePersonnel = (id, updatePerson) => async (dispatch) => {
//     try {
//         dispatch({
//             type: ActionType.PERSONNEL_TABLE_UPDATE_USER_REQUEST,
//         })

//         const { data } = await axios.patch(`/api/personnel/${id}`, updatePerson)

//         dispatch(
//             {
//                 type: ActionType.PERSONNEL_TABLE_UPDATE_USER_SUCCESS,
//                 payload: data
//             })
//     } catch (error) {
//         dispatch({
//             type: ActionType.PERSONNEL_TABLE_FAILED,
//             dispatch: error.response
//         })
//     }
// }