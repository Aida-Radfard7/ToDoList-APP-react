import React from "react";
import "../assets/layout.css";
import "../assets/inbox.css";
import { Inbox } from "../views/Inbox";
import { Switch, Route, Link } from "react-router-dom";
import { SideBar } from "../views/SideBar";
import { AddToDoBox } from "../views/AddToDoBox";
import { PageTitle } from "../views/PageTitle";
import { ToDos } from "../views/ToDos";
import { Today } from "../views/Today";
import { Theme } from "../views/Theme";
import { ExistingList } from "../views/ExistingList";

export const Layout = () => {
  return (
    <>
      <PageTitle title="To do list" />
      <section className="todolist-app">
        <section className="app-holder">
          <section className="navbar navbar-expand px-5 mb-0 d-flex align-items-center justify-content-between position-fixed">
            <section className="header-nav-left-side d-flex align-items-center p-0">
              <ul className="d-flex align-items-center mb-0 p-0">
                <li className="nav-tooltip">
                  <a className="navbar-bar mx-2" href="#">
                    <i className="fas fa-bars"></i>
                  </a>
                  <span id="menu-tooltip" className="tooltip-text">
                    Close Menu
                  </span>
                </li>

                <li className="nav-tooltip">
                  <a className="navbar-home mx-2" href="#">
                    <i className="fas fa-home"></i>
                  </a>
                  <span className="tooltip-text">Go To Home</span>
                </li>
              </ul>
              <form className="header-form" action="">
                <section className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="find..."
                  />
                  <i type="submit" className="fa fa-search"></i>
                </section>
              </form>
            </section>

            <section className="header-nav-right-side">
              <ul className=" d-flex align-content-center m-0 p-0">
                <li className="nav-tooltip">
                  <Link to="/AddToDo" className="navbar-plus mx-2">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <span className="tooltip-text">Quick Add Task</span>
                </li>

                <li className="nav-tooltip">
                  <a className="navbar-bell mx-2" href="#">
                    <i className="fa fa-user"></i>
                  </a>
                  <span className="tooltip-text">Sign In</span>
                </li>
              </ul>
            </section>
          </section>

          <main>
            <Route path="/inbox" component={Inbox} />
            <Route path="/today" component={Today} />
          </main>

          <aside>
            <SideBar />
          </aside>

          <Theme />

          <section className="clearfix"></section>
        </section>
      </section>

      <Switch>
        <Route path="/" exact component={ExistingList} />
        <Route path="/AddToDo" component={AddToDoBox} />
      </Switch>

      {/* show to dos when page is loaded for fist time */}
      <ToDos />
  
    </>
  );
};
