import React, { useState } from "react";
import './values.css';
import AddButton from '../../../assets/add.png';
import RemoveButton from '../../../assets/remove.png';

const Values = () => {

  const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (index) => {
    setShowAnswer((prevState) => ({...prevState, [index]: !prevState[index]}));

  };

  return(<section className="values-section-container">
        <div className="core-values-content">
          <h4 className="paragraph-core-text">OUR CORE VALUE</h4>
          <h1 className="h1-core-text">Professionally Certified Team</h1>
          <p className="core-value-paragraph">BlueprintM6 represents a team of cyber technology enthusiasts <br /> 
          always on the look to provide solutions and services to an <br />ever-growing population as we evolve technologically.</p>   
        </div>

        <div className="core-values-container">

          <div className="core-values-section">
            <div className="core-values-header">
              <h3 className="core-values-faq">High Level of Discretion</h3> 
              <img  src={showAnswer[0] ? RemoveButton : AddButton} className="toggle-icon" onClick={() => toggleAnswer(0)}/>
            </div>
            {showAnswer[0] && <p className="core-values-answer">Our information policy is stringent on exclusivity.</p>}
          </div>
          
          <div className="core-values-section">
            <div className="core-values-header">
              <h3 className="core-values-faq">Precision Of Service</h3>  
              <img  src={showAnswer[1] ? RemoveButton : AddButton} className="toggle-icon" onClick={() => toggleAnswer(1)}/>
            </div> 
            {showAnswer[1] && <p className="core-values-answer">Bringing masters in their fields under one roof with solution in view.</p>}
          </div>

         <div className="core-values-section">
            <div className="core-values-header">
              <h3 className="core-values-faq">100% Refund Policy</h3> 
             <img  src={showAnswer[2] ? RemoveButton : AddButton} className="toggle-icon" onClick={() => toggleAnswer(2)}/>
            </div>
            {showAnswer[2] && <p className="core-values-answer">If we can’t get it done, which we doubt, fund’s will be refunded. T&amp;C’s apply.</p>}
         </div>
        </div>


  </section>)
}
export default Values