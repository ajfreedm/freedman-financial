import { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"



import Header from  './components/Header'
import Logout from './components/Logout'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import Footer from  './components/Footer'





function App() {

  return (
    <div>
    <Header />
    <Logout />
    <Login />
    <Register />
    <Account /> 
    <Footer />
    
   
    </div>
  );
}

export default App;
