import React from 'react'
import '../assets/searchToDo.css';

export const SearchResult = ({resultList}) => {

    console.log(resultList)
    return (
        <section className="main mt-5">
            <section className="search-result">
                <ul>
                    {resultList.map((item , index) => 
                        <li key={index}>
                            {item}
                        </li>
                    )}
                </ul>
            </section>
        </section>
    )
}
