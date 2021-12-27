import { Action } from './personnel.creators'
import { ActionType } from './personnel.types'

interface RepositoriesState {
  loading: boolean;
  personnel: any | string[];
  companies: any | string[];
  error: string | null;
}


const initialState = {
  loading: true,
  personnel: [],
  companies: [],
  error: null,
}

//action:any
// interface Action {
//   type: string
//   payload?: any
// }

export const personnelReducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.PERSONNEL_TABLE_LOAD_USER_REQUEST:
      return {
        ...state,
        personnel: [],
        loading: true,
      }
    // case ActionType.PERSONNEL_TABLE_LOAD_COMPANIES_AND_PERSONNEL_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     companies: action.payload.company,
    //     personnel: action.payload.persons,
    //   }
    // // case types.PERSONNEL_TABLE_LOAD_USER_SUCCESS:
    // //     return {
    // //         ...state,
    // //         loading: false,
    // //         personnel: action.payload.persons
    // //     }
    // case ActionType.PERSONNEL_TABLE_ADD_USER_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     personnel: [...state.personnel, action.payload],
    //   }
    // case ActionType.PERSONNEL_TABLE_DELETE_USER_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     personnel: state.personnel.filter(
    //       (person) => person._id !== action.payload
    //     ),
    //   }
    // case ActionType.PERSONNEL_TABLE_DELETE_USER_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   }
    // case ActionType.PERSONNEL_TABLE_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   }
    default:
      return state
  }
}
