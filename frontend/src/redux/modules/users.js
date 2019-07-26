// ACTIONS
import {GET_ALL} from "../actionTypes";

const MODULE_NAME = 'users/';
const GET_ALL_USERS = MODULE_NAME + GET_ALL;

// Initial state
const initialState = {
  employees: []
};

// Actions Creators
export function loadAllUsers() {
  return {type: GET_ALL_USERS};
}

export default function reducer(state = initialState, action) {
  //console.log(GET_ALL_USERS);
  //console.log('here we come', action);
  switch (action.type) {
    case GET_ALL_USERS:
      console.log('GETTING ALL ---->',action);
      return Object.assign({}, {employees: action.employees});
    default:
      return state;
  }
}
