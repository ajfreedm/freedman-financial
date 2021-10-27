// import Register from './Register.js'
import '../styles/forms.css'
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Login(props) {

    const axiosAccount = async () => {
        const url =
  `https://api.airtable.com/v0/appK4WDNdIvyVcUAu/Table%201?api_key=keygMy5j7EsXv29IM&filterByFormula=({username}='${document.getElementById('username').value}')`;
        const response = await axios(url);
        console.log(response)

        props.setRecords(response.data.records)
        
      
  
      };
    useEffect(() => {
      
      });


    return (
        <div id = 'formContainer'>
            <div id="form-wrap">
           <form id = 'form'>
                <input id = 'username' className = 'input' type = 'text' placeholder = 'Username'></input>  
                <input className = 'input' type = 'text' placeholder = 'Password'></input>   
                <Link onClick = {() => {axiosAccount()}} className = 'button' to = '/account'>Login</Link>
                <Link className = 'button' to = '/register'>Register</Link>
            </form> 
            </div>
        </div>
    )
}

export default Login
