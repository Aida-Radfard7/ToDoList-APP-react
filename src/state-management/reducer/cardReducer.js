import {CARD_ADD , CARD_DELETE , CARD_LIST_DELETE , CARD_PRIORITY , CARD_EDIT , DND_CARD_UPDATE} from '../actions/actionTypes';

const cardReducer = function(state=[] , action){
    switch(action.type){
        case CARD_ADD:
            return [...state , action.payload];
        
        case CARD_DELETE:
            state.splice(state.findIndex(item => item.id == action.payload) , 1);
            return [...state];

        case CARD_EDIT:
            state.filter(item => item.id == action.payload.id)[0].text = action.payload.newText;
            return [...state];

        case CARD_LIST_DELETE:
            let toRemove = state.filter(item => item.index == action.payload );
            state = state.filter((item) => !toRemove.includes(item));
            let X = state.filter(item => item.index > action.payload);
            X.map(item => item.index -= 1)
            return [...state];

        case CARD_PRIORITY:
            state.filter(item => item.id == action.payload.id)[0].priority = action.payload.priority;
            return [...state];

        case DND_CARD_UPDATE:
            return [...action.payload];
            
        default:
            return state;
    }
}

export {cardReducer}