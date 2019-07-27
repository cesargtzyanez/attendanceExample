import axios from "axios";
// ACTIONS
import {GET_ALL} from "../actionTypes";

const MODULE_NAME = 'users/';
const GET_ALL_USERS = MODULE_NAME + GET_ALL;

// Initial state
const initialState = {
  employees: []
};

// Actions Creators
export async function loadAllUsers() {
  return await axios.get('http://localhost:3000/users')
      .then(resp => resp)
      .catch(error => error);
}

export default function reducer(state = initialState, action) {
  console.log('STATE CHANGED:', action);
  switch (action.type) {
    case GET_ALL_USERS:
      console.log('GETTING ALL ---->',action);
      return Object.assign({}, {employees: []});
    default:
      return state;
  }
}
