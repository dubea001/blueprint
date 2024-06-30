import { Link } from 'react-scroll';
import { MdArrowUpward } from 'react-icons/md';

const ScrollToTop = () => {
    return (
        <div className='fixed bottom-0 left-0 p-2 rounded-lg bg-black m-4 cursor-pointer animate-bounce animate-infinite animate-delay animate-ease-in-out'>
            <Link
                to='Home'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-180}
                duration={500}
            >
                <MdArrowUpward className='text-2xl md:text-3xl text-primaryDark' />
            </Link>
        </div>
    );
};

export default ScrollToTop;
