import React from 'react';
import {Link} from "react-router-dom";

export const SideBar = () => {
    return (
        <>
            <section className="side-bar bg-light">
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
                </ul>
              </section>
            </section>
        </>
    )
}
