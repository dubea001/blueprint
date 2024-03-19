import React from "react";
import './services.css';

import AccountActivation from '../../../assets/apexdeft_accountactivation.jpeg';
import BitcoinImage from '../../../assets/apexdeft_crypto.jpeg';
import ScoreRecord from '../../../assets/apexdeft_scoresandrecords.jpeg';
import DeviceHack from '../../../assets/apexdeft_devicehack.jpeg';
import Socials from '../../../assets/apexdeftsocials.jpeg';
import BlackmailExtortion from '../../../assets/apexdeft_blackmail.jpg';

const Services = () => {
  
  return(<section className="services-offered-section">

      <div className="service-container">
          <div className="title-container">
             <h4 className="service-title">OUR KEY SERVICES</h4>
             <h1 className="service-header">Services And Solutions</h1>
          </div>
          <p className="service-title-text">Our service are categorized based on the growing needs of client <br />
          and also a function of our advanced resource base, <br /> harnessing methods to provide solutions
           that are time saving.</p> 
      </div>

       <div className="services-offered-container">
          <div className="service-div">
            <img src={BitcoinImage} alt="" className="service-image" />
            <div className="content-container">
               <h4 className="service-title">Cryptocurrency Recovery</h4>
              <p className="service-text">
                Cryptocurrency recovery , Bitcoin recovery, Ethereum, USDT, Grenminer, IPC, etc.
              </p>
              <a href="#" className="detail-link-tag">See Detail</a>  
            </div>
           
          </div>

          <div className="service-div">
            <img src={BlackmailExtortion} alt="" className="service-image" />
            <div className="content-container">
                 <h4 className="service-title">Blackmail Or Extortion</h4>
                <p className="service-text">
                  Victims of Sextortion, Blackmail, Extortion, Romance Scam, Recovering Lost or Stolen Money etc.
                </p>
                <a href="#" className="detail-link-tag">See Detail</a> 
            </div>
           
          </div>

          <div className="service-div">
            <img src={AccountActivation} alt="" className="service-image" />
            <div className="content-container">
               <h4 className="service-title">Account Activation</h4>
                <p className="service-text">
                  Reactivation of deactivated account , Instacart, Amazon flex, door dash, Uber eats, Uber driver, Shipt , GrubHub, Postmates, esty and eBay etc
                </p>
                <a href="#" className="detail-link-tag">See Detail</a>   
            </div>
                    
          </div>

          <div className="service-div">
            <img src={ScoreRecord} alt="" className="service-image" />
            <div className="content-container">
                <h4 className="service-title">Scores And Records</h4>
                <p className="service-text">
                  Credit score improvement and criminal record expungement on the background check.					
                </p>
                <a href="#" className="detail-link-tag">See Detail</a>
            </div>
            
          </div>

          <div className="service-div">
            <img src={DeviceHack} alt="" className="service-image" />
            <div className="content-container">
              <h4 className="service-title">Device Hack</h4>
                <p className="service-text">
                  How to hack into any device, computer, phone, iPhone, deleting and Recovering lost files from devices etc.
                </p>
                <a href="#" className="detail-link-tag">See Detail</a> 
            </div>
                       
          </div>

          <div className="service-div">
            <img src={Socials} alt="" className="service-image" />
            <div className="content-container">
               <h4 className="service-title">Social Media Hack</h4>
                <p className="service-text">
                  Account recovery of Facebook, Instagram, Twitter, TikTok, Snapchat, Skype, only fan etc.
                </p>
                <a href="#" className="detail-link-tag">See Detail</a>  
            </div>
             
          </div>
       </div>


  </section> )
}

export default Services