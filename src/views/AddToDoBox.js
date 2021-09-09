import React,{useRef , useEffect} from "react";
import '../assets/addToDoBox.css';
import {useDispatch} from 'react-redux'
import {todoAdd} from '../state-management/actions/todoAction';
import {useHistory} from "react-router-dom";

export const AddToDoBox = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const todoInput = useRef();

  useEffect(()=>{
    todoInput.current.focus();
  },[])

  const insert = (todo) =>{
    if(todo !== ""){
    dispatch(todoAdd(todo))
    todoInput.current.value = "" ;
    todoInput.current.focus();
    }
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
          <button onClick={() => history.goBack()} id="cancelBtn" className=" px-2">
            Cancel
          </button>
        </section>
        </section>
      </section>

    </>
  );
};
