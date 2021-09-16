import {TODO_ADD , TODO_DELETE , TODO_EDIT, UPDATE_LIST} from '../actions/actionTypes';


const todoReducer = function(state = [] , action){
    switch (action.type) {
        case TODO_ADD:
            return [...state, action.payload];

        case TODO_DELETE:
            state.splice(action.payload , 1);
            return [...state];

        case TODO_EDIT:
            state.splice(action.payload.index , 1 , action.payload.value);
            return [...state];

        case UPDATE_LIST:
            return [...action.payload]    

        default:
            return state;
    }
};

export {todoReducer}