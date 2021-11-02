import React from 'react'
import '../assets/welcome.css';
import { useSelector } from "react-redux";


export const Welcome = ({isHide,isDark}) => {
  const login = useSelector((store) => store.loginState);

    return (
        <section className={isHide ? "main mt-5 hide-sideBar" :"main mt-5"}>
            <section className={isDark[1] ? "dark-welcome" :"welcome"}>
                <section className="welcome-img"></section>
                <h2 className="welcoming-text">Welcome {login[0].username}</h2>
            </section>
        </section>
    )
}
