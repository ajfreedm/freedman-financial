import '../styles/forms.css'
import {Link} from 'react-router-dom';
import axios from 'axios'



function Register() {
    function threeNums(){
        let randomNum = Math.random().toFixed(3)
        randomNum = randomNum.toString().split('')
        randomNum.splice(0,2)
        randomNum = randomNum.join('')
        randomNum = parseInt(randomNum)
        return randomNum
    }
    


    function submitHandler(e) {
        e.preventDefault()
        let email = document.getElementById('email').value
        let user = document.getElementById('username').value
        let pass = document.getElementById('password').value
        let last = document.getElementById('lastName').value
        let first = document.getElementById('firstName').value
        let num = threeNums()
        let account = 'XXXX-XXXX-5555'

        axios.post('https://api.airtable.com/v0/appK4WDNdIvyVcUAu/Table%201?api_key=keygMy5j7EsXv29IM',{
            
                "fields": {
                    "email":email,
                    "username": user,
                    "password": pass,
                    "last": last,
                    "first": first,
                    "balance": num,
                    "account": account
                  }
            
        })
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    
    return (
        <div id = 'formContainer'>
            <div id="form-wrap">
            <h3 id="company">Freedman Financial</h3>
           <form id = 'form' onSubmit = {(e) => {submitHandler(e)}}>
                <input id = 'email' className = 'input' type='email' placeholder = 'Email'></input>
                <input id = 'username' className = 'input' type = 'text' placeholder = 'Username'></input>  
                <input id = 'password' className = 'input' type='password' placeholder = 'Password'></input> 
                <input id = 'firstName' className = 'input' type = 'text' placeholder = 'First Name'></input>  
                <input id = 'lastName' className = 'input' type = 'text' placeholder = 'Last Name'></input>
                  
                <Link className = 'button' to = '/'>Login</Link>
                <button className = 'button' to = '/register'>Register</button>
            </form> 
            </div>
        </div>
    )
}

export default Register
