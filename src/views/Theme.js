import React from "react";
import {useDispatch , useSelector} from 'react-redux'
import { changeTheme } from "../state-management/actions/themeAction";

export const Theme = () => {

  const theme = useSelector(store => store.themeState);
  const dispatch = useDispatch();

  const changeColor = (color) =>{
    dispatch(changeTheme(color))
  }   

  document.documentElement.style.setProperty('--background-color', theme[0]);
  document.documentElement.style.setProperty('--color', theme[0]);

  return (
    <>
      <section className="themes ">
        <a onClick={() => changeColor('rgb(173, 29, 53)')}><section id="red-theme" className="theme"></section></a>
        <a onClick={() => changeColor('rgb(128, 0, 96)')}><section id="purple-theme" className="theme"></section></a>
        <a onClick={() => changeColor('rgb(28, 143, 137)')}><section id="blue-theme" className="theme"></section></a>
        <a onClick={() => changeColor('rgb(16, 150, 67)')}><section id="green-theme" className="theme"></section></a>
      </section>
    </>
  );
};