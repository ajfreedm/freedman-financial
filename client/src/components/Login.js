import '../styles/forms.css'
import {Link} from 'react-router-dom';
import { useEffect} from 'react';
import axios from 'axios';

function Login(props) {

    const axiosAccount = async () => {
      let userElement = document.getElementById('username')
      let passElement = document.getElementById('password')
        const url =
  `https://api.airtable.com/v0/appK4WDNdIvyVcUAu/Table%201?api_key=keygMy5j7EsXv29IM&filterByFormula=({username}='${userElement.value}')`;
        const response = await axios(url);
        console.log(response)
  
        if(response.data.records.length && response.data.records[0].fields.password === passElement.value){
          props.setAccount(response.data.records[0].fields)
          props.setRecords(response.data.records)
          console.log(response.data.records)
        }




        
        
      
  
      };
   

    return (
        <>
        
        <div id = 'formContainer'>
       
            <div id="form-wrap">
            <h3 id="company">Freedman Financial</h3>
           <form id = 'form'>
                <input id = 'username' className = 'input' type = 'text' placeholder = 'Username'></input>  
                <input id = 'password' className = 'input' type='password' placeholder = 'Password'></input>   
                <Link onClick = {() => {axiosAccount()}} className = 'button' to = '/account'>Login</Link>
                <Link className = 'button' to = '/register'>Register</Link>
            </form> 
            </div>
        </div>
        </>
    )
}

export default Login
