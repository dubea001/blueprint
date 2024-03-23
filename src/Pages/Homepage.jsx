import React from 'react'
import Hero from '../Component/Hero';
import Corevalues from '../Component/Corevalues';
import Offeredservices from '../Component/Offeredservices';
import Testimonials from '../Component/Testimonials';
import Professional from '../Component/Professional';
import Faq from '../Component/Faq';

const Homepage = () => {
  return (
    <>
    <Hero/>
    <Corevalues/>
    <Offeredservices/>
    <Faq/>
    <Testimonials/>
    <Professional/>
    </>
  )
}

export default Homepage