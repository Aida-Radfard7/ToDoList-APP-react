import { LIST_ADD , LIST_DELETE , LIST_Edit , DND_UPDATE_LIST} from "../actions/actionTypes";

export const boardListAdd = (title , id) => ({
    type:LIST_ADD,
    payload:{title:title , id:id}
})

export const boardListEdit = (index , value , id) => ({
    type:LIST_Edit,
    payload:{index:index , value:value , id:id}
})

export const boardListDelete = (index) => ({
    type:LIST_DELETE,
    payload:index
})

export const updateListDND = (newList) =>({
    type:DND_UPDATE_LIST,
    payload:newList
})