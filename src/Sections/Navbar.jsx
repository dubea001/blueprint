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
        <nav className='flex lg:flex-row justify-between items-center  px-8 py-4'>
            <div className='flex items-center justify-between w-full lg:w-auto z-50'>
                <div
                    onClick={refreshPage}
                    className='flex items-center justify-start w-fit cursor-pointer'
                >
                    <img src={assets.Logo} alt='Logo' width={70} />
                    <h1 className='font-semibold text-white hidden md:block md:text-2xl'>
                        BlueprintM6
                    </h1>
                </div>
                <span className='bg-primary rounded-md p-1 cursor-pointer lg:hidden'>
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
                </span>
            </div>

            <div
                className={`lg:static bg-navBg lg:bg-opacity-0 absolute lg:min-h-fit min-h-screen top-24 left-0 w-full lg:w-auto flex flex-col lg:flex-row items-start lg:items-center px-5 transition-all duration-500 ease-in-out ${
                    showMenu
                        ? 'right-[100%] opacity-100'
                        : 'left-[50%] opacity-0 lg:opacity-100'
                }`}
            >
                <ul className='flex lg:items-center ml-6 lg:gap-12 gap-8 flex-col lg:flex-row mt-8 lg:mt-0'>
                    {navLinks.map((navLink) => (
                        <li
                            key={navLink.label}
                            className='px-2 lg:px-4 py-1 cursor-pointer text-base font-semibold hover:text-primary transition duration-200'
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
        </nav>
    );
};

export default Navbar;
