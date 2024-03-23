import React from 'react'
import { Link } from "react-router-dom";

import Form from '../Subcomponent/Forgetstarted/form';
import Professional from '../Component/Professional';
import Faq from '../Component/Faq';
import Customercare from '../assets/images/apexdeft_support.jpeg';

const Getstartedpage = () => {
  return (
    <main className=''>
      <section className="border-lightBlueBg border-b-2 pb-padInRem3 flex flex-col p-4 w-full items-center justify-center mx-auto md:py-padInRem3">  
        <h1 className="text-mainBlueBg text-center font-bold text-size35 mb-4 leading-none md:text-size45 md:leading-none">Get Started</h1>
        <div className="text-center"><Link to="/" className="font-normal text-size20 px-padInRem1 py-pad6 cursor-pointer hover:font-medium text-mainTextColor md:px-pad16 md:py-pad10">Home</Link></div>
      </section>  
      <div className="border-lightTextColor border-b-2 pb-padInRem3 flex flex-col mb-12 items-center md:flex-row md:justify-center">
        <Form/>
        <div className="mx-16 shadow-xl mb-4 md:w-2/5">
          <img src={Customercare} className='' />
          <div className="border-t border-black m-4">
            <strong className='text-size24 font-medium md:text-size35 md:font-semibold'>Request For Professional Services</strong><br />
            <strong className='text-size18 font-medium md:text-size20'>Office Address</strong>
            <p className='text-size14 font-normal'>San Francisco, California</p>
            <strong className='text-size18 font-medium md:text-size20'>Mail Address</strong>
            <p className='text-size14 font-normal'>Mail@blueprintM6.com</p>
            <strong className='text-size18 font-medium md:text-size20'>+13054149307</strong>
          </div>
        </div>
      </div>
      <Faq/>
      <Professional/>
    </main>
  )
}

export default Getstartedpage