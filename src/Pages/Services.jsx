import React from 'react';
import { Link } from 'react-router-dom';

import Professional from '../Component/Professional';

import BitcoinImage from '../assets/images/apexdeft_crypto.jpeg';
import AccountActivation from '../assets/images/apexdeft_accountactivation.jpeg';
import BlackmailExtortion from '../assets/images/apexdeft_blackmail.jpg';
import DeviceHack from '../assets/images/apexdeft_devicehack.jpeg';
import ScoreRecord from '../assets/images/apexdeft_scoresandrecords.jpeg';
import Socials from '../assets/images/apexdeftsocials.jpeg';

const Services = () => {
  return (<main>
    <section className="border-lightBlueBg border-b-2 pb-padInRem3 flex flex-col p-4 w-full items-center justify-center mx-auto md:py-padInRem3">  
      <h1 className="text-mainBlueBg text-center font-bold text-size35 mb-4 leading-none md:text-size45 md:leading-none">Our Services</h1>
      <div className="text-center"><Link to="/blueprint/" className="font-normal text-size20 px-padInRem1 py-pad6 cursor-pointer hover:font-medium text-mainTextColor md:px-pad16 md:py-pad10">Home</Link></div>
    </section>
    <div className="flex flex-col md:mt-6 md:flex-row md:flex-wrap md:justify-evenly">

      <div className="m-6 px-4 shadow-xl rounded-lg md:w-1/4">
        <h1 className='font-bold text-size28 text-center'>Cryptocurrency Recovery</h1>
        <img src={BitcoinImage} className='w-full rounded-lg mb-4 h-56' />
        <p className='mb-2 text-size14 text-lightTextColor md:text-size16'>The Cryptocurrency recovery project is a shared intelligence and asset tracing service dedicated to victims of cybercrimes 
and companies related to asset recovery.&nbsp;
We connect the victims of cybercrimes with our professional experts that are willing to help recover the stolen or lost
assets with the use of our superior asset tracing and recovery technology.</p>
        <div className="text-center pb-4">
          <h4 className="font-medium text-size20 text-mainBlueBg">Other Services And Solutions Includes</h4>
          <div className="mb-6">
            <p className='text-medium text-size16 py-2'>BTC Recovery</p>
            <p className='text-medium text-size16 py-2'>ETH Recovery</p>
            <p className='text-medium text-size16 py-2'>USDT/Tether Recovery</p>
            <p className='text-medium text-size16 py-2'>Lost Cryptowallet Recovery</p>
            <p className='text-medium text-size16 py-2'>Litecoin Recovery</p>
            <p className='text-medium text-size16 py-2'>Dogecoin Recovery</p>
            <p className='text-medium text-size16 py-2'>Custom Software Development</p>
            <p className='text-medium text-size16 py-2'>Security Support 24/7</p>
          </div>
          <Link to="/getstarted" className="text-white bg-mainBlueBg cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>
        </div>
      </div>

      <div className="m-6 px-4 shadow-xl rounded-lg md:w-1/4">
        <h1 className='font-bold text-size28 text-center'>Account Activitation</h1>
        <img src={AccountActivation} className='w-full rounded-lg mb-4 h-56' />
        <p className='mb-2 text-size14 text-lightTextColor md:text-size16'>Losing access to important accounts is usually frustrating.
That’s why we treat this particular service with a high priority.&nbsp;
If you also need access to accounts for legitimate reasons, we are here for you, 
the platform isn’t the challenge as we have a dependable resource base and also
needed tools to get the job done.</p>
        <div className="text-center pb-4">
          <h4 className="font-medium text-size20 text-mainBlueBg">Other Services And Solutions Includes</h4>
          <div className="mb-6">
            <p className='text-medium text-size16 py-2'>Activation of Permanently Deactivated Account</p>
            <p className='text-medium text-size16 py-2'>Resolving Suspended Account Issues and improving it's rating</p>
            <p className='text-medium text-size16 py-2'>Game Account Unlock</p>
            <p className='text-medium text-size16 py-2'>Email Account Hack and Recovery</p>
            <p className='text-medium text-size16 py-2'>High Paying Batches improvement from shoppers account</p>
            <p className='text-medium text-size16 py-2'>Withdraw locked Up funds from Deactivated account</p>
            <p className='text-medium text-size16 py-2'>Security Support 24/7</p>
          </div>
          <Link to="/getstarted" className="text-white bg-mainBlueBg cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>
        </div>
      </div>

      <div className="m-6 px-4 shadow-xl rounded-lg md:w-1/4">
        <h1 className='font-bold text-size28 text-center'>Blackmail or Extortion</h1>
        <img src={BlackmailExtortion} className='w-full rounded-lg mb-4 h-56' />
        <p className='mb-2 text-size14 text-lightTextColor md:text-size16'>Loosing access to important accounts is usually frustrating. Thats why we treat this particular service with a high priority.&nbsp;
If you also need access to accounts for legitimate reasons, we are here for you,
the platform isn’t the challenge as we have a dependable resource base and also needed tools to get the job done.</p>
        <div className="text-center pb-4">
          <h4 className="font-medium text-size20 text-mainBlueBg">Other Services And Solutions Includes</h4>
          <div className="mb-6">
            <p className='text-medium text-size16 py-2'>Sextortion Help</p>
            <p className='text-medium text-size16 py-2'>Online Threat Victim</p>
            <p className='text-medium text-size16 py-2'>Coercion</p>
            <p className='text-medium text-size16 py-2'>Online Blackmail</p>
            <p className='text-medium text-size16 py-2'>Extortion</p>
            <p className='text-medium text-size16 py-2'>Commercial Pressure Victim</p>
            <p className='text-medium text-size16 py-2'>Security Support 24/7</p>
          </div>
          <Link to="/getstarted" className="text-white bg-mainBlueBg cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>
        </div>
      </div>

       <div className="m-6 px-4 shadow-xl rounded-lg md:w-1/4">
        <h1 className='font-bold text-size28 text-center'>Device Hack</h1>
        <img src={DeviceHack} className='w-full rounded-lg mb-4 h-56' />
        <p className='mb-2 text-size14 text-lightTextColor md:text-size16'>Device accessing is on a high demand worldwide. Parents are eager to know what their kids
 does on their various phones, boyfriends, girlfriends, husbands, or wives always want to 
 know what their various partners are up to and the best ways is by monitoring their 
 respective devices.
Our professionals are always ready to get you access to the day-to-day activities of any target not withstanding the location of the target.</p>
        <div className="text-center pb-4">
          <h4 className="font-medium text-size20 text-mainBlueBg">Other Services And Solutions Includes</h4>
          <div className="mb-6">
            <p className='text-medium text-size16 py-2'>Reactivation of Permanently Deactivated Account</p>
            <p className='text-medium text-size16 py-2'>Resolving Suspended Account Issues</p>
            <p className='text-medium text-size16 py-2'>Withdrawing Locked Up funds from Deactivated Device</p>
            <p className='text-medium text-size16 py-2'>Security Support 24/7</p>
          </div>
          <Link to="/getstarted" className="text-white bg-mainBlueBg cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>
        </div>
      </div>

      <div className="m-6 px-4 shadow-xl rounded-lg md:w-1/4">
        <h1 className='font-bold text-size28 text-center'>Scores And Record</h1>
        <img src={ScoreRecord} className='w-full rounded-lg mb-4 h-56' />
        <p className='mb-2 text-size14 text-lightTextColor md:text-size16'>Reactivation of deactivated account , Instacart, Amazon flex, door dash, Uber eats, Uber driver, Shipt , GrubHub, Postmates, esty and eBay etc.</p>
        <div className="text-center pb-4">
          <h4 className="font-medium text-size20 text-mainBlueBg">Other Services And Solutions Includes</h4>
          <div className="mb-6">
            <p className='text-medium text-size16 py-2'>Identification And Resolution Of Issues</p>
            <p className='text-medium text-size16 py-2'>Score Improvement Plan</p>
            <p className='text-medium text-size16 py-2'>Comprehensive Analysis of Credit Score</p>
            <p className='text-medium text-size16 py-2'>Personal Credit Expert</p>
            <p className='text-medium text-size16 py-2'>Detailed Information Of The Credit Report</p>
            <p className='text-medium text-size16 py-2'>Identify Theft Protection</p>
            <p className='text-medium text-size16 py-2'>Security Support 24/7</p>
          </div>
          <Link to="/getstarted" className="text-white bg-mainBlueBg cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>
        </div>
      </div>

      <div className="m-6 px-4 shadow-xl rounded-lg md:w-1/4">
        <h1 className='font-bold text-size28 text-center'>Social Media Hack</h1>
        <img src={Socials} className='w-full rounded-lg mb-4 h-56' />
        <p className='mb-2 text-size14 text-lightTextColor md:text-size16'>Reactivation of deactivated account , Instacart, Amazon flex, door dash, Uber eats, Uber driver, Shipt , GrubHub, Postmates, esty and eBay etc.</p>
        <div className="text-center pb-4">
          <h4 className="font-medium text-size20 text-mainBlueBg">Other Services And Solutions Includes</h4>
          <div className="mb-6">
            <p className='text-medium text-size16 py-2'>Facebook Hack/Recovery</p>
            <p className='text-medium text-size16 py-2'>Tiktok Hack/Recovery</p>
            <p className='text-medium text-size16 py-2'>Snapchat Hack/Recovery</p>
            <p className='text-medium text-size16 py-2'>Discord Hack/Recovery</p>
            <p className='text-medium text-size16 py-2'>Whatsapp Hack/Recovery</p>
            <p className='text-medium text-size16 py-2'>Instagram Hack/Recovery</p>
            <p className='text-medium text-size16 py-2'>Youtube Hack/Recovery</p>
            <p className='text-medium text-size16 py-2'>Wechat Hack/Recovery</p>
            <p className='text-medium text-size16 py-2'>Security Support 24/7</p>
          </div>
          <Link to="/getstarted" className="text-white bg-mainBlueBg cursor-pointer py-1 px-4 hover:bg-hoverTextMainColor">Get started</Link>
        </div>
      </div>


    </div>
    <Professional/>
  </main>)
}

export default Services