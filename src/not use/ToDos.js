import React from 'react';
import '../assets/toDos.css';


export const ToDos = ({toDoInfo , deleteToDo , editToDo}) => {
    
    return (
        <>
            <section className="todos-list mx-4">
                <ul>
                    {toDoInfo.map((item , index) =>
                        <li key={index} className="list-group-item d-flex">
                            <span className="task-Counter">{index+1}</span>
                            {item}
                            <button onClick={() => deleteToDo(index)} className="remove-btn" ><i className="fas fa-trash"></i></button>
                            <button onClick={() => editToDo(item , index)} className="edit-btn"><i className="fas fa-edit"></i></button>
                        </li>
                    )}
                </ul>
            </section>
        </>
    )
}
