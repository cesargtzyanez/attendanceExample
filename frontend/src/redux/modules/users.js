// ACTIONS
const MODULE_NAME = 'users/';
const LOAD_ALL = MODULE_NAME + 'LOAD_ALL';

// Initial state
const initialState = {
  employees: []
};

// Actions Creators
export function loadAllUsers() {
  return {type: LOAD_ALL};
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL:
      return Object.assign({}, {...state, employees: action.employees});
    default:
      return state;
  }
}
