import {LOGIN} from '../actions/actionTypes';

const loginReducer = function( state = [] , action){
    switch (action.type){
        case LOGIN:
            state.splice(0 , 1 , action.payload)
            return [...state];

        default:
            return state;    
    }
}

export {loginReducer}