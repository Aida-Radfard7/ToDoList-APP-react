import React from 'react';
import { Link } from "react-router-dom";
import '../assets/existingList.css';

export const ExistingList = ({isHide , isDark}) => {
    return (
        <section className={isHide ? `main existingList-container hide-sideBar` :`main existingList-container`}>
            <section className={isDark ? 'h-100 content-bg-dark p-0' : 'h-100'}>
                <h4 className="inbox-title">Your List</h4>
                <section className="inbox-content">
                    <Link  to="/AddToDo">
                        <ul className="addTask d-flex align-content-center w-75">
                            <li className="add-task-plus"><i className="fa fa-plus text-purple px-2"></i></li>
                            <li className="add-task-word px-3 text-muted border-0 ">Add Task</li>
                        </ul>
                    </Link>
                </section>
            </section>
        </section>  
    )
}
