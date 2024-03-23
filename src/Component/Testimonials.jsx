import React from 'react';
import { Link } from 'react-router-dom';

import JamieFassonakiProfile from '../assets/images/smiling-mature-businessman-standing.jpg';
import BrunoFernandezProfile from '../assets/images/Image-GAZW98W.jpg';
import BrianMichealProfile from '../assets/images/Image-KV7GHYQ.jpg';
import NelsonBecker from '../assets/images/confident-handsome.jpg';

const Testimonials = () => {
 return( <section className="my-8 py-8 bg-lightBlueBg">
    
        <div className="px-pad8">
          <h5 className="text-center font-semibold text-size14">TESTIMONIALS</h5>
          <h1 className="text-center font-bold my-4 text-mainTextColor text-size35 md:text-size45 md:leading-none">What Clients Says About Us</h1>
          <p className="text-center text-size16 my-4 mx-4 text-lightTextColor md:w-1/2 md:mx-auto">
            See what our clients have to say about their experiences with BluepriintM6, specialists in aiding victims of scams.
            Discover firsthand accounts of our dedication to recovery and empowerment. Join us in the pursuit of justice and restoration.
          </p>
          <div className="text-center">
            <Link to="/reviews" className="font-normal cursor-pointer text-size16 px-pad16 py-pad8 bg-mainTextColor text-white hover:font-medium hover:bg-hoverTextMainColor">Learn More</Link>
          </div>
        </div>

        <div className="flex flex-col p-4 md:flex-wrap md:flex-row md:justify-center md:items-center">
            <div className="rounded-lg shadow-md p-4 bg-white m-4 md:w-2/5">
              <p className="p-4 text-lightTextColor font-normal mb-4">
                GOOD JOB BlueprintM6,
                  Your agents were fast towards helping me retrieve my $683,536 USDT, Massive respect and love for every of your team who works
                  behind the scenes to make sure people get the help they deserve, keep up the good work
              </p>
              <div className='px-4 flex items-center'>
                <img src={NelsonBecker} alt="" className="w-12 h-12 rounded-full mr-4" />
                <h4 className="font-medium">Nelson Becker</h4>
              </div>
            </div>

            <div className="rounded-lg shadow-md p-4 bg-white m-4 md:w-2/5">
            <p className="p-4 text-lightTextColor font-normal mb-4">
            My device got hacked, I mistakenly clicked on a link sent to my account and I got hacked,
              I had to set up a new account after a few days of trying to contact support and got no reply.
              I came across someone giving a recommendation about BlueprintM6 and I decided to give it a try.
                I sent them the er phone number and username used in creating the account.
                After some minutes I was asked to log back in by the agent assigned to me and it worked, I really can’t stop singing joyful praise for this great job.
            </p>
            <div className='px-4 flex items-center'>
            <img src={JamieFassonakiProfile} alt="" className="w-12 h-12 rounded-full mr-4" />
            <h4 className="font-medium">Jamie Fassonaki</h4>
            </div>
            </div>

            <div className="rounded-lg shadow-md p-4 bg-white m-4 md:w-2/5">
            <p className="p-4 text-lightTextColor font-normal mb-4">
            We need more people like you, Honestly since the appeal not working I don’t even know that there is 3rd party reactivation
            until I encounter your service and support If we had an army of people like you,
              we could stamp out these total deactivated accounts in no time. 
              I love that you’re helping the victims, 
              too it’s ultra gratifying when you are able to save people in real-time like you do thanks BlueprintM6 for successfully resorting back to my deactivated accounts.
            </p>
            <div className='px-4 flex items-center'>
            <img src={BrunoFernandezProfile} alt="" className="w-12 h-12 rounded-full mr-4" />
            <h4 className="font-medium">Bruno Fernandez</h4>
            </div>
            </div>

            <div className="rounded-lg shadow-md p-4 bg-white m-4 md:w-2/5">
            <p className="p-4 text-lightTextColor font-normal mb-4">
            I applied for a loan recently and couldn’t get it because my credit score was low
              and I’ve been in search for a job and still  couldn’t get any simply because 
              I was setup about 3 years ago which got me a bad record, 
              I was recommended to BlueprintM6 and after 24 hour they got the bad record on my name 
              cleared and my credit score was increased to 899 so much appreciation to you and your team
            </p>
            <div className='px-4 flex items-center'>
            <img src={BrianMichealProfile} alt="" className="w-12 h-12 rounded-full mr-4" />
            <h4 className="font-medium">Brian Micheal</h4>
            </div>
            </div>
        </div>



  </section> )
}

export default Testimonials