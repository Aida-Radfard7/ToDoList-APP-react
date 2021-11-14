import React ,{useEffect} from 'react'
import '../assets/welcome.css';
import { useSelector } from "react-redux";


export const Welcome = ({isHide,isDark}) => {

    useEffect(() => {
        typeText();
    }, [])

  const login = useSelector((store) => store.loginState);
  let welcomeText = `Welcome ${login.username}`;
  var text = welcomeText.split("")
 
    function typeText() {
        var i = 0;
        var paragText = "";
        var interval = setInterval(function () {
            var parag = document.getElementById("welcome-text");
            paragText += text[i];
            parag.innerText = paragText;
            i++;
            if (text.length == i)
                clearInterval(interval);
        }, 300)
    }

    return (
        <section className={isHide ? "main mt-5 hide-sideBar" :"main mt-5"}>
            <section className={isDark[1] ? "dark-welcome" :"welcome"}>
                <section className="welcome-img"></section>
                <h2 className="welcoming-text" id="welcome-text"></h2>
            </section>
        </section>
    )
}
