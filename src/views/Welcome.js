import React from 'react'
import '../assets/welcome.css';
import { useSelector } from "react-redux";


export const Welcome = () => {
  const login = useSelector((store) => store.loginState);

    return (
        <section className="main mt-5">
            <section className="welcome">
                <section className="welcome-img"></section>
                <h2 className="welcoming-text">Welcome {login[0].username}</h2>
            </section>
        </section>
    )
}
