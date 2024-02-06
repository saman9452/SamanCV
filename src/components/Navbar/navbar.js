import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar' >
      <img src={logo} className='logo'></img>
      <div className='desktopMenu'>
        <Link className='desktopMenuItem'>Home</Link>
        <Link className='desktopMenuItem'>About Me</Link>
        <Link className='desktopMenuItem'>Projects</Link>
        <Link className='desktopMenuItem'>CV</Link>
      </div>
      <button className='desktopMenuBtn'>Contact Me</button>

    </nav>
  )
}

export default Navbar