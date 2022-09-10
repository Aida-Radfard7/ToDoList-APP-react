import { CHANGE_THEME , DARK_MODE } from "../actions/actionTypes";

const themeReducer = function( state = ["rgb(173, 29, 53)"] , action){
    switch (action.type){
        case CHANGE_THEME :
            state.splice(0 , 1 , action.payload)
            return [...state]

        case DARK_MODE :
            let dark = Boolean;
            {state[1] == true ? dark=false : dark=true}
            state.splice(1 , 1 , dark)
            return [...state]

        default :
            return state
    }
}

export {themeReducer}