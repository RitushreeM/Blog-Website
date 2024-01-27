import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Login from '../../../pages/Login'
import SignUp from '../../../pages/SignUp'

const Header = () => (
  <header className="header">
    <a href="#" className="logo"><i className="fas fa-hotel" />Hexa Blog</a>
      <nav className="navbar">
      <Link to='/blog/1'><a href="">Health</a></Link>
      <Link to='/blog/2'><a href="#offer">Education</a></Link>
      <Link to='/blog/3'><a href="#about">Sports</a></Link>
      <Link to='/blog/4'><a href="#faq">Adventure</a></Link>
      <Link to='/blog/5'><a href="#about">Cooking</a></Link>
      <Link to='/blog/6'><a href="#faq">Travel</a></Link>
      <Link to='/blog/7'><a href="#about">Art</a></Link>
      <div className='buttons'>
      <a href='/login' className="btn" id="login_form">Login</a>
      <a href='/signup' className="btn" id="signup_form">Sign Up</a>
      </div>
        
      </nav>
    <div id="menu-btn"  className="fas fa-bars"/>
</header>

)

export default Header
