import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    return (
        <>
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                theme='dark'
                transition:Zoom
            />
        </>
    );
};

export default Toastify;
