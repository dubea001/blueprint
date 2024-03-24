import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import CompanyLogo from '../assets/logo-logo.png';

const Footer = () => {

  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    setEmail('');
  };


   return( <footer className="bg-lightBlueBg p-6">

        <div className="flex flex-col mb-6 md:flex-row md:items-start md:mt-8">

          <div className="overflow-hidden m-2 mb-6 md:w-2/5">
           <img src={CompanyLogo} alt="" className="-ml-8 w-60 h-24" />
            <div className=" md:mx-6">
              <p className="company-location">San Francisco, California</p>
              <div className="font-bold text-size22">+1 (920) 355-3142</div>
              <p className="company-email">mail@blueprintM6.com</p>
            </div>
          </div>

          <div className="m-2 md:w-1/4">
            <h2 className="font-bold text-size20">Services</h2>
            <p className="text-lightTextColor my-4 hover:font-medium cursor-pointer">
              <Link to='/getstarted'>Cryptocurrency Recovery</Link>
            </p>
            <p className="text-lightTextColor my-4 hover:font-medium cursor-pointer">
              <Link to='/getstarted'>Blackmail and Extortion</Link>
            </p>
            <p className="text-lightTextColor my-4 hover:font-medium cursor-pointer">
              <Link to='/getstarted'>Account Activation</Link>
            </p>
            <p className="text-lightTextColor my-4 hover:font-medium cursor-pointer">
              <Link to='/getstarted'>Device Hack</Link>
            </p>
            <p className="text-lightTextColor my-4 hover:font-medium cursor-pointer">
              <Link to='/getstarted'>Social Media Hack</Link>
            </p>
            <p className="text-lightTextColor my-4 hover:font-medium cursor-pointer">
              <Link to='/getstarted'>Scores and Records</Link>
            </p>
          </div>

          <div className="m-2 md:w-2/5">
            <h2 className="font-bold text-size20 mb-4">Newsletter</h2>
            <p className="text-lightTextColor mb-4">Stay up to date with our insights and analysis in the world of Information Technology,
             Cryptocurrency and much more. Just sign up with your email.</p>
             <input type="email" placeholder="Your email address" className="py-pad8 px-padInRem1 mr-2 w-72 mb-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
             <button type="button" className="bg-mainBlueBg cursor-pointer py-pad8 px-padInRem1 font-normal text-white py-3 px-6 hover:font-medium" onClick={handleSubscribe}>Subscribe</button>
          </div>

        </div>

        <p className="text-lightTextColor text-end border-t border-lightTextColor pt-padInRem1">Copyright © 2012-2024 BlueprintM6.com All Rights Reserved.</p>
        

      </footer>)
}

export default Footer