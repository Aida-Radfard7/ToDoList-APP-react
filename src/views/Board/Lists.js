import {React , useState , useRef} from 'react'
import '../../assets/lists.css';
import { useSelector ,useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { boardListDelete, boardListEdit } from '../../state-management/actions/boardListAction';
import {cardAdd , listCardsDelete} from '../../state-management/actions/cardAction';
import {Cards} from './Cards';
import { v4 as uuidv4 } from 'uuid';



export const Lists = ({isDark}) => {
    
    const [click , setClick] = useState(false);
    const [indexState, setIndex] = useState(0);
    const boardList = useSelector((store) => store.boardListState);
    const dispatch = useDispatch()
    const cardText = useRef();
    const cards = useSelector((store) => store.cardState);

    const deleteList = (index) =>{
        Swal.fire({
            text: 'Are you sure to remove this List?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: 'var(--background-color)',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.value) {
               dispatch(boardListDelete(index))
               dispatch(listCardsDelete(index))
            } 
          })
    }

    const editListName = (lastName , index) =>{
        Swal.fire({
            text: 'Edit List Name ',
            input: 'text',
            confirmButtonColor: 'var(--background-color)',
            inputValue:lastName ,
            showCancelButton: true,
            inputValidator: (value) => {
              dispatch(boardListEdit(index , value ));
            }
          })
    }

    const addCard = (text , index , uuid , priority) =>{
        if(text != ""){
           dispatch(cardAdd(text , index , uuid , priority)) 
        }
        setClick(false)
    }

    const clickForNewCard = (index) =>{
        setClick(true);
        setIndex(index);
    }

    return (
        <section className="lists">
            {boardList.map((item , index) =>
            <section key={index} className={isDark ? "list dark-list" : "list"}>
                <section className="list-title py-2">
                    <button onClick={() => deleteList(index)}><i className="fas fa-trash"></i></button>
                    <p className="list-title-text mb-0">{item}</p>
                    <button onClick={() => editListName(item , index)}><i className="fas fa-edit"></i></button>
                </section>

                <section className="list-content">
                   <Cards index={index} isDark={isDark}/> 
                </section>

                <section className="list-fotter">
                    {click && indexState == index
                        ? (<section className="add-card-section">
                            <div contentEditable role="textbox" className="card-textbox" ref={cardText}></div>
                            <button onClick={() => addCard(cardText.current.textContent , index , uuidv4() , 0)} id="addCardBtn">Add</button>
                            <button onClick={() => setClick(false)} id="cancelCardBtn">Cancel</button>
                           </section>)
                        : (<button onClick={() => clickForNewCard(index)} className="list-fotter-btn">Add New Card</button>)
                    }
                </section>
            </section>            
            )}
        </section>
    )
}
