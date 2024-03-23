import React, { useState } from 'react';

import addIcon from '../assets/icons/add-icon.png'
import removeIcon from '../assets/icons/remove-icon.png'

const Faq = () => {
  const [viewAnswer, setViewAnswer] = useState({});

  const toggleResponse = (index) => {
    setViewAnswer((prevState) => ({...prevState, [index]: !prevState[index]}));
  }

  return(<section className="mb-6">

        <div className="text-center mb-8">
          <h5 className="text-center font-semibold text-size14">F. A. Q.</h5>
          <h1 className="text-center font-bold my-4 text-mainTextColor text-size35 md:text-size45 md:leading-none">Frequently Asked Questions</h1>
        </div>

        <div className="w-11/12 m-auto flex-col md:px-32">

          <div className="my-4 mx-1 border-b border-lightTextColor pb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-mainTextColor text-size16 font-bold">How Does Recovery Work?</h3>
              <img src={viewAnswer[0] ? removeIcon : addIcon} className="cursor-pointer" onClick={() => toggleResponse(0)}/>           
            </div> 
            {viewAnswer[0] && <p className="px-4 py-4 text-lightTextColor text-size16 font-normal">The techniques we use to recover our clients’ accounts vary widely from case to case.
             In the event of a password recovery we will walk our clients through extracting an encrypted private key 
             backup and building a comprehensive list of possible password guesses. We then transfer our client’s data
              to secure password cracking servers that use the data collected from the client to try billions or 
              trillions of possible password combinations until the correct password is found</p>}
          </div>   
          
          <div className="my-4 mx-1 border-b border-lightTextColor pb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-mainTextColor text-size16 font-bold">How long does the process take?</h3>
              <img src={viewAnswer[1] ? removeIcon : addIcon} className="cursor-pointer" onClick={() => toggleResponse(1)}/> 
            </div>
            {viewAnswer[1] && <p className="px-4 py-4 text-lightTextColor text-size16 font-normal">The process of recovering lost crypto can vary in time from as short as 1 hour, 
            to as long as 6+ months. While this may sound lengthy, this is because we typically exhaust our initial
            search within a week after initially onboarding a client. After this initial search has been exhausted,
            we hold on to the private key backup and password guesses to continue retesting as we discover new recovery
            vectors and expand our hardware capabilities (unless otherwise requested to delete client information).</p>}
          </div>
            

          <div className="my-4 mx-1 border-b border-lightTextColor pb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-mainTextColor text-size16 font-bold">Can i trust you? </h3>
              <img src={viewAnswer[2] ? removeIcon : addIcon} className="cursor-pointer" onClick={() => toggleResponse(2)}/> 
            </div>
            {viewAnswer[2] && <p className="px-4 py-4 text-lightTextColor text-size16 font-normal">We understand the issue of trust and authority is one that must be addressed 
            before our clients feel comfortable sharing sensitive financial information with Us.&nbsp;</p>}
          </div>
            

          <div className="my-4 mx-1 border-b border-lightTextColor pb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-mainTextColor text-size16 font-bold">What kind of cryptocurrency can be recovered?</h3>
              <img src={viewAnswer[3] ? removeIcon : addIcon} className="cursor-pointer" onClick={() => toggleResponse(3)}/> 
            </div>
            {viewAnswer[3] && <p className="px-4 py-4 text-lightTextColor text-size16 font-normal">The types of crypto that we support are expanding every day. 
            At the moment we support seed phrase recovery for any type of bip-39 or erc-20 token including legacy mnemonics,
            13th and 25th words that include: bitcoin, usdt, ethereum, cotp etc….</p>}
          </div>
            
        </div>

    </section>)
}

export default Faq