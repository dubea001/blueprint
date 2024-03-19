import React from "react";
import './professional.css';

import image1 from '../../../assets/apexdeft-getstarted.jpeg';
import image2 from '../../../assets/apexdeft-cta.jpeg';

import worldWide from '../../../assets/worldwide.png';
import group from '../../../assets/group.png'

const Professional = () => {
  return(<section className="professional-section">
        <div className="professional-container">
          <h1 className="professional-header1">In Need Of Professional Services?</h1>
          <p className="professional-paragraph-text">
          Over the years we have trained our team to work with the best tools especially when it involves information security.
          </p>

          <div className="img-text-container">
            <img src={worldWide} className="main-image" />
            <div className="content-container">
              <h2 className="header2">74+</h2>
             <h4 className="header-4">Data Centers</h4>
            </div>
          </div>

          <div className="img-text-container">
              <img src={group} className="main-image" />
              <div className="content-container">
                <h2 className="header2">178+</h2>
              <h4 className="header-4">Secured Systems</h4>
              </div>
          </div>

          <div className="link-container">
            <a href="#" className="learn-more-link">Learn More</a>
          </div>
        </div>

        <div className="professional-image-container">
          <img src={image1} alt="" className="image1" />
          <img src={image2} alt="" className="image2" />
        </div>

    </section>)
}
export default Professional