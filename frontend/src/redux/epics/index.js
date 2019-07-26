import {mapTo,map} from "rxjs/operators";
import {combineEpics, ofType} from "redux-observable";
import {GET_ALL} from "../actionTypes";

const getAllUsersEpic = action$ =>
    action$.pipe(
        ofType(GET_ALL),
        map( action => {return { type: 'users/' + GET_ALL, employees: action.employees}})
    );

export const mainEpic = combineEpics(
  getAllUsersEpic
);
