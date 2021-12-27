import { ActionType } from './personnel.types'
// interface Action {
//   type: string
//   payload?: any
// }

export type Action =
    | PersonnelTableLoadUserRequest
    | PersonnelTableLoadCompaniesAndPersonnelSuccess
    | PersonnelTableAddUserSuccess
    | PersonnelTableFailed


interface PersonnelTableLoadUserRequest {
    type: 'PERSONNEL_TABLE_LOAD_USER_REQUEST'
}

interface PersonnelTableLoadCompaniesAndPersonnelSuccess {
    type: 'PERSONNEL_TABLE_LOAD_COMPANIES_AND_PERSONNEL_SUCCESS'
    payload: string[]
}

interface PersonnelTableAddUserSuccess {
    type: 'PERSONNEL_TABLE_ADD_USER_SUCCESS'
    payload: string[]
}


interface PersonnelTableFailed {
    type: 'PERSONNEL_TABLE_FAILED',
    payload: string[]
}




