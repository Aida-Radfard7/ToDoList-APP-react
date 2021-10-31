import { CHANGE_THEME , DARK_MODE } from "./actionTypes";

export const changeTheme = (color) =>({
    type :CHANGE_THEME,
    payload :color
})

export const setDarkMode = () =>({
    type:DARK_MODE
})