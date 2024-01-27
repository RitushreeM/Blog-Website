import React from 'react'
import './App.css'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'

const App = () => (

    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>

);

export default App;
