import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import WebsiteLogo from '../assets/logo/blueprint-logo.png';
import MenuIcon from '../assets/icons/menu-icon.png';
import CloseIcon from '../assets/icons/close-icon.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return(<nav className="bg-lightBlueBg flex justify-between items-center flex-row mx-auto md:py-6 md:px-12">
    <div className="flex items-center bg-transparent rounded md:flex md:justify-around md:w-11/12 md:m-auto md:bg-white">
       <Link to="/blueprint/" className="flex item-center justify-center w-48 h-20 cursor-pointer">
          <img src={WebsiteLogo} className="w-full" />
       </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/blueprint/about" className="transition duration-300 ease font-normal text-size16 mx-4 cursor-pointer hover:border-b border-mainBlueBg hover:font-medium hover:text-mainBlueBg hover:pb-1">About us</Link>
          <Link to="/blueprint/services" className="flex transition duration-300 ease font-normal text-size16 mx-4 cursor-pointer hover:border-b border-mainBlueBg hover:font-medium hover:text-mainBlueBg hover:pb-1">Services</Link>
          <Link to="/blueprint/reviews" className="transition duration-300 ease font-normal text-size16 mx-4 cursor-pointer hover:border-b border-mainBlueBg hover:font-medium hover:text-mainBlueBg hover:pb-1">Reviews</Link> 
        </div>
          <Link to="/blueprint/getstarted" className="hidden cursor-pointer font-normal text-size16 px-pad16 py-pad8 bg-mainBlueBg text-white hover:font-medium md:block">Get started</Link>
    </div>
   
    <img src={showMenu ? CloseIcon : MenuIcon} className="rounded mx-4 w-8 h-8 bg-mainBlueColor cursor-pointer md:hidden transition ease duration-300 transform hover:scale-110" onClick={() => setShowMenu(!showMenu)}/>
    <div className={`bg-white flex flex-col py-6 rounded absolute top-20 left-0 w-full transition-transform ease duration-300 md:hidden ${showMenu ? 'transform translate-y-0' : 'transform -translate-y-96'}`}  style={{zIndex: 999}}>
      <Link to="/blueprint/about" className="bg-lightGrayColor text-center my-1 py-2 px-6 font-normal tracking-wide cursor-pointer hover:text-mainBlueColor" onClick={() => setShowMenu(false)}>About</Link>
      <Link to="/blueprint/services" className="bg-lightGrayColor text-center my-1 py-2 px-6 font-normal tracking-wide cursor-pointer hover:text-mainBlueColor" onClick={() => setShowMenu(false)}>Services</Link>
      <Link to="/blueprint/reviews" className="bg-lightGrayColor text-center my-1 py-2 px-6 font-normal tracking-wide cursor-pointer hover:text-mainBlueColor" onClick={() => setShowMenu(false)}>Reviews</Link>
      <Link to="/blueprint/getstarted" className="bg-lightGrayColor text-center my-1 py-2 px-6 font-normal tracking-wide cursor-pointer hover:text-mainBlueColor" onClick={() => setShowMenu(false)}>Get started</Link> 
    </div>
  </nav>)
}

export default Navbar