import React from 'react';
import '../assets/inbox.css';
import { Link } from "react-router-dom";
import { ToDos } from './ToDos';
import { useSelector } from "react-redux";


export const Inbox = ({isHide}) => {

  const dark = useSelector(store => store.themeState);

    return (
        <section className={isHide ? "main mt-5 inbox-sidebar-hide" : "main mt-5"}>
                <h4 className="inbox-title">Inbox</h4>
                <section className="inbox-content">
                    <Link  to="/addToDo">
                        <ul className="addTask d-flex align-content-center w-75">
                            <li className="add-task-plus"><i className="fa fa-plus text-purple px-2"></i></li>
                            <li className="add-task-word px-3 text-muted border-0 ">Add Task</li>
                        </ul>
                    </Link>
                </section> 

            <ToDos isDark={dark} /> 
        </section>
    )
}
