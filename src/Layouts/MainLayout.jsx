import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

import Contact from '../Component/Contact';
import Tidio from '../Subcomponent/Tidio';

const MainLayout = () => {
  return (
    <div className='font-syne'>
    <Navbar/>
    <Outlet/>
    <Contact/>
    <Tidio/>
    <Footer/>
    </div>
  )
}

export default MainLayout