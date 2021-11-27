import {React , useState} from "react";
import "../assets/layout.css";
import "../assets/inbox.css";
import { Inbox } from "../views/Inbox";
import { Switch, Route, Link } from "react-router-dom";
import { SideBar } from "../views/SideBar";
import { AddToDoBox } from "../views/AddToDoBox";
import { PageTitle } from "../views/PageTitle";
import { Theme } from "../views/Theme";
import { Board } from "../views/Board/Board";
import { useSelector } from "react-redux";
import { Welcome } from "../views/Welcome";
import { CurrentTime } from "../component/CurrentTime";
import { SearchToDo } from "../component/SearchToDo";


export const Layout = () => {

  const [isHide , setIsHide] = useState(false);
  const login = useSelector((store) => store.loginState);
  const dark = useSelector(store => store.themeState);

  var board = window.location.href == "http://localhost:3000/board";

  function hideAndShowMenu() {
    const aside = document.getElementById("aside");
    const menuTooltip = document.getElementById("menu-tooltip");
    if (aside.style.display === "none") {
        aside.style.display = "block";
        menuTooltip.innerHTML = "Close Menu";
        setIsHide(false)
    } else {
        aside.style.display = "none";
        menuTooltip.innerHTML = "Open Menu";
        setIsHide(true);
    }
  }

  return (
    <>
      <PageTitle title="To do list" />
      <section className={dark[1] == true ? "todolist-app content-bg-dark" : "todolist-app "}>
        <section className="app-holder">
          <section className="navbar navbar-expand px-5 mb-0 d-flex align-items-center justify-content-between position-fixed">
            <section className="header-nav-left-side d-flex align-items-center p-0">
              <ul className="d-flex align-items-center mb-0 p-0">
                <li className="nav-tooltip">
                  <Link onClick={() => hideAndShowMenu()} className="navbar-bar mx-2">
                    <i className="fas fa-bars"></i>
                  </Link>
                  <span id="menu-tooltip" className="tooltip-text">
                    Close Menu
                  </span>
                </li>

                <li className="nav-tooltip">
                  <Link to="/" className="navbar-home mx-2">
                    <i className="fas fa-home"></i>
                  </Link>
                  <span className="tooltip-text">Go To Home</span>
                </li>
              </ul>

              {!board
                ? <SearchToDo />
                : null
              }

              <CurrentTime />
            </section>

            {board
              ? (<section>
                  <h3 className="text-light m-0">Board</h3>
                 </section>)
              :null
            }

            <section className="header-nav-right-side">
              <ul className=" d-flex align-content-center m-0 p-0">
                <li className={board ? "d-none" :"nav-tooltip"}>
                  <Link to="/addToDo" className="navbar-plus mx-2">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <span className="tooltip-text">Quick Add Task</span>
                </li>

                {login[0] 
                ? (<li className="nav-tooltip">
                    <Link to="/Login">
                      <p className=" username m-0 text-light">{login[0].username}</p>
                    </Link>
                    <span className="tooltip-text user-email-tooltip">{login[0].email}</span>
                  </li>)
                :(<li className="nav-tooltip">
                    <Link to="/Login" className="navbar-bell mx-2" href="#">
                      <i className="fa fa-user"></i>
                    </Link>
                    <span className="tooltip-text">Sign In</span>
                  </li>)
                }

              </ul>
            </section>
          </section>

          <main>
            <Route path='/' exact component={() => <Welcome isHide={isHide} isDark={dark} />} />
            <Route path="/inbox" component={() => <Inbox isHide={isHide} />} /> 
            <Route path="/board" component={() => <Board isHide={isHide} />} />
            <Route path="/addToDo" component={() => <AddToDoBox isHide={isHide} isDark={dark} />} />
          </main>

          <aside id="aside">
            <SideBar />
          </aside>
          
          <Theme />

          <section className="clearfix"></section>
        </section>
      </section>

    </>
  );
};
