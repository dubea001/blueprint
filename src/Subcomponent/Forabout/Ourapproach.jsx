import React, { useState } from 'react';
import AddButton from '../../assets/icons/add-icon.png';
import RemoveButton from '../../assets/icons/remove-icon.png';

const Ourapproach = () => {
 const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (index) => {
    setShowAnswer((prevState) => ({...prevState, [index]: !prevState[index]}));

  };

  return(<section className="bg-lightBlueBg flex flex-col p-4 w-full items-center mx-auto my-4 md:mx-auto md:px-14 md:py-0 md:flex-row md:pt-0 md:items-start">
        <div className="my-8 px-4 md:w-2/4 md:mr-12">
          <h4 className="font-normal text-size12 text-mainTextColor">HOW WE DO IT</h4>
          <h1 className="font-bold my-4 text-size35 text-mainTextColor md:text-size45 md:leading-none">Our Approach</h1>
          <p className=" text-size16 text-lightTextColor">Working as a team with each expert constrained to their area of specialization.
We are applying standard practices needed for excellent service and solutions to be accessible to everyone.
Our mission for us is to deliver these services seamlessly and in such a manner that our clients will have more reasons to use tech.</p>   
        </div>

        <div className="w-full my-8">

          <div className="my-4 mx-1 border-b border-lightTextColor pb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-mainTextColor text-size18 font-semibold md:text-size20">High Level of Discretion</h3> 
              <img  src={showAnswer[0] ? RemoveButton : AddButton} className="cursor-pointer" onClick={() => toggleAnswer(0)}/>
            </div>
            {showAnswer[0] && <p className="px-4 py-4 text-lightTextColor">Our information policy is stringent on exclusivity. 
            Great priority is given to confidentiality and thats why we skillfully guard our clients information.</p>}
          </div>
          
          <div className="my-4 mx-1 border-b border-lightTextColor pb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-mainTextColor text-size18 font-semibold md:text-size20">Precision Of Service</h3>  
              <img  src={showAnswer[1] ? RemoveButton : AddButton} className="cursor-pointer" onClick={() => toggleAnswer(1)}/>
            </div> 
            {showAnswer[1] && <p className="px-4 py-4 text-lightTextColor">Bringing masters in their fields under one roof with the solution in view. 
            We are looking at professionals in vast fields coming together to provide solutions and not based on assumptions</p>}
          </div>

         <div className="my-4 mx-1 border-b border-lightTextColor pb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-mainTextColor text-size18 font-semibold md:text-size20">100% Refund Policy</h3> 
             <img  src={showAnswer[2] ? RemoveButton : AddButton} className="cursor-pointer" onClick={() => toggleAnswer(2)}/>
            </div>
            {showAnswer[2] && <p className="px-4 py-4 text-lightTextColor">With the resource base, we have harnessed over the years, If we can’t get it done, 
            which we doubt, funds will be refunded. T&amp;C’s apply.</p>}
         </div>
        </div>


  </section>)
}

export default Ourapproach