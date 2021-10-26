import '../styles/forms.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

function Register() {
    return (
        <div id = 'formContainer'>
            <div id="form-wrap">
           <form id = 'form'>
                <input className = 'input' type = 'text' placeholder = 'Username'></input>  
                <input className = 'input' type = 'text' placeholder = 'Password'></input> 
                <input className = 'input' type = 'text' placeholder = 'First Name'></input>  
                <input className = 'input' type = 'text' placeholder = 'Last Name'></input>
                  
                <Link className = 'button' to = '/'>Login</Link>
                <button className = 'button' to = '/register'>Register</button>
            </form> 
            </div>
        </div>
    )
}

export default Register
