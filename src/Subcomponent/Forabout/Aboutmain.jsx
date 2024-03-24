import React from 'react';
import { Link } from 'react-router-dom';

import memberImage from '../../assets/images/apexdeft-about-us.jpg';

const Aboutmain = () => {
  return (<main className="pb-padInRem1">
      <section className="border-lightBlueBg border-b-2 pb-padInRem3 flex flex-col p-4 w-full items-center justify-center mx-auto md:py-padInRem3">  
        <h1 className="text-mainBlueBg text-center font-bold text-size35 mb-4 leading-none md:text-size45 md:leading-none">About Us</h1>
        <div className="text-center"><Link to="/blueprint/" className="font-normal text-size20 px-padInRem1 py-pad6 cursor-pointer hover:font-medium text-mainTextColor md:px-pad16 md:py-pad10">Home</Link></div>
      </section>

      <section className="flex flex-col md:flex-row md:p-padInRem1">
        <div className="my-8 px-4 md:w-2/4 md:mr-6 md:w-1/2">
          <h4 className="font-normal text-size12 text-mainTextColor">ABOUT US</h4>
          <h1 className="font-bold my-4 text-size35 text-mainTextColor md:text-size45 md:leading-none">Providing Solutions Company</h1>
          <p className=" text-size16 text-lightTextColor">Having an amazing team is not enough, the right tools and a dependable knowledge base are key to providing services and solutions.
          This brings us all to accessibility. After years of research coupled with several recognitions of our servicedelivery,&nbsp;
           we have created strategic partnerships with corporations and bodies that have a strong hold on important databases.</p>   
        </div>

        <div className="px-pad16 md:w-1/2">

          <div className="flex flex-col m-auto mb-6 md:flex-row md:w-4/5">
            <div className="bg-lightBlueBg py-pad28 px-pad24 my-2 rounded md:w-1/2 md:mx-2">
              <strong className='font-semibold text-rem2 text-lightTextColor'>72k+</strong>
              <p className='font-medium text-lightTextColor'>Satisfied Clients</p>
            </div>
            <div className="bg-mainBlueBg py-pad28 px-pad24 my-2 rounded md:w-1/2 md:mx-2">
              <strong className='font-semibold text-rem2 text-white'>1.9m+</strong>
              <p className='font-medium text-white'>Threats Blocked</p>
            </div>
          </div>

          <img src={memberImage} className='w-11/12 rounded-lg h-72 m-auto md:w-4/5'/>

        </div>
      </section>
    </main>)
}

export default Aboutmain