import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/sliders/image-slider2.jpg'

const Hero = () => {
  return (
      <section className="flex flex-col p-4 w-full bg-lightBlueBg items-center mx-auto md:flex-row md:pt-0 md:py-20 md:px-20">  
          <div className="w-full md:w-11/12">
              <h1 className="text-mainTextColor font-bold text-size35 mb-4 leading-none md:text-size45 md:leading-none">Professionals <br />
              <span className="text-mainBlueColor">Providing</span> <br />
              Advanced Solutions
              </h1>
              <p className="mb-4 text-lightTextColor font-normal text-size14 md:text-size18 md:leading-none md:mb-6">BlueprintM6 Technology is to create more options, <br /> so does it create challenges.
              Providing solutions to these <br /> challenges in an advanced manner is the reason for our increasing numbers.
              </p>
               <Link to="/getstarted" className="font-normal text-size16 px-padInRem1 py-pad6 bg-mainBlueBg cursor-pointer hover:font-medium text-white md:px-pad16 md:py-pad10">Get Started</Link>
          </div>
          <img src={HeroImage} alt="background" className="w-full mt-4 border-8 border-white rounded-lg md:w-2/5 md:mt-16" />
      </section>
  )
}

export default Hero