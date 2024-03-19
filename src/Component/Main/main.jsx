import React from "react";
import './main.css';
import Values from '../Main/Values/values';
import Services from '../Main/ServicesOffered/services';
import Testimonials from '../Main/Testimonials/testimonials';
import Faq from '../Main/FAQ/faq';
import Professional from '../Main/Professional/professional';


const Main = () => {
  return(<section>
    <Values/>
    <Services/>
    <Testimonials/>
    <Faq/>
    <Professional/>
  </section>)
}
export default Main