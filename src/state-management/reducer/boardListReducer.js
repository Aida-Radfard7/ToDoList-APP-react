import { LIST_ADD , LIST_DELETE , LIST_Edit , DND_UPDATE_LIST} from "../actions/actionTypes";

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

        case DND_UPDATE_LIST:
            return [...action.payload];
            
        default:
            return state    
    }
}

export {boardListReducer}