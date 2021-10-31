import React  from 'react'
import {useSelector} from 'react-redux';

export const DarkMode = () => {

    const dark = useSelector(store => store.themeState);
    
    return (
        <div>
            <i className={dark[1] ? "fas fa-sun nav-tooltip" : "fas fa-moon nav-tooltip"}>
                <span className="tooltip-text">{dark[1] ? 'Light Mode' :'Dark Mode'}</span>
            </i>
        </div>
    )
}

