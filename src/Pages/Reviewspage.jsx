import React from 'react';
import { Link } from 'react-router-dom';

import Professional from '../Component/Professional'

import Collins from '../assets/images/Collins-Michelson.jpeg';
import Vivian from '../assets/images/vivian.jpeg';
import Thomas from '../assets/images/thomas.jpeg';
import Jane from '../assets/images/jane.jpg';
import Jenny from '../assets/images/jenny.jpg';

const Reviewspage = () => {
  return (
    <main className="">
      <section className="border-lightBlueBg border-b-2 pb-padInRem3 flex flex-col p-4 w-full items-center justify-center mx-auto md:py-padInRem3">  
        <h1 className="text-mainBlueBg text-center font-bold text-size35 mb-4 leading-none md:text-size45 md:leading-none">Client Reviews</h1>
        <div className="text-center"><Link to="/blueprint/" className="font-normal text-size20 px-padInRem1 py-pad6 cursor-pointer hover:font-medium text-mainTextColor md:px-pad16 md:py-pad10">Home</Link></div>
      </section> 
      <div className="">
        <div className="m-4 p-6 flex flex-col md:flex-row">
          <div className="md:pr-padInRem3">
            <h5 className="text-center font-semibold text-size14 md:text-start">TESTIMONIALS</h5>
            <h1 className="text-center font-bold my-4 text-mainTextColor text-size35 md:text-size45 md:leading-none md:text-start">What Our Clients Says About Us</h1>  
          </div>
          <div className="w-4/5 border-b border-black pb-padInRem3 mx-auto flex flex-col md:flex-row md:items-start">
            <img src={Jane} className='rounded-xl mb-8 w-80 m-auto md:m-4' loading='lazy'/>
            <div className="md:m-6 shadow-xl p-4">
              <p>"If anyone has a heart and sees this post please like it so it can gain some attention. 
I just found out my poor aunt got 30k stolen. All the money she had left from her husband dying and the money she has to live. 
She had to go donate plasma today just so she could eat.
She's a older woman and none of the family knew untill it was far to late, 
thankfully we got help, Love ur content. Love what you all do.
You can tell how passionate you are about the cause and you help so many people.
I share your content as much as I can to get the word out. 
Thank you to y your entire team BlueprintM6 For recovering  back my money, I work with senior citizens. "</p>
              <strong>Jane</strong> <br />
              <span className='text-colorRed'>Canada</span>
            </div>
          </div> 
        </div>


        <div className="flex flex-col px-padInRem3">
         <div className="m-4 p-6 shadow-xl rounded md:w-3/4 md:m-auto">
          <p className="text-size16 text-lightTextColor">"Being a private investigator and Seeing your recovery skills is like watching a military
 based trained agent take on these scammers, (respect to the rest of your team BlueprintM6)
 scouting, gathering information, close monitoring, targeting weak spots then breaking
 through their security and retrieving valuable evidence with stolen crypto, 
 all aspects of BlueprintM6 on the internet process is perfectly organized and diligently
  carried out with customers that get messed up by these people on a daily basis, 
  so it's nice to see them get a taste of their own medicine. Stay safe and keep busting and getting them in custody"</p>
          <div className="flex mt-4 items-center">
            <img src={Collins} className='rounded-full w-14' />
            <div className='ml-4'>
              <strong>Collins Michelson</strong> <br />
              <span className='text-colorRed'>New Jersey</span>
            </div>
          </div>
         </div>

         <div className="m-4 p-6 shadow-xl rounded md:w-3/4 md:m-auto">
          <p className="text-size16 text-lightTextColor">"I came across dude a few days ago because my father recently lost a lot of money that was meant for his retirement plan due to a scam. We tried everything to get the money back, but unfortunately it could not be traced.
 Honestly BLUEPRINTM6 on the internet God bless you sir! 
 For Helping me and these people get their money back and wanting nothing in 
 return is very rare in the world these days. I am very happy to see that 
 there are still people who stand up to these people and Many thanks to 
 you and your team for this important work, you are doing the right thing."</p>
          <div className="flex mt-4 items-center">
            <img src={Thomas} className='rounded-full w-14' />
            <div className='ml-4'>
              <strong>Thomas</strong> <br />
              <span className='text-colorRed'>Germany</span>
            </div>
          </div>
         </div>

          <div className="m-4 p-6 shadow-xl rounded md:w-3/4 md:m-auto">
          <p className="text-size16 text-lightTextColor">" hey bro. my dad got scammed out of $234,680,  All thanks  to this amazing team because
 of your technique and skills. BLUEPRINTM6 have learned to get his money back. 
 I got every penny I lost to this scammers back, It must be difficult for to get the victim
  to trust that he is legit. This work is awesome though. I love your passion to help
 victims, Hope victims undergoing through such trauma don't give up 
 because they are more people out and people with such incredible much from "</p>
          <div className="flex mt-4 items-center">
            <img src={Vivian} className='rounded-full w-14' />
            <div className='ml-4'>
              <strong>Vivian</strong> <br />
              <span className='text-colorRed'>France</span>
            </div>
          </div>
         </div>

         <div className="m-4 p-6 shadow-xl rounded md:w-3/4 md:m-auto">
          <p className="text-size16 text-lightTextColor">"The art and heritage represent in this help is beautiful, 
inspiring and has represented BLUEPRINT and co in a way I can't find words to express it.
 I haven't seen this kind of art in our community in my lifetime.
 Yet another historical move of the money recovery. 
 So if you can folks lets stop these crooks and help all who get scammed.
 Maybe the government should have a program that helps people who get scammed some kind 
 of assistance to recover the stolen money. Dont you think the GOV should help these poor 
 folks, i do!! Well great work and keep it up "</p>
          <div className="flex mt-4 items-center">
            <img src={Jenny} className='rounded-full w-10' />
            <div className='ml-4'>
              <strong>Jenny Brad</strong> <br />
              <span className='text-colorRed'>Australia</span>
            </div>
          </div>
         </div>
         
        </div>
      </div>
      <Professional/>
    </main>
  )
}

export default Reviewspage