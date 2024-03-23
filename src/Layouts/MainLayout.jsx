import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

import Contact from '../Component/Contact';

const MainLayout = () => {
  return (
    <div className='font-syne'>
    <Navbar/>
    <Outlet/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default MainLayout