import * as types from './entity.types'

// const INITIAL_STATA = {
//     personnel: []
// }

export const entityReducer = (entity = [], action) => {
    switch (action.type) {

        case types.ENTITY_TABLE_LOAD_SUCCESS:
            return action.payload
        case types.ENTITY_TABLE_DELETE_SUCCESS:
            return entity.filter(person => person._id !== action.payload)
        case types.ENTITY_TABLE_ADD_SUCCESS:
            return [...entity, action.payload]
        case types.ENTITY_TABLE_UPDATE_SUCCESS:
            return entity.map(person => person._id === action.payload._id ? action.payload : person)
        case types.ENTITY_TABLE_FAILED:
            return entity
        default:
            return entity
    }
}




