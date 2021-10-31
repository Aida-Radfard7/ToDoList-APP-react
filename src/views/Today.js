import React from 'react';
import '../assets/today.css';
import { Link } from "react-router-dom";

export const Today = ({isHide}) => {
    return (
        <>
            <section className={isHide ? "main mt-5 hide-sideBar" :"main mt-5"}>
                    <h4 className="inbox-title">Today</h4>
                    <section className="inbox-content">
                        <Link  to="/addToDo">
                            <ul className="addTask d-flex align-content-center w-75">
                                <li className="add-task-plus"><i className="fa fa-plus text-purple px-2"></i></li>
                                <li className="add-task-word px-3 text-muted border-0 ">Add Task</li>
                            </ul>
                        </Link>
                    </section>  
            </section>
        </>
    )
}
