import React from 'react';

import DenHenderson from '../../assets/images/great-solution.jpg';
import BryanRobson from '../../assets/images/Image-FQ6DADC-800x800-1.jpg';
import NatashaAniston from '../../assets/images/natasha-aniston.jpg';
import JamieBruce from '../../assets/images/confident-handsome.jpg';

const Experts = () => {
  return (
    <section className='md:px-padInRem5'>
      <div className="text-center m-4">
        <h5 className="font-normal">BLUEPRINTM6 TEAM</h5>
        <h1 className="font-bold text-size35">Meet Our <span className="text-mainBlueBg">Expert Team</span></h1>
      </div>

      <div className="flex flex-col m-4 md:flex-row md:flex-wrap md:items-center md:justify-center">
          <div className="border2 border-b pb-pad10 my-8 mx-4 text-center md:w-2/5 ">
          <img src={BryanRobson} className='mb-6'/>
           <strong className="border-border-red">Bryan Robson</strong>
          <p className="text-size16 text-colorRed">Artificial Intelegent Expert</p>
        </div>
        <div className="border-2 border-b pb-pad10 my-8 mx-4 text-center md:w-2/5 ">
          <img src={JamieBruce} className='mb-6'/>
          <strong className="border-border-red">Jamie Bruce</strong>
          <p className="text-size16 text-colorRed">Chief Of Research & Development</p>
        </div>
        <div className="border-2 border-b pb-pad10 my-8 mx-4 text-center md:w-2/5 ">
          <img src={NatashaAniston} className='mb-6'/>
           <strong className="border-border-red">Natasha Aniston</strong>
          <p className="text-size16 text-colorRed">Sr. Data Scientist</p>
        </div>
        <div className="border-2 border-b pb-pad10 my-8 mx-4 text-center md:w-2/5 ">
          <img src={DenHenderson} className='mb-6'/>
           <strong className="border-border-red">Den Henderson</strong>
          <p className="text-size16 text-colorRed">Sr. Software Architect</p>
        </div>
      </div>
    </section>
  )
}

export default Experts