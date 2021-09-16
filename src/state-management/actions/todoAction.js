import {TODO_ADD , TODO_DELETE , TODO_EDIT , UPDATE_LIST} from '../actions/actionTypes';

export const todoAdd = (item) =>({
    type:TODO_ADD,
    payload:item
})

export const todoRemove = (index) =>({
    type:TODO_DELETE,
    payload:index
})

export const todoEdit = (index , value) =>({
    type:TODO_EDIT,
    payload: {index:index , value:value}
})

export const updateList = (newList) =>({
    type:UPDATE_LIST,
    payload:newList
})