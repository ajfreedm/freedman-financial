import { useEffect, useState } from 'react';
import axios from 'axios';



import Header from  './components/Header'
import Account from './components/Account'
import Footer from  './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'




function App() {
  return (
    <div>
    <Header />
    <Account /> 
    <Footer />
    <Login /> 
    <Register /> 
    <Login /> 
    </div>
  );
}

export default App;
