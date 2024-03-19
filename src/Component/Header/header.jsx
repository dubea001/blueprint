import React from 'react';
import './header.css';
import Navbar from '../Header/Navbar/navbar';
import Intro from '../Header/Intro/intro';


const Header = () => {
  return(
    <header>
    <Navbar/>
    <Intro/>
    </header>
  )
}

export default Header