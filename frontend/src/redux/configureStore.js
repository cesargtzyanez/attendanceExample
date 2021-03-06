import {createStore, applyMiddleware, combineReducers} from "redux";
import {createEpicMiddleware} from "redux-observable";
import {reducer as formReducer} from 'redux-form'
import {mainEpic} from "./epics";
import users from "./modules/users";

const epicMiddleware = createEpicMiddleware();

const reducer = combineReducers({
  users,
  form: formReducer
});

//const configureStore = (initialState) => createStore(reducer,initialState);
const configureStore = initialState => {
  const store = createStore(reducer,applyMiddleware(epicMiddleware));

  epicMiddleware.run(mainEpic);

  return store;
};

export default configureStore;

