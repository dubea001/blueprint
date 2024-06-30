import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { reviews } from '../Constants/index';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 976,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 5000,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 5000,
                },
            },
        ],
    };

    return (
        <section
            className='bg-background text-center my-12 py-6 px-6 md:px-8 lg:px-[3.5rem]'
            id='reviews'
        >
            <h2 className='text-lg font-semibold text-primary md:text-2xl md:text-center my-2'>
                Testimonials
            </h2>
            <h2 className='text-3xl font-bold md:text-4xl mb-6 md:text-center'>
                What Clients Say About Us
            </h2>
            <p className='md:text-lg leading-8 mb-8 md:text-center md:w-[80%] lg:w-1/2 md:m-auto'>
                See what our clients have to say about their experiences with
                BluepriintM6, specialists in aiding victims of scams. Discover
                firsthand accounts of our dedication to recovery and
                empowerment. Join us in the pursuit of justice and restoration.
            </p>
            <div className='my-12 mx-6'>
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div
                            className='min-h-[30rem] mx-2 px-4 pt-4 shadow-xl bg-white rounded-xl text-start flex flex-col justify-between'
                            key={index}
                        >
                            <p className='text-gray min-h-80'>{review.text}</p>
                            <div className='flex items-center mt-4'>
                                <img
                                    src={review.image}
                                    alt='client'
                                    className='w-20 h-20 rounded-full mr-4'
                                />
                                <div>
                                    <p className='font-bold text-primaryDark'>
                                        {review.name}
                                    </p>
                                    <span className='text-sm'>
                                        {review.country}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
