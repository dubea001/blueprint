import { useState } from 'react';
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
    MdArrowRightAlt,
} from 'react-icons/md';
import { ourValues } from '../Constants/index';
import { assets } from '../assets/assets';
import Button from '../Components/Button';
import { Link } from 'react-scroll';
import AnimateOnView from '../Components/AnimateOnView';

const CoreValues = () => {
    const [showAnswer, setShowAnswer] = useState(
        new Array(ourValues.length).fill(false)
    );

    const toggleAnswer = (index) => {
        setShowAnswer((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <section className='px-6 md:px-8 lg:px-[3.5rem]' id='corevalues'>
            <h2 className='text-lg font-semibold text-primary md:text-2xl md:text-center my-2'>
                How We Do It
            </h2>
            <div className=''>
                <div className='flex flex-col lg:items-start lg:flex-row lg:space-x-6 mb-8'>
                    <div className='lg:w-1/2'>
                        <AnimateOnView animationClass='animate-fadeRight'>
                            <h2 className='text-3xl font-bold md:text-4xl mb-6'>
                                Our Approach
                            </h2>
                            <p className='md:text-lg leading-8 mb-8'>
                                BlueprintM6 represents a team of cyber
                                technology enthusiasts always on the look to
                                provide solutions and services to an
                                ever-growing population as we evolve
                                technologically.
                            </p>
                        </AnimateOnView>
                    </div>
                    <div className='lg:w-1/2 '>
                        {ourValues.map((values, index) => (
                            <div
                                key={index}
                                className='border-b border-gray px-2 py-4 my-6'
                            >
                                <div className='flex items-center justify-between px-4 mb-6'>
                                    <h3 className='text-lg font-semibold md:text-2xl'>
                                        {values.text}
                                    </h3>
                                    <span>
                                        {showAnswer[index] ? (
                                            <MdOutlineKeyboardArrowUp
                                                className='cursor-pointer text-2xl lg:text-3xl'
                                                onClick={() =>
                                                    toggleAnswer(index)
                                                }
                                            />
                                        ) : (
                                            <MdOutlineKeyboardArrowDown
                                                className='cursor-pointer text-2xl lg:text-3xl'
                                                onClick={() =>
                                                    toggleAnswer(index)
                                                }
                                            />
                                        )}
                                    </span>
                                </div>

                                {showAnswer[index] && (
                                    <p className='text-primary px-6'>
                                        {values.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:pr-6 lg:justify-between lg:items-start lg:flex-row lg:space-x-6'>
                    <div className='lg:w-[45%]'>
                        <AnimateOnView animationClass='animate-fadeIn'>
                            <img
                                src={assets.CoreValuesImage}
                                alt='core values'
                                className='w-full object-cover'
                            />
                        </AnimateOnView>
                    </div>
                    <div className='lg:w-1/2 mb-8'>
                        <AnimateOnView animationClass='animate-fadeLeft'>
                            <h2 className='text-3xl font-bold md:text-4xl mb-6'>
                                Core Values
                            </h2>
                            <p className='md:text-lg leading-8 mb-4'>
                                Working as a team with each expert constrained
                                to their area of specialization. We are applying
                                standard practices needed for excellent service
                                and solutions to be accessible to everyone. Our
                                mission for us is to deliver these services
                                seamlessly and in such a manner that our clients
                                will have more reasons to use tech.
                            </p>
                            <Link
                                to='contact'
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                            >
                                <Button
                                    label='Get Started'
                                    icon={
                                        <MdArrowRightAlt className='ml-2 text-2xl text-white' />
                                    }
                                />
                            </Link>
                        </AnimateOnView>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
