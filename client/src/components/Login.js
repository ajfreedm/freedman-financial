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
            <div id="form-wrap">
           <form id = 'form'>
                <input className = 'input' type = 'text' placeholder = 'Username'></input>  
                <input className = 'input' type = 'text' placeholder = 'Password'></input>   
                <Link className = 'button' to = '/account'>Login</Link>
                <Link className = 'button' to = '/register'>Register</Link>
            </form> 
            </div>
        </div>
    )
}

export default Login
