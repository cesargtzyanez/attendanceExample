import {map} from "rxjs/operators";
import {combineEpics, ofType} from "redux-observable";
import axios from 'axios';
import {GET_ALL, GET_USER} from "../actionTypes";

const getAllUsersEpic = action$ =>
    action$.pipe(
        ofType(GET_ALL),
        map( async action => {
            axios.get('http://localhost:3000/users')
                .then(resp => {
                    console.log('resp', resp);
                    return Object.assign({}, action, { type: 'users/' + GET_ALL, resp });
                })
            //return { type: 'users/' + GET_ALL, employeesresp: resp}
        })
    );

const getUser = action$ =>
    action$.pipe(
        ofType(GET_USER),
        map(action => { return {type: 'users/' + GET_USER, action} })
    );

export const mainEpic = combineEpics(
  getAllUsersEpic
);
