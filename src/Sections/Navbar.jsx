import { assets } from '../assets/assets';
import { navLinks } from '../Constants/index';
import { Link } from 'react-scroll';
import { MdMenu, MdClose } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <nav className='flex items-center justify-between py-4'>
            <div
                onClick={refreshPage}
                className='flex items-center justify-start w-fit cursor-pointer'
            >
                <img src={assets.Logo} alt='Logo' width={70} />
                <h1 className='font-semibold text-white hidden md:block md:text-2xl'>
                    BlueprintM6
                </h1>
            </div>
            <ul className='lg:flex items-center justify-center lg:space-x-6 hidden'>
                {navLinks.map((navLink) => (
                    <li
                        key={navLink.label}
                        className='mx-4 px-2 lg:mx-6 lg:px-4 py-1 cursor-pointer text-base font-semibold hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'
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
            <div className='lg:hidden'>
                <div className='bg-primary rounded-md p-1 cursor-pointer'>
                    {showMenu ? (
                        <MdClose
                            className='text-4xl text-white'
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    ) : (
                        <MdMenu
                            className='text-4xl text-white'
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    )}
                </div>

                <ul
                    className={` my-6 h-screen w-screen flex flex-col rounded absolute top-15 right-2 bg-opacity-10 transition-transform ease duration-300 lg:hidden ${
                        showMenu
                            ? 'transform translate-x-0'
                            : 'transform -translate-x-[100%]'
                    }`}
                    style={{ zIndex: 999, backdropFilter: 'blur(10px)' }}
                >
                    {navLinks.map((navLink) => (
                        <li
                            key={navLink.label}
                            className='ml-20 md:ml-32 my-2 px-4 py-1 cursor-pointer text-base font-semibold hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'
                        >
                            <Link
                                to={navLink.href}
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                onClick={() => setShowMenu(false)}
                            >
                                {navLink.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
