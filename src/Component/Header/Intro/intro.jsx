import React from "react";
import './intro.css';
import BackgroundImage from '../../../Slider/image-slider2.jpg'
// import BackgroundImage from '../../../assets/confident-handsome.jpg'
// import BackgroundImage from '../../../assets/great-solution.jpg';

const Intro = () => {
  return(<section id="introSection" className="intro-section">
  
          <div className="intro-content">
              <h1 className="intro-header">Professionals <br />
              <span className="colored-span">Providing</span> <br />
              Advanced Solutions
              </h1>
              <p className="intro-text">BlueprintM6 Technology is to create more options, so does it create challenges.
              Providing solutions to these challenges in an advanced <br />  manner is the reason for our increasing numbers.
              </p>
             <button className="get-started-button" >
               <a href="" className="get-started-link">Get Started</a>
             </button>
          </div>
          <img src={BackgroundImage} alt="background" className="background-image" />

  </section>)
}
export default Intro