import {useState, useEffect } from 'react';
// import axios from 'axios';
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
 

  const [account, setAccount] = useState({
    balance: '0',
    first: '',
    last: ''
  });

  const [records, setRecords] = useState([]);

  useEffect(() => {
    console.log(records.length)
      // if(records.length){
      //     window.location.href = '/account'
      // }
  })



  return (
    <Router>
      
      <div id = 'container'>
      <main>
        
        <Switch>

        <Route path = '/account'>
          {
            !records.length ? <Redirect to = '/'/> : ""
          }
          <Header account = {account} setAccount = {setAccount} records = {records} setRecords = {setRecords}/>
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
