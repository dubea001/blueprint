import { Navbar, Hero } from '../Sections/index';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className='relative mx-auto min-h-[42rem] px-6 md:px-8 lg:px-[3.5rem]'>
            <div
                className='absolute inset-0 bg-cover md:bg-center bg-no-repeat bg-right scale-x-[-1] overlay'
                style={{
                    backgroundImage: `url(${assets.BackgroundImage})`,
                }}
            ></div>
            <div className='relative z-10 text-white animate-fadeIn'>
                <Navbar />
                <Hero />
            </div>
        </div>
    );
};

export default Header;
