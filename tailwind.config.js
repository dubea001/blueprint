/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            primary: '#009EFF',
            primaryDark: '#0576C7',
            gray: '#54595F',
            black: '#000000',
            white: '#FFFFFF',
            red: '#fa051d',
            background: '#DCEBF4',
        },
        fontFamily: {
            Inter: '"Inter", sans-serif',
            Nunito: '"Nunito Sans", sans-serif',
        },
        extend: {
            keyframes: {
                bounce: {
                    '0%, 100%': {
                        transform: 'translateY(-25%)',
                        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
                    },
                    '50%': {
                        transform: 'none',
                        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
                    },
                },
                fadeIn: {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': {
                        opacity: 1,
                    },
                },
                fadeRight: {
                    '0%': { transform: 'translateX(-250px)' },
                    '100%': { transform: 'translateX(0)' },
                },
                  fadeLeft: {
                    '0%': { transform: 'translateX(250px)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(250px)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                bounce: 'bounce 2s infinite',
                fadeIn: 'fadeIn 3s',
                fadeRight: 'fadeRight 1s ease-in-out',
                fadeLeft: 'fadeLeft 1s ease-in-out',
                slideUp: 'slideUp 1s ease-in-out',
            },
        },
    },
    plugins: [],
};
