import { useState } from 'react';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { assets } from '../assets/assets';
import AnimateOnView from '../Components/AnimateOnView';

const About = () => {
    const [countStart, setCountStart] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 900,
        fade: true,
        cssEase: 'ease-in-out',
    };

    const handleInView = () => {
        setTimeout(() => {
            setCountStart(true);
        }, 1000);
    };

    return (
        <section className='px-6 md:px-8 lg:px-[3.5rem] my-16' id='about'>
            <h2 className='text-lg font-semibold text-primary md:text-2xl md:text-center my-2'>
                About Us
            </h2>
            <div className='flex flex-col justify-center lg:flex-row space-y-6'>
                <div className='lg:w-1/2 mt-6'>
                    <AnimateOnView
                        animationClass='animate-fadeRight'
                        onInView={handleInView}
                    >
                        <h2 className='text-3xl font-bold md:text-4xl mb-6'>
                            Providing
                            <span className='text-primary'> Solutions </span>
                            Company
                        </h2>
                        <p className='md:text-lg leading-8 mb-8'>
                            Having an amazing team is not enough, the right
                            tools and a dependable knowledge base are key to
                            providing services and solutions. This brings us all
                            to accessibility. After years of research coupled
                            with several recognitions of our service
                            delivery,&nbsp; we have created strategic
                            partnerships with corporations and bodies that have
                            a strong hold on important databases.
                        </p>
                        <div className='flex space-x-6'>
                            <div className='bg-black rounded-lg px-4 py-2 md:px-8 md:py-4'>
                                <strong className='text-white font-bold text-2xl md:text-4xl'>
                                    <CountUp
                                        end={72}
                                        duration={3}
                                        start={countStart ? null : 0}
                                    />
                                    k+
                                </strong>
                                <p className='text-white text-sm md:text-base'>
                                    Satisfied Clients
                                </p>
                            </div>
                            <div className='bg-primary rounded-lg px-4 py-2 md:px-8 md:py-4'>
                                <strong className='text-white font-bold text-2xl md:text-4xl'>
                                    <CountUp
                                        end={19}
                                        duration={3}
                                        start={countStart ? null : 0}
                                    />
                                    m+
                                </strong>
                                <p className='text-white text-sm md:text-base'>
                                    Threats Blocked
                                </p>
                            </div>
                        </div>
                    </AnimateOnView>
                </div>

                <div className='lg:w-1/2 md:px-6'>
                    <Slider {...settings}>
                        <div className='border-4 border-primary w-[25rem]'>
                            <img src={assets.Slider1} className='w-full' />
                        </div>
                        <div className='border-4 border-primary w-[25rem]'>
                            <img src={assets.Slider2} className='w-full' />
                        </div>
                        <div className='border-4 border-primary w-[25rem]'>
                            <img src={assets.Slider3} className='w-full' />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default About;
