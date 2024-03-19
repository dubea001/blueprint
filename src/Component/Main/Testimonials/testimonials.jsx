import React from "react";
import './testimonials.css';

import JamieFassonakiProfile from '../../../assets/smiling-mature-businessman-standing.jpg';
import BrunoFernandezProfile from '../../../assets/Image-GAZW98W.jpg';
import BrianMichealProfile from '../../../assets/Image-KV7GHYQ.jpg';
import NelsonBecker from '../../../assets/confident-handsome.jpg';

const Testimonials = () => {
  return( <section className="testimony-section">
    
        <div className="testimonial-title-container">
          <h5 className="testimonial-header">TESTIMONIALS</h5>
          <h1 className="testimonial-title">What Clients Says About Us</h1>
          <p className="testimonial-paragraph-text">
            Lorem ipsum dolor sit abet, consectetur advising edit. Ut edit tellus, lucius nec ullamcorper matts, pulvinus darius leo.
          </p>
          <a className="learn-more-link">Learn More</a>
        </div>

        <div className="testimonial-content-container">
            <div className="testimonial-container">
        <p className="testimonial-text-paragraph">
          GOOD JOB BlueprintM6,
            Your agents were fast towards helping me retrieve my $683,536 USDT, Massive respect and love for every of your team who works
            behind the scenes to make sure people get the help they deserve, keep up the good work
        </p>
        <div className="user-profile-container">
        <img src={NelsonBecker} alt="" className="user-profile-image" />
        <h4 className="user-profile-name">Nelson Becker</h4>
        </div>
            </div>

            <div className="testimonial-container">
            <p className="testimonial-text-paragraph">
            My device got hacked, I mistakenly clicked on a link sent to my account and I got hacked,
              I had to set up a new account after a few days of trying to contact support and got no reply.
              I came across someone giving a recommendation about BlueprintM6 and I decided to give it a try.
                I sent them the er phone number and username used in creating the account.
                After some minutes I was asked to log back in by the agent assigned to me and it worked, I really can’t stop singing joyful praise for this great job.
            </p>
            <div className="user-profile-container">
            <img src={JamieFassonakiProfile} alt="" className="user-profile-image" />
            <h4 className="user-profile-name">Jamie Fassonaki</h4>
            </div>
            </div>

            <div className="testimonial-container">
            <p className="testimonial-text-paragraph">
            We need more people like you, Honestly since the appeal not working I don’t even know that there is 3rd party reactivation
            until I encounter your service and support If we had an army of people like you,
              we could stamp out these total deactivated accounts in no time. 
              I love that you’re helping the victims, 
              too it’s ultra gratifying when you are able to save people in real-time like you do thanks BlueprintM6 for successfully resorting back to my deactivated accounts.
            </p>
            <div className="user-profile-container">
            <img src={BrunoFernandezProfile} alt="" className="user-profile-image" />
            <h4 className="user-profile-name">Bruno Fernandez</h4>
            </div>
            </div>

            <div className="testimonial-container">
            <p className="testimonial-text-paragraph">
            I applied for a loan recently and couldn’t get it because my credit score was low
              and I’ve been in search for a job and still  couldn’t get any simply because 
              I was setup about 3 years ago which got me a bad record, 
              I was recommended to BlueprintM6 and after 24 hour they got the bad record on my name 
              cleared and my credit score was increased to 899 so much appreciation to you and your team
            </p>
            <div className="user-profile-container">
            <img src={BrianMichealProfile} alt="" className="user-profile-image" />
            <h4 className="user-profile-name">Brian Micheal</h4>
            </div>
            </div>
        </div>



  </section> )
}

export default Testimonials