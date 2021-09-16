import { CHANGE_THEME } from "../actions/actionTypes";

const themeReducer = function( state = [] ,action){
    switch (action.type){
        case CHANGE_THEME :
            state.splice(0 , 1 , action.payload)
            return [...state]

        default :
            return state
    }
}

export {themeReducer}