import Button from '../Components/Button';
import { MdArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div
            className='flex flex-col md:items-center justify-center my-8 md:my-16'
            id='Home'
        >
            <h1 className='text-4xl font-bold md:text-6xl mb-6 leading-relaxed md:text-center'>
                Professionals
                <span className='text-primary'> Providing</span> <br /> Advanced
                Solutions
            </h1>
            <p className='md:w-[80%] lg:w-1/2 md:text-lg leading-6 md:leading-8 mb-12 md:ml-4'>
                BlueprintM6 Technology is to create more options, so does it
                create challenges. Providing solutions to these challenges in an
                advanced manner is the reason for our increasing numbers.
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
        </div>
    );
};

export default Hero;
