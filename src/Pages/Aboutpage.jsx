import React from 'react';
import Ourapproach from '../Subcomponent/Forabout/Ourapproach';
import Aboutmain from '../Subcomponent/Forabout/Aboutmain';
import Experts from '../Subcomponent/Forabout/Experts';

const Aboutpage = () => {
  return (
    <main>
      <Aboutmain/>
      <Ourapproach/>
      <Experts/>
    </main>
  )
}

export default Aboutpage