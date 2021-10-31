import {LOGIN} from '../actions/actionTypes';

export const setLogin = (username , email) =>({
    type:LOGIN,
    payload:{username:username , email:email}
})