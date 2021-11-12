import React,{useRef , useEffect} from "react";
import '../assets/addToDoBox.css';
import {useDispatch} from 'react-redux'
import {todoAdd} from '../state-management/actions/todoAction';
import {useHistory} from "react-router-dom";
import { ToDos } from "./ToDos";

export const AddToDoBox = ({isHide , isDark}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const todoInput = useRef();

  useEffect(()=>{
    todoInput.current.focus();
  },[])

  const insert = (todo) =>{
    if(todo !== ""){
    dispatch(todoAdd(todo))
    todoInput.current.innerHTML = "" ;
    todoInput.current.focus();
    }
  }

  return (
    <section className={isHide ? "main inbox-sidebar-hide mt-5" : "main mt-5"}>
      <section id="slideDown-addTask" >
        <section className="addTask-section">
          <div
            ref={todoInput}
            id="input-Task"
            className="w-100 h-50 p-2 border-0"
            role='textbox'
            contentEditable
            data-placeholder="Write what you want to do..."
          ></div>
        <section className="addTask-section-btn mt-2 mb-3">
          <button onClick={() => insert(todoInput.current.innerText)} id="addBtn" className=" px-3">
            Add
          </button>
          <button onClick={() => history.goBack()} id="cancelBtn" className=" px-2">
            Cancel
          </button> 
        </section>
        </section>
      </section>
      <ToDos isDark={isDark} />
    </section>
  );
};
