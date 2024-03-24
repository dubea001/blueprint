import React from 'react';
import { Link } from 'react-router-dom';

import AccountActivation from '../assets/images/apexdeft_accountactivation.jpeg';
import BitcoinImage from '../assets/images/apexdeft_crypto.jpeg';
import ScoreRecord from '../assets/images/apexdeft_scoresandrecords.jpeg';
import DeviceHack from '../assets/images/apexdeft_devicehack.jpeg';
import Socials from '../assets/images/apexdeftsocials.jpeg';
import BlackmailExtortion from '../assets/images/apexdeft_blackmail.jpg';

const Offeredservices = () => {
  return(<section id='services' className=" flex flex-col w-full p-6 mx-auto">

      <div className="mb-8 md:flex md:justify-between md:items-center md:px-12">
          <div className="">
             <h4 className="font-semibold text-size14">OUR KEY SERVICES</h4>
             <h1 className="font-bold my-4 text-mainTextColor text-size35 md:text-size45 md:leading-none">Services And <br /> Solutions</h1>
          </div>
          <p className="text-size16 text-lightTextColor md:text-base md:mr-12">Our service are categorized based on the growing needs of client <br />
          and also a function of our advanced resource base, <br /> harnessing methods to provide solutions
           that are time saving.</p> 
      </div>

       <div className="flex flex-col px-4 md:px-6 md:flex-row md:flex-wrap md:justify-around">

          <div className='rounded-2xl m-4 overflow-hidden bg-lightBlueBg hover:scale-105 transition-transform duration-300 ease w-auto md:max-w-80'>
            <img src={BitcoinImage} className="w-full h-1/2 transition-transform hover:scale-105" loading='lazy' />
            <div className="mx-2 my-4 pb-6 md:my-6">
               <h4 className="font-medium text-base mb-4 text-mainTextColor">Cryptocurrency Recovery</h4>
              <p className="text-lightTextColor mb-6">
                Cryptocurrency recovery , Bitcoin recovery, Ethereum, USDT, Grenminer, IPC, etc.
              </p>
              <Link to="/blueprint/getstarted" className="text-white bg-mainTextColor cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>  
            </div>
          </div>

          <div className='rounded-2xl m-4 overflow-hidden bg-lightBlueBg hover:scale-105 transition-transform duration-300 ease min-h-96 w-auto md:max-w-80'>
            <img src={BlackmailExtortion} className="w-full h-1/2 transition-transform hover:scale-105" loading='lazy' />
            <div className="mx-2 my-6 pb-4">
                 <h4 className="font-medium text-base mb-4 text-mainTextColor">Blackmail Or Extortion</h4>
                <p className="text-lightTextColor mb-6">
                  Victims of Sextortion, Blackmail, Extortion, Romance Scam, Recovering Lost or Stolen Money etc.
                </p>
                <Link to="/blueprint/getstarted" className="text-white bg-mainTextColor cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>
            </div>
           
          </div>

          <div className='rounded-2xl m-4 overflow-hidden bg-lightBlueBg hover:scale-105 transition-transform duration-300 ease w-auto md:max-w-80'>
            <img src={AccountActivation} className="w-full h-1/2 transition-transform hover:scale-105" loading='lazy' />
            <div className="mx-2 my-6 pb-4">
               <h4 className="font-medium text-base mb-4 text-mainTextColor">Account Activation</h4>
                <p className="text-lightTextColor mb-6">
                  Reactivation of deactivated account , Instacart, Amazon flex, door dash, Uber eats, Uber driver, Shipt , GrubHub, Postmates, esty and eBay etc
                </p>
                <Link to="/blueprint/getstarted" className="text-white bg-mainTextColor cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>  
            </div>
                    
          </div>

          <div className='rounded-2xl m-4 overflow-hidden bg-lightBlueBg hover:scale-105 transition-transform duration-300 ease w-auto md:max-w-80'>
            <img src={ScoreRecord} className="w-full h-1/2 transition-transform hover:scale-105" loading='lazy' />
            <div className="mx-2 my-6 pb-4">
                <h4 className="font-medium text-base mb-4 text-mainTextColor">Scores And Records</h4>
                <p className="text-lightTextColor mb-6">
                  Credit score improvement and criminal record expungement on the background check.					
                </p>
                <Link to="/blueprint/getstarted" className="text-white bg-mainTextColor cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>
            </div>
            
          </div>

          <div className='rounded-2xl m-4 overflow-hidden bg-lightBlueBg hover:scale-105 transition-transform duration-300 ease w-auto md:max-w-80'>
            <img src={DeviceHack} className="w-full h-1/2 transition-transform hover:scale-105" loading='lazy' />
            <div className="mx-2 my-6 pb-4">
              <h4 className="font-medium text-base mb-4 text-mainTextColor">Device Hack</h4>
                <p className="text-lightTextColor mb-6">
                  How to hack into any device, computer, phone, iPhone, deleting and Recovering lost files from devices etc.
                </p>
                <Link to="/blueprint/getstarted" className="text-white bg-mainTextColor cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>
            </div>
                       
          </div>

          <div className='rounded-2xl m-4 overflow-hidden bg-lightBlueBg hover:scale-105 transition-transform duration-300 ease w-auto md:max-w-80'>
            <img src={Socials} className="w-full h-1/2 transition-transform hover:scale-105" loading='lazy' />
            <div className="mx-2 my-6 pb-4">
               <h4 className="font-medium text-base mb-4 text-mainTextColor">Social Media Hack</h4>
                <p className="text-lightTextColor mb-6">
                  Account recovery of Facebook, Instagram, Twitter, TikTok, Snapchat, Skype, only fan etc.
                </p>
                <Link to="/blueprint/getstarted" className="text-white bg-mainTextColor cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>  
            </div>
             
          </div>
       </div>


  </section> )
}

export default Offeredservices