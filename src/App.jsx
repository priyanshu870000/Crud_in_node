import { useState } from 'react'
import { Route, Routes } from 'react-router';
import './App.css'
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import AddDetail from './AddDetail';


function App() { 


  return (
    <div className="App">
    <Routes>
     <Route path='/' Component={Login}/>
     <Route path='/Signup' Component={Signup}/>
     <Route path='/home' Component={Home}/>
     <Route path='/AddDetail' Component={AddDetail}/>
    </Routes>
    </div>
  )
}

export default App;