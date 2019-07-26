import {createStore, applyMiddleware, combineReducers} from "redux";
import users from "./modules/users";

const reducer = combineReducers({
  users
});

const configureStore = (initialState) => createStore(reducer,initialState);

export default configureStore;

