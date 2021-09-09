import React from 'react';
import { Link } from "react-router-dom";
import { ToDos } from './ToDos';
import '../assets/existingList.css';

export const ExistingList = () => {
    return (
        <>
        <section className="main existingList-container">
            <h4 className="inbox-title">Your List</h4>
            <section className="inbox-content">

                    <ul className="addTask d-flex align-content-center w-75">
                    <li ><button type="button" className="add-task-plus"><i className=" fa fa-plus text-purple"></i></button></li>
                    <li><Link to="/AddToDo" type="button" href="" className="add-task-word px-3 text-muted border-0 bg-white">Add Task</Link></li>
                    </ul>
                  
            </section>  
        </section>  

        {/* <ToDos />   */}

        </>
    )
}
