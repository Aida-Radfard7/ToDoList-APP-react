import { React, useState , useRef } from "react";
import "../../assets/board.css";
import { useSelector, useDispatch } from "react-redux";
import { boardListAdd } from "../../state-management/actions/boardListAction";
import { Lists } from "./Lists";
import { v4 as uuidv4 } from 'uuid';


export const Board = ({isHide}) => {

  const [click, setClick] = useState(false);
  const boardList = useSelector(store => store.boardListState);
  const dark = useSelector(store => store.themeState);
  const dispatch = useDispatch();
  const listName = useRef();

  const AddList = (newList , uuid) =>{
    if(newList != ""){
        dispatch(boardListAdd(newList , uuid)) 
        listName.current.value= "";
        listName.current.focus();       
    }
  }

  return (
      <section className={isHide ? "main mt-5 board-sidebar-hide" :"main mt-5"}>
        <section className="board-content">
          <Lists isDark={dark[1]} />
          {click ? (
            <section className="addList-section">
              <input
                ref={listName}
                id="input-List"
                className="p-2 border-0"
                maxLength="30"
                data-placeholder="Enter List Name ..."
              />
              <section className="addList-section-btn mt-2 mb-3">
                <button
                  onClick={() => AddList(listName.current.value , uuidv4())}
                  id="addBtn"
                  className=" px-3"
                >
                  Add
                </button>
                <button
                  onClick={() => setClick(false)}
                  id="cancelBtn"
                  className=" px-2"
                >
                  Cancel
                </button>
              </section>
            </section>
          ) : (
            <a
              onClick={() => setClick(true)}
              className="link"
            >
              <section className="add-new-list">
                <ul>
                  <li className="mx-2">
                    <i className=" fa fa-plus"></i>
                  </li>
                  <li>
                    <a>Add a New List</a>
                  </li>
                </ul>
              </section>
            </a>
          )}
        </section>
      </section>
  );
};
