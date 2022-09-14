import {React , useState , useRef , useEffect} from 'react'
import '../../assets/lists.css';
import { useSelector ,useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { boardListDelete, boardListEdit, updateListDND } from '../../state-management/actions/boardListAction';
import {cardAdd , listCardsDelete , updateCardDND} from '../../state-management/actions/cardAction';
import {Cards} from './Cards';
import { v4 as uuidv4 } from 'uuid';
import $ from "jquery";
import 'jquery-ui/ui/widgets/sortable';
import { boardListAdd } from "../../state-management/actions/boardListAction";




export const Lists = ({isDark}) => {
    
    const [click , setClick] = useState(false);
    const [indexState, setIndex] = useState(0);
    const boardList = useSelector((store) => store.boardListState);
    const dispatch = useDispatch()
    const cardText = useRef();
    const cards = useSelector((store) => store.cardState);

    useEffect(() => {
        $("#sortable2").sortable({
          connectWith: ".connectedSortable2",
        });
    }, [])

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

    const editListName = (lastName , index , id) =>{
        Swal.fire({
            text: 'Edit List Name ',
            input: 'text',
            confirmButtonColor: 'var(--background-color)',
            inputValue:lastName ,
            showCancelButton: true,
            inputValidator: (value) => {
              dispatch(boardListEdit(index , value , id));
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

    const dark = useSelector(store => store.themeState);
    const listName = useRef();
  
    const AddList = (newList , uuid) =>{
      if(newList != ""){
          dispatch(boardListAdd(newList , uuid)) 
          listName.current.value= "";
          listName.current.focus();       
      }
    }
  

    return (
        <section id={"sortable2"} className="lists connectedSortable2">
            {boardList.map((item , index) =>
                <section className={isDark ? "list dark-list" : "list"}>

                    <section className="list-title py-2">
                        <button onClick={() => deleteList(index)}><i className="fas fa-trash"></i></button>
                        <p className="list-title-text list-title-tooltip mb-0">{item.title}</p>
                        <span class="list-title-tooltip-text">{item.title}</span>
                        <button onClick={() => editListName(item.title , index ,item.id)}><i className="fas fa-edit"></i></button>
                    </section>

                    <section className="list-content">
                      <Cards index={index} isDark={isDark}/> 
                    </section>
                    
                    <section className="list-fotter">
                        {click && indexState == index
                            ? (<section className="add-card-section">
                                    {/* <div contentEditable role="textbox" className="card-textbox" ref={cardText}></div> */}
                                    <input type="text" className="card-textbox" ref={cardText}/>
                                    {/* <button onClick={() => addCard(cardText.current.textContent , index , uuidv4() , 0)} id="addCardBtn">Add</button> */}
                                    <button onClick={() => addCard(cardText.current.value , index , uuidv4() , 0)} id="addCardBtn">Add</button>
                                    <button onClick={() => setClick(false)} id="cancelCardBtn">Cancel</button>
                                </section>)
                            : (<button onClick={() => clickForNewCard(index)} className="list-fotter-btn">Add New Card</button>)
                        }
                    </section>
                </section>
                    )}

                    <section className="addList-section">
                    {click ? (
                        <section className='addList-form'>
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
    )
}
