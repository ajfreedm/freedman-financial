import { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  //Link
} from 'react-router-dom'



import Header from  './components/Header'
// import Logout from './components/Logout'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import Footer from  './components/Footer'





function App() {
  // const url =
  // "https://api.airtable.com/v0/appK4WDNdIvyVcUAu/Table%201?api_key=keygMy5j7EsXv29IM&filterByFormula=({username}='johndoe')";

  const [account, setAccount] = useState({
   // balance: 0,
    balance: '0',
    first: '',
    last: ''
  });

  const [records, setRecords] = useState([]);


  // useEffect(() => {
  //   const axiosAccount = async () => {
  //     const response = await axios(url);
  //     console.log(response)
  //     // setAccount(response.data.records[0].fields);
  //     // setRecords(response.data.records)
      
  //     // response.data ? console.log(JSON.stringify(response.data.records[0].fields.first)): console.log("");
  //     // response.data ? console.log(JSON.stringify(response.data.records[0].fields.last)): console.log("");
  //     // response.data ? console.log(JSON.stringify(response.data.records[0].fields.balance)): console.log("");
    

  //   };

  //   axiosAccount();
    
  // }, []);


  return (
    <Router>
      
      <div id = 'container'>
      <main>
        
        <Switch>

        <Route path = '/account'>
          {
            records.length === 0 ? <Redirect to = '/'/> : ""
          }
          <Header account = {account}/>
          <Account account = {account} setAccount = {setAccount}/>
        </Route>

        <Route path = '/register'>
          <Register />
        </Route> 

        <Route path = '/'>
          <Login account = {account} setAccount = {setAccount} records = {records} setRecords = {setRecords} />
        </Route> 
        </Switch>
        </main>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
