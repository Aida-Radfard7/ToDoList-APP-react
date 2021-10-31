import React from 'react';
import '../assets/toDos.css';
import Swal from 'sweetalert2';
import {useSelector, useDispatch} from 'react-redux'
import {todoRemove ,todoEdit, updateList} from '../state-management/actions/todoAction';
import { DragDropContext , Droppable , Draggable } from 'react-beautiful-dnd';


export const ToDos = ({isHide , isDark}) => {

    const todos = useSelector(store => store.todoState);
    const dispatch = useDispatch();


    const deleteToDo = (index) =>{
        Swal.fire({
          text: 'Are you sure to remove this to do?',
          showCancelButton: true,
          confirmButtonText: 'Delete',
          confirmButtonColor: 'var(--background-color)',
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
          confirmButtonColor: 'var(--background-color)',
          inputValue:lastTodo ,
          showCancelButton: true,
          inputValidator: (value) => {
            dispatch(todoEdit(index , value ));
          }
        })
      }


    return (
        <>
          <DragDropContext 
          onDragEnd={(params) => {
            if(params.destination){
              const sourceIndex = params.source.index;
              const destinationIndex = params.destination.index;
              todos.splice(destinationIndex,0,todos.splice(sourceIndex,1)[0]);
              dispatch(updateList(todos))
            }
          }}>
            <section className={isHide ? "todos-list hide-sideBar mx-4" :"todos-list show-sideBar mx-4"}>
              <Droppable droppableId="droppable-1">
                {(provided ,snapshot) => (
                  <ul className="todo-holder" ref={provided.innerRef} {...provided.droppableProps}>
                      {todos.map((item , index) =>
                        <Draggable key={index} draggableId={`draggable-${index}`} index={index}>
                           {(provided, snapshot) => (
                            <li key={index}
                             className="list-group-item d-flex"
                             ref={provided.innerRef} 
                             {...provided.draggableProps} 
                             {...provided.dragHandleProps}
                             style={{...provided.draggableProps.style ,
                             backgroundColor : snapshot.isDragging? "rgba(154, 145, 161 , 0.4)" : `${isDark[1] ? 'rgb(219, 219, 219)' : "white"}`}} >

                                <span className="task-Counter">{index+1}</span>
                                {item}
                                <button onClick={() => deleteToDo(index)} className="remove-btn" ><i className="fas fa-trash"></i></button>
                                <button onClick={() => editToDo(item , index)} className="edit-btn"><i className="fas fa-edit"></i></button>
                            </li>
                           )}
                        </Draggable>
                      )}

                  </ul>
                )}
              </Droppable>
            </section>
          </DragDropContext>  
        </>
    )
}
