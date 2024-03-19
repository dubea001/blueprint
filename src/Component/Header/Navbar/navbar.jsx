import React, { useState } from "react";
import './navbar.css';
import MenuIcon from '../../../assets/menu-icon.png';
import WebsiteLogo from '../../../assets/no-bg-blueprint-logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return(<nav className="navbar-container">
    <a href="#" className="website-logo-link">
      <img src={WebsiteLogo} alt="" className="website-logo" /></a>
    <div className="nav-link-container">
      <a href="#" className="nav-link">About</a>
      <a href="#" className="nav-link">Services</a>
      <a href="#" className="nav-link">Reviews</a>
      <a href="#" className="nav-link">News</a> 
    </div>
    <button className="nav-get-started-button">
      <a href="#" className="nav-get-started-link">Get Started</a>
    </button>
    <img src={MenuIcon} alt="Menu" className="mobile-menu-icon" onClick={() => setShowMenu(!showMenu)}/>
    <div className="nav-menu-container" style={{display: showMenu ? 'flex' : 'none'}}>
      <a href="#" className="nav-menu-link" onClick={() => setShowMenu(false)}>About</a>
      <a href="#" className="nav-menu-link" onClick={() => setShowMenu(false)}>Services</a>
      <a href="#" className="nav-menu-link" onClick={() => setShowMenu(false)}>Reviews</a>
      <a href="#" className="nav-menu-link" onClick={() => setShowMenu(false)}>News</a> 
    </div>
  </nav>)
}

export default Navbar