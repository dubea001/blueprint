import { assets } from '../assets/assets';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinks } from '../Constants/index';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FooterSection = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        setEmail('');
    };
    return (
        <footer className='bg-background p-2 md:px-8 lg:px-[3.5rem] py-6 mt-16'>
            <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 my-6'>
                <div className='flex-1 p-4'>
                    <div className='flex items-center justify-start w-fit cursor-pointer'>
                        <img
                            src={assets.Logo}
                            alt='Logo'
                            className='w-20 h-20 md:w-28 md:h-28 lg:w-40 lg:h-40'
                        />
                    </div>
                    <span className='text-base text-gray lg:text-lg'>
                        San Francisco, California
                    </span>
                    <br />
                    <span className='text-base text-gray lg:text-lg'>
                        blueprintM6@gmail.com
                    </span>

                    <div className='flex items-center space-x-2 justify-start my-4 w-fit'>
                        <a
                            href='https://www.facebook.com/blueprintm6/'
                            target='_blank'
                            className='w-8 h-8 md:w-12 md:h-12 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:border-none hover:transition hover:duration-200 hover:ease-in-out'
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href='https://www.instagram.com/blueprintm6/'
                            target='_blank'
                            className='w-8 h-8 md:w-12 md:h-12 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:border-none hover:transition hover:duration-200 hover:ease-in-out'
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href='https://wa.me/19203553142'
                            target='_blank'
                            className='w-8 h-8 md:w-12 md:h-12 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:border-none hover:transition hover:duration-200 hover:ease-in-out'
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href='https://www.x.com/blueprintm6/'
                            target='_blank'
                            className='w-8 h-8 md:w-12 md:h-12 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:border-none hover:transition hover:duration-200 hover:ease-in-out'
                        >
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
                <div className='flex-1 p-4'>
                    <h2 className='text-lg md:text-xl py-4 font-bold text-black lg:text-2xl mb-2'>
                        Useful Links
                    </h2>
                    <ul className=''>
                        {navLinks.map((navLink) => (
                            <li
                                key={navLink.label}
                                className='cursor-pointer text-base w-fit pr-4 my-1 text-gray md:text-lg hover:text-primaryDark hover:transition hover:duration-300 hover:ease-in-out'
                            >
                                <Link
                                    to={navLink.href}
                                    activeClass='active'
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {navLink.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex-1 p-4'>
                    <h2 className='text-lg md:text-xl py-4 font-bold text-black lg:text-2xl mb-2'>
                        Newsletter
                    </h2>
                    <p className='text-base text-gray lg:text-lg mb-4'>
                        Stay up to date with our insights and analysis in the
                        world of Information Technology, Cryptocurrency and much
                        more. Just sign up with your email.
                    </p>
                    <input
                        type='email'
                        placeholder='Your email address'
                        className='py-[8px] px-4 mr-2 w-72 mb-2 focus:outline-primary outline-none'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type='button'
                        className='bg-primary cursor-pointer py-[8px] px-4 text-white font-semibold hover:bg-primaryDark hover:transition hover:duration-300 hover:ease-in-out'
                        onClick={handleSubscribe}
                    >
                        Subscribe
                    </button>
                </div>
            </div>

            <hr className='my-4 text-gray text-2xl' />
            <p className='text-base text-gray md:text-lg text-center'>
                Copyright © 2012-2024 BlueprintM6.com All Rights Reserved.
            </p>
        </footer>
    );
};

export default FooterSection;
