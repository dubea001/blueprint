import { useState } from 'react';
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { faqs } from '../Constants/index';

const Faq = () => {
    const [showAnswer, setShowAnswer] = useState(
        new Array(faqs.length).fill(false)
    );

    const toggleAnswer = (index) => {
        setShowAnswer((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };
    return (
        <section
            className='text-center py-6 px-6 md:px-8 lg:px-[3.5rem]'
            id='faq'
        >
            <h2 className='text-lg font-semibold text-primary md:text-2xl md:text-center my-2'>
                F. A. Q.
            </h2>
            <h2 className='text-3xl font-bold md:text-4xl mb-6 md:text-center'>
                Frequently Asked Questions
            </h2>
            <p className='md:text-lg leading-8 mb-8 md:text-center md:w-[80%] lg:w-1/2 m-auto'>
                Here are some of the most frequently asked questions from
                clients like you, gathered over time. Discover detailed answers
                and insights to help you understand how we can support your
                needs. If you have any additional questions, feel free to reach
                out to us!
            </p>
            <div className='lg:w-[80%] mx-auto my-6'>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className='border-b border-gray px-2 py-4 my-6'
                    >
                        <div className='flex items-center justify-between px-4 mb-6'>
                            <h3 className='text-lg font-semibold md:text-2xl text-start'>
                                {faq.question}
                            </h3>
                            <span>
                                {showAnswer[index] ? (
                                    <MdOutlineKeyboardArrowUp
                                        className='cursor-pointer text-2xl lg:text-3xl'
                                        onClick={() => toggleAnswer(index)}
                                    />
                                ) : (
                                    <MdOutlineKeyboardArrowDown
                                        className='cursor-pointer text-2xl lg:text-3xl'
                                        onClick={() => toggleAnswer(index)}
                                    />
                                )}
                            </span>
                        </div>

                        {showAnswer[index] && (
                            <p className='text-primary px-6 text-start'>
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
