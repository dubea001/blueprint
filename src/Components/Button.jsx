const Button = ({ label, icon }) => {
    return (
        <button className='flex items-center justify-center bg-primary px-8 py-3 font-Nunito font-semibold text-base rounded-md shadow-sm shadow-gray w-52 hover:bg-primaryDark hover:transition hover:duration-200 hover:ease-in-out'>
            {label}
            {icon}
        </button>
    );
};

export default Button;
