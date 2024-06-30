import { useRef, useEffect } from 'react';
const useIntersectionObserver = (callback, options, inViewCallback) => {
    const elementRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    if (inViewCallback) {
                        inViewCallback();
                    }
                }
            });
        }, options);
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [callback, options, inViewCallback]);
    return elementRef;
};
export default useIntersectionObserver;
