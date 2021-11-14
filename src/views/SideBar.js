import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DarkMode } from "../component/DarkMode";
import {
  setDarkMode,
  changeTheme,
} from "../state-management/actions/themeAction";
import { Music } from "../component/Music";

export const SideBar = () => {
  const dark = useSelector((store) => store.themeState);
  const dispatch = useDispatch();

  const setDarkTheme = () => {
    dispatch(setDarkMode());
    if (dark[1] == true) {
      dispatch(changeTheme("#121212"));
    } else {
      dispatch(changeTheme("rgb(173, 29, 53)"));
    }
  };

  return (
    <section
      className={
        dark[1] == true ? "side-bar side-bar-bg-dark" : "side-bar"
      }
    >
      <section className="side-menu my-5">
        <ul className="pl-5 pt-4">
          <section className="d-flex align-content-center my-1 p-2">
            <li>
              <Link to="/inbox" className="text-dark">
                <i className="fa fa-inbox pt-1"></i>
                <span className="mx-3">Inbox</span>
              </Link>
            </li>
          </section>

          <section className="d-flex align-content-center my-1 p-2">
            <li>
              <Link to="/board" className="text-dark">
                <i className="	fab fa-trello pt-1"></i>
                <span className="mx-3">Board</span> 
              </Link>
            </li>
          </section>
        </ul>
      </section>

      <section className="side-bar-options">

        <Link onClick={() => setDarkTheme()}>
          <DarkMode />
        </Link>

        <a
          href="https://github.com/Aida-Radfard7/react-todolist"
          target="blank"
        >
          <i className="fab fa-github nav-tooltip">
            <span className="tooltip-text">GitHub</span>
          </i>
        </a>

        <Music />

      </section>
    </section>
  );
};
