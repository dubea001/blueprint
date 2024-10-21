import { services } from '../Constants/index';
import AnimateOnView from '../Components/AnimateOnView';

const Services = () => {
    return (
        <section className='my-16 px-6 md:px-8 lg:px-[3.5rem]' id='services'>
            <h2 className='text-lg font-semibold text-primary md:text-2xl md:text-center my-2'>
                Our Key Services
            </h2>
            <h2 className='text-3xl font-bold md:text-4xl mb-6 md:text-center'>
                Services And Solutions
            </h2>
            <p className='md:text-lg leading-8 mb-8 md:text-center md:w-[80%] lg:w-1/2 md:m-auto'>
                Our service are categorized based on the growing needs of client
                and also a function of our advanced resource base, harnessing
                methods to provide solutions that are time saving.
            </p>
            <div className='my-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  place-items-center'>
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className='rounded-lg shadow-lg shadow-gray overflow-hidden min-h-[30rem] max-w-[25rem] flex flex-col items-center'
                        >
                            <AnimateOnView animationClass='animate-fadeIn'>
                                <img
                                    src={service.coverImage}
                                    alt='service offered'
                                    className='w-full h-72 object-cover rounded-lg hover:scale-110 hover:transition-transform hover:duration-300 hover:ease-in-out'
                                />
                                <div className='p-4 my-4'>
                                    <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
                                        {service.title}
                                    </h2>
                                    <p>{service.description}</p>
                                </div>
                            </AnimateOnView>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
