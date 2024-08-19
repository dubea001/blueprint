import { assets } from '../assets/assets';
import Form from '../Components/Form';
import AnimateOnView from '../Components/AnimateOnView';

const ContactUs = () => {
    return (
        <section className='my-8 px-4 md:px-8 lg:px-[3.5rem]' id='contact'>
            <h2 className='text-3xl font-bold md:text-4xl mb-6 text-center'>
                Get Started
            </h2>
            <p className='md:text-lg leading-8 mb-8 text-center md:w-[80%] lg:w-1/2 md:m-auto'>
                Connect with our experts effortlessly. Complete the form below
                to get started. Experience our swift response times—we're here
                to assist you promptly.
            </p>
            <AnimateOnView animationClass='animate-slideUp'>
                <div className='flex flex-col lg:flex-row lg:space-x-6 lg:justify-evenly mt-12'>
                    <div className='mb-6 lg:w-1/2'>
                        <Form />
                    </div>

                    <div className='md:w-[80%] mx-auto shadow-2xl shadow-gray rounded-xl lg:w-1/2'>
                        <img
                            src={assets.GetStartedImage}
                            alt='customer care'
                            className='w-full object-cover'
                        />
                        <hr className='my-4 text-gray text-2xl' />
                        <div className='m-4'>
                            <h4 className='font-semibold text-2xl md:text-3xl my-4'>
                                Request For Professional Services
                            </h4>
                            <p className='font-semibold text-lg md:text-xl'>
                                Office Address
                            </p>
                            <span className='text-base text-primary'>
                                San Francisco, California
                            </span>
                            <p className='font-semibold text-lg md:text-xl'>
                                Mail Address
                            </p>
                            <span className='text-base text-primary'>
                                blueprintM6@gmail.com
                            </span>
                            <br />
                            <strong className='text-xl my-2 font-bold'>
                                +1 (920) 355-3142
                            </strong>
                        </div>
                    </div>
                </div>
            </AnimateOnView>
        </section>
    );
};

export default ContactUs;
