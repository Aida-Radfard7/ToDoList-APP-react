import { LIST_ADD , LIST_DELETE , LIST_Edit } from "../actions/actionTypes";

const boardListReducer = function(state=[] , action){
    switch(action.type){
        case LIST_ADD:
            return [...state , action.payload];

        case LIST_DELETE:
            state.splice(action.payload , 1);
            return [...state];
        
        case LIST_Edit: 
            state.splice(action.payload.index , 1 , action.payload.value);
            return [...state]; 
              
        default:
            return state    
    }
}

export {boardListReducer}