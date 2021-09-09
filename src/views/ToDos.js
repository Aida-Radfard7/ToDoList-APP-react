import React from 'react';
import '../assets/toDos.css';
import Swal from 'sweetalert2';
import {useSelector, useDispatch} from 'react-redux'
import {todoRemove ,todoEdit} from '../state-management/actions/todoAction';


export const ToDos = () => {

    const todos = useSelector(store => store.todoState);
    const dispatch = useDispatch();

    const deleteToDo = (index) =>{
        Swal.fire({
          text: 'Are you sure to remove this to do?',
          showCancelButton: true,
          confirmButtonText: 'Delete',
          confirmButtonColor: 'rgb(162, 93, 226)',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.value) {
           dispatch(todoRemove(index))  
          } 
        })
      } 

      const editToDo = (lastTodo , index ) =>{
        Swal.fire({
          text: 'Edit this Todo ',
          input: 'text',
          confirmButtonColor: 'rgb(162, 93, 226)',
          inputValue:lastTodo ,
          showCancelButton: true,
          inputValidator: (value) => {
            dispatch(todoEdit(index , value ));
          }
        })
      }
    
    return (
        <>
            <section className="todos-list mx-4">
                <ul>
                    {todos.map((item , index) =>
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
