import { useEffect } from 'react';

const Tidio = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//code.tidio.co/fwdzxm7lemkv8vnqhspczshwm4pxk079.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return <div className='fixed bottom-0 left-0 p-4 '></div>;
};

export default Tidio;
