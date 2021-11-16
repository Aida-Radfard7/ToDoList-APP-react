import {React ,useRef , useState} from 'react';
import '../assets/searchToDo.css';
import {useSelector, useDispatch} from 'react-redux'
import { Link , Route } from 'react-router-dom';
import { SearchResult } from './SearchResult';


export const SearchToDo = ({passList}) => {

    const searchInput = useRef();
    const todos = useSelector(store => store.todoState);
    const [isSubmit , setIsSubmit] = useState(false);
    const [resultList , setResultList] = useState();


    const onSubmit = (searchTxt) =>{
        if(searchTxt != ""){
            setIsSubmit(true);
            const includes = todos.filter(item => item.includes(`${searchTxt}`));
            setResultList(includes) ;
        }
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
                    <Link to="search-result">
                        <a onClick={() => onSubmit(searchInput.current.value)}>
                            <i type="submit" className="fa fa-search"></i>
                        </a>
                    </Link>
                </section>               
            </form>


            <Route path="/search-result" component={() => <SearchResult resultList={resultList} />} />
        </>
    )
}
