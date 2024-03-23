import React from 'react';
import { Link } from 'react-router-dom';

import image1 from '../assets/images/apexdeft-getstarted.jpeg';
import image2 from '../assets/images/apexdeft-cta.jpeg';

import worldWide from '../assets/icons/worldwide-icon.png';
import group from '../assets/icons/group-icon.png'

const Professional = () => {
  return(<section className="flex flex-col  my-6 md:flex-row md:py-8 md:px-16">
        <div className="flex flex-col items-center w-11/12 m-auto md:items-start md:px-8">
          <h1 className="text-center font-bold my-4 text-mainTextColor text-size35 md:text-size45 md:leading-none md:text-start">In Need Of Professional Services?</h1>
          <p className="font-normal text-center text-size16 text-lightTextColor mb-4 md:text-start">
          Over the years we have trained our team to work with the best tools especially when it involves information security.
          </p>

          <div className="flex flex-col items-center md:flex-row md:items-start">
            <img src={worldWide} className="rounded bg-mainBlueBg p-2 my-2 md:mr-4" />
            <div className="text-center">
              <h2 className="font-bold text-size24">74+</h2>
             <h4 className="text-size16 font-normal">Data Centers</h4>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:items-start">
              <img src={group} className="rounded bg-mainBlueBg p-2 my-4 md:mr-4" />
              <div className="text-center">
                <h2 className="font-bold text-size24">178+</h2>
              <h4 className="text-size16 font-normal">Secured Systems</h4>
              </div>
          </div>

          <div className="w-full my-6 border-t border-lightTextColor pt-8 text-center md:text-start">
            <Link to="/getstarted" className="font-normal cursor-pointer text-size16 px-pad16 py-pad8 bg-mainBlueBg text-white hover:font-medium">Get started</Link>
          </div>
        </div>

        <div className="items-center w-11/12 m-auto p-6">
          <img src={image1} alt="" className="rounded-lg m-auto border-8 border-white" />
        </div>

    </section>)
}

export default Professional