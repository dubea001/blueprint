import { useState } from 'react';
import { assets } from '../assets/assets';
import CountUp from 'react-countup';
import AnimateOnView from '../Components/AnimateOnView';

const Professional = () => {
    const [countStart, setCountStart] = useState(false);
    const handleInView = () => {
        setTimeout(() => {
            setCountStart(true);
        }, 2000);
    };
    return (
        <section className='relative mx-auto min-h-[25rem] px-6 md:px-8 lg:px-[3.5rem]'>
            <div
                className='absolute inset-0 bg-cover bg-bottom bg-no-repeat scale-x-[-1] overlay'
                style={{
                    backgroundImage: `url(${assets.BackgroundImage})`,
                }}
            ></div>
            <div className='relative z-10 py-12'>
                <AnimateOnView
                    animationClass='animate-fadeIn'
                    onInView={handleInView}
                >
                    <h2 className='text-3xl font-bold md:text-4xl mb-6 text-primaryDark text-center'>
                        In Need Of Professional Services?
                    </h2>
                    <p className='md:text-lg leading-8 text-center text-white md:w-1/2 md:m-auto'>
                        Over the years we have trained our team to work with the
                        best tools especially when it involves information
                        security.
                    </p>
                    <div className='text-white flex my-8 items-center justify-center space-x-4 md:space-x-8'>
                        <div className='bg-primaryDark rounded-lg px-6 py-4 md:px-8 md:py-6'>
                            <strong className='text-base md:text-2xl font-bold lg:text-3xl'>
                                <CountUp
                                    end={74}
                                    duration={3}
                                    start={countStart ? null : 0}
                                />
                                +
                            </strong>
                            <p className='text-sm md:text-base lg:text-xl'>
                                Data Centers
                            </p>
                        </div>
                        <div className='bg-primaryDark rounded-lg px-6 py-4 md:px-8 md:py-6'>
                            <strong className='text-base md:text-2xl font-bold lg:text-3xl'>
                                <CountUp
                                    end={178}
                                    duration={3}
                                    start={countStart ? null : 0}
                                />
                                +
                            </strong>
                            <p className='text-sm md:text-base lg:text-xl'>
                                Secured Systems
                            </p>
                        </div>
                    </div>
                </AnimateOnView>
            </div>
        </section>
    );
};

export default Professional;
