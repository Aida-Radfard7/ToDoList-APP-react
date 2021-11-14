import React ,{useRef} from 'react'
import '../assets/login.css';
import { useDispatch , useSelector } from 'react-redux';
import {setLogin} from '../state-management/actions/loginAction'
import { useHistory , Link} from 'react-router-dom';


export const Login = () => {

    const login = useSelector((store) => store.loginState);
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useRef();
    const email = useRef();


    const submit = (event) =>{
        event.preventDefault();     
        if(username.current.value != ''){
            dispatch(setLogin(username.current.value , email.current.value ));
            history.push("/")
        }
    }

    return (
        <section className="login">
            <form className="form" onSubmit={submit}  >
                    <h2>Login</h2>
                    <input type="text" placeholder="Enter Your Name ..." ref={username} defaultValue={login.username} />
                    <input type="email" placeholder="Enter Your Email ..." ref={email} defaultValue={login.email} />  
                    <input type="submit" /> 
            </form>
            <section className="back">
                <Link to="/" className="go-back-btn">
                    <i className="fas fa-chevron-left"></i>
                    <h5>Back</h5>
                </Link>
            </section>
        </section>
    )
}
