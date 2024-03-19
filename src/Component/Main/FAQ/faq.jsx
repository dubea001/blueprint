import React, { useState } from "react";
import './faq.css';

import addIcon from '../../../assets/add.png'
import removeIcon from '../../../assets/remove.png'

const Faq = () => {

  const [viewAnswer, setViewAnswer] = useState({});

  const toggleResponse = (index) => {
    setViewAnswer((prevState) => ({...prevState, [index]: !prevState[index]}));
  }

  return(<section className="client-FAQ-section">

        <div className="client-FAQ-header-container">
          <h5 className="small-text-header">F. A. Q.</h5>
          <h1 className="FAQ-header">Frequently Asked Questions</h1>
        </div>

        <div className="client-FAQ-answer-container">

          <div className="content-main-section">
            <div className="content-section">
              <h3 className="client-FAQ-header">How Does Recovery Work?</h3>
              <img src={viewAnswer[0] ? removeIcon : addIcon} className="addImage" onClick={() => toggleResponse(0)}/>           
            </div> 
            {viewAnswer[0] && <p className="faq-answer-text">The techniques we use to recover our clients’ accounts vary widely from case to case.
             In the event of a password recovery we will walk our clients through extracting an encrypted private key 
             backup and building a comprehensive list of possible password guesses. We then transfer our client’s data
              to secure password cracking servers that use the data collected from the client to try billions or 
              trillions of possible password combinations until the correct password is found</p>}
          </div>   
          
          <div className="content-main-section">
            <div className="content-section">
              <h3 className="client-FAQ-header">How long does the process take?</h3>
              <img src={viewAnswer[1] ? removeIcon : addIcon} className="addImage" onClick={() => toggleResponse(1)}/> 
            </div>
            {viewAnswer[1] && <p className="faq-answer-text">The process of recovering lost crypto can vary in time from as short as 1 hour, 
            to as long as 6+ months. While this may sound lengthy, this is because we typically exhaust our initial
            search within a week after initially onboarding a client. After this initial search has been exhausted,
            we hold on to the private key backup and password guesses to continue retesting as we discover new recovery
            vectors and expand our hardware capabilities (unless otherwise requested to delete client information).</p>}
          </div>
            

          <div className="content-main-section">
            <div className="content-section">
              <h3 className="client-FAQ-header">Can i trust you? </h3>
              <img src={viewAnswer[2] ? removeIcon : addIcon} className="addImage" onClick={() => toggleResponse(2)}/> 
            </div>
            {viewAnswer[2] && <p className="faq-answer-text">We understand the issue of trust and authority is one that must be addressed 
            before our clients feel comfortable sharing sensitive financial information with Us.&nbsp;</p>}
          </div>
            

          <div className="content-main-section">
            <div className="content-section">
              <h3 className="client-FAQ-header">What kind of cryptocurrency can be recovered?</h3>
              <img src={viewAnswer[3] ? removeIcon : addIcon} className="addImage" onClick={() => toggleResponse(3)}/> 
            </div>
            {viewAnswer[3] && <p className="faq-answer-text">The types of crypto that we support are expanding every day. 
            At the moment we support seed phrase recovery for any type of bip-39 or erc-20 token including legacy mnemonics,
            13th and 25th words that include: bitcoin, usdt, ethereum, cotp etc….</p>}
          </div>
            
        </div>

    </section>)
}

export default Faq