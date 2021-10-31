import {CARD_ADD , CARD_DELETE , CARD_LIST_DELETE , CARD_PRIORITY , CARD_EDIT} from './actionTypes';

export const cardAdd = (text , index , id , priority) =>({
    type:CARD_ADD,
    payload: { text:text , index:index , id:id , priority:priority}
})

export const cardDelete = (id) =>({
    type:CARD_DELETE,
    payload:id
})

export const cardEdit = (id , newText) =>({
    type:CARD_EDIT,
    payload:{id:id , newText:newText}
})

export const listCardsDelete = (index) =>({
    type:CARD_LIST_DELETE,
    payload:index
})

export const cardSetPriority = (priority , id) =>({
    type:CARD_PRIORITY,
    payload:{priority:priority , id:id }
})