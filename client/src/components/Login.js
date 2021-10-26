import Register from './Register.js'
import '../styles/forms.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
  

function Login() {
    return (
        <div id = 'formContainer'>
           <form id = 'form'>
                <input className = 'input' type = 'text' placeholder = 'Username'></input>  
                <input className = 'input' type = 'text' placeholder = 'Password'></input>   
                <Link className = 'button' to = '/account'>Login</Link>
                <Link className = 'button' to = '/register'>Register</Link>
            </form> 
        </div>
    )
}

export default Login
