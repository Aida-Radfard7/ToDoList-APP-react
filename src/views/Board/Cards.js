import React, { useState } from 'react';
import '../../assets/cards.css';
import { useSelector , useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { cardDelete , cardSetPriority , cardEdit, updateCardDND} from '../../state-management/actions/cardAction';
import { DragDropContext , Droppable , Draggable } from 'react-beautiful-dnd';


//to solve this ERROR: expected an assignment or function call and instead saw an expression 
/* eslint-disable */

export const Cards = ({index , isDark}) => {
    const cards = useSelector((store) => store.cardState);
    const dispatch = useDispatch();

    const deleteCard = (id) =>{
        Swal.fire({
            text: 'are you sure to remove this card?',
            showCancelButton:true,
            confirmButtonText: 'Delete',
            confirmButtonColor: 'var(--background-color)',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if(result.value){
                dispatch(cardDelete(id))
            }
        })
    }

    const editCard = (lastText , id) => {
        Swal.fire({
            text: 'edit this card ',
            input: 'text',
            confirmButtonColor: 'var(--background-color)',
            inputValue:lastText ,
            showCancelButton: true,
            inputValidator: (value) => {
              dispatch(cardEdit(id , value));
            }
          })
    }

    const setPriority = (id) =>{
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                '1': 'Red',
                '2' : 'Yellow',
                '3': 'Green'
              })
            }, 300)
          })
          const { value : color } = Swal.fire({
            title: 'Select color',
            input: 'radio',
            confirmButtonColor: 'var(--background-color)',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose something!'
                }
                dispatch(cardSetPriority( parseInt(value) , id))
            }
          }) 
    }

    const priorityColor = {
        1:'#FF6B6B',
        2:'#CDB30C',
        3:'#61B15A'
    }

    return (
            <section className="cards">
                {cards.map((item) =>
                        <div 
                         className={item.index == index ? `card ${isDark ? 'dark-list' : null}` : "d-none"} 
                         style={{borderRight:`3px solid ${priorityColor[item.priority]}`}}>
                            <div role="textbox" className="card-text">{item.text}</div>
                            <section className="card-btns">
                                <button onClick={() => deleteCard(item.id)}><i className="fas fa-trash-alt"></i></button>
                                <button onClick={() => editCard(item.text , item.id)}><i className="fas fa-pencil-alt"></i></button>
                                <button onClick={() => setPriority(item.id)}>
                                    <i style={{color: priorityColor[item.priority]}} className="fas fa-flag"></i>
                                </button>
                            </section>
                        </div>
                )}
            </section>
    )
}
