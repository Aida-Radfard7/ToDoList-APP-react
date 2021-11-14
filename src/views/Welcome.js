import React ,{useEffect} from 'react'
import '../assets/welcome.css';
import { useSelector } from "react-redux";


export const Welcome = ({isHide,isDark}) => {

    useEffect(() => {
        typeText();
    }, [])

  const login = useSelector((store) => store.loginState);
  console.log(login)
  let welcomeText = `Welcome ${login[0].username}`;
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
        <section className={isHide ? "main hide-sideBar" :"main"}>
            <section className={isDark[1] ? "welcome dark-welcome" :"welcome"}>
                <section className="welcome-img"></section>
                <h2 className="welcoming-text" id="welcome-text"></h2>
            </section>
        </section>
    )
}
