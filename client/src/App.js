import { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'



import Header from  './components/Header'
import Logout from './components/Logout'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import Footer from  './components/Footer'





function App() {

  return (
    <Router>
      
      <div id = 'container'>
      <main>
        
        <Switch>

        <Route path = '/account'>
          <Header/>
          <Account />
        </Route>

        <Route path = '/register'>
          <Register />
        </Route> 

        <Route path = '/'>
          <Login />
        </Route> 
        </Switch>
        </main>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
