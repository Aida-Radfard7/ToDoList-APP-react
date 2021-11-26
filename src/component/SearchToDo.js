import {React ,useRef , useState} from 'react';
import '../assets/searchToDo.css';
import {useSelector, useDispatch} from 'react-redux'
import { Link , Route } from 'react-router-dom';
import { SearchResult } from './SearchResult';


export const SearchToDo = ({}) => {

    const searchInput = useRef();
    const todos = useSelector(store => store.todoState);
    const [resultList , setResultList] = useState();
    const [isSubmit , setIsSubmit] = useState(false)
    console.log(todos)


    const onSubmit = (searchTxt) =>{
        if(searchTxt != ""){
            setIsSubmit(true)
            let includes = todos.filter(item => String(item).includes(searchTxt))
            setResultList(includes);
        }
    }

    const CloseSearch = () =>{
        setIsSubmit(false)
        searchInput.current.value = "";
    }

    return (
        <>
            <form className="header-form" action="">
                <section className="d-flex">
                    <input
                        ref={searchInput}
                        type="text"
                        className="form-control"
                        placeholder="find..."
                    />
                    <Link>
                        <a onClick={() => onSubmit(searchInput.current.value)}>
                            <i type="submit" className="fa fa-search"></i>
                        </a>
                    </Link>
                </section>               
            </form>

            {isSubmit
                ?<section className="position-absolute">
                    <section className="search-result">
                       <ul>
                            {resultList.map((item , index) => 
                                <a href={`#${item}`} onClick={() => CloseSearch()}>
                                    <li key={index}>
                                      {item}
                                    </li>
                                </a>
                            )}
                        </ul>
                        {resultList.length === 0 ? <p className="not-found-txt">--- no search result ---</p> : null}
                        <button onClick={() => CloseSearch()} className="close-btn">
                            Exit
                        </button>
                    </section>
                </section>
                :null
            }
        </>
    )
}
