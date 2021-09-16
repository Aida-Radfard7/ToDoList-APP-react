import { CHANGE_THEME } from "./actionTypes";

export const changeTheme = (color) =>({
    type :CHANGE_THEME,
    payload :color
})