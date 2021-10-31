import {combineReducers} from 'redux';
import {todoReducer} from './todoReducer';
import {themeReducer} from './themeReducer';
import {boardListReducer} from './boardListReducer'
import {cardReducer} from './cardReducer'
import { loginReducer } from './loginReducer';


export default combineReducers({
    todoState : todoReducer,
    themeState : themeReducer,
    boardListState : boardListReducer,
    cardState : cardReducer,
    loginState : loginReducer
})