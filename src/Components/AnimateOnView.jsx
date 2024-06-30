import { useState } from 'react';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';

const AnimateOnView = ({ animationClass, children, onInView }) => {
    const [inView, setInView] = useState(false);
    const ref = useIntersectionObserver(
        (element) => {
            setInView(true);
            element.classList.add(animationClass);
        },
        {
            threshold: 0.1,
        },
        onInView
    );
    return (
        <div
            ref={ref}
            className={`transition-opacity duration-500 ease-out ${
                inView ? '' : 'opacity-0'
            }`}
        >
            {children}
        </div>
    );
};

export default AnimateOnView;
