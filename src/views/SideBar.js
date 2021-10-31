import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import {DarkMode} from '../component/DarkMode';
import { setDarkMode , changeTheme } from '../state-management/actions/themeAction';

export const SideBar = () => {

  const dark = useSelector(store => store.themeState);
  const dispatch = useDispatch();
  const setDarkTheme = () =>{
    dispatch(setDarkMode());
    if(dark[1] == true){
      dispatch(changeTheme('#121212'));
    }else{
      dispatch(changeTheme('rgb(173, 29, 53)'));
    }
  }

    return (
            <section className={dark[1] == true ? "side-bar side-bar-bg-dark" : "side-bar bg-light"}>
              <section className="side-menu my-5">
                <ul className="px-5 pt-4">
                  <section className="d-flex align-content-center my-1 p-2">
                    <i className="	fa fa-inbox pt-1"></i>
                    <li className="mx-3">
                      <Link to="/inbox" className="text-dark">
                        Inbox
                      </Link>
                    </li>
                  </section>
                  <section className="d-flex align-content-center my-1 p-2">
                    <i className="	far fa-calendar pt-1"></i>
                    <li className="mx-3">
                      <Link to="/today" className="text-dark">
                        Today
                      </Link>
                    </li>
                  </section>
                  <section className="d-flex align-content-center my-1 p-2">
                    <i className="	fab fa-trello pt-1"></i>
                    <li className="mx-3">
                      <Link to="/board" className="text-dark">
                        Board
                      </Link>
                    </li>
                  </section>
                </ul>
              </section>

              <section className="side-bar-options">
                <Link>
                  <i className="fab fa-itunes-note nav-tooltip">
                    <span className="tooltip-text">Play Music</span>
                  </i>
                </Link>

                <Link onClick={() => setDarkTheme()}>
                  <DarkMode/>
                </Link>

                <Link>
                  <i className="fab fa-github nav-tooltip">
                    <span className="tooltip-text">GitHub</span>
                  </i>
                </Link>
              </section>              
            </section>
    )
}
