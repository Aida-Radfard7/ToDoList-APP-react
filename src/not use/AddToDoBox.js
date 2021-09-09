import React,{useRef , useEffect} from "react";
import '../assets/addToDoBox.css';
import { ToDos } from "./ToDos";
import Swal from 'sweetalert2';
import {useSelector, useDispatch} from 'react-redux';
import {todoAdd , todoRemove ,todoEdit} from '../state-management/actions/todoAction';

export const AddToDoBox = () => {

  const todos = useSelector(store => store.todoState);
  const dispatch = useDispatch();

  useEffect(()=>{
    todoInput.current.focus();
  },[])
  
  const todoInput = useRef();
  

  const insert = (todo) =>{
    if(todo !== ""){
    dispatch(todoAdd(todo))
    todoInput.current.value = "" ;
    todoInput.current.focus();
    }
  }

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
      <section id="slideDown-addTask">
        <section className="addTask-section">
          <input
            ref={todoInput}
            id="input-Task"
            className="w-100 h-50 p-2 border-0"
            type="text"
            placeholder="Write what you want to do..."
            maxlength="50"
          />
        <section className="addTask-section-btn my-2">
          <button onClick={() => insert(todoInput.current.value)} id="addBtn" className=" px-3">
            Add
          </button>
          <button id="cancelBtn" className=" px-2">
            Cancel
          </button>
        </section>
        </section>
      </section>

      <ToDos toDoInfo={todos} deleteToDo={deleteToDo} editToDo={editToDo} />
    </>
  );
};
