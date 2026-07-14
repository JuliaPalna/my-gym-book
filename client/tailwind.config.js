/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#ffffff',
                    text: '#1a1a1a',
                    'text-light':'#ffffff',

                    primary: '#0d9488',
                    'primary-hover': '#00695C',
                    'primary-active': '#004D40',

                    border: '#a3a3a3',
                    'border-dark': '#1a1a1a',
                    'border-hover': '#0d9488',

                    disabled: '#a3a3a3',
                    placeholder: '#a3a3a3',
                    overlay: '#26262666',
                    shadow: '#'
                },
                status: {
                    error: '#991b1b',
                    success: '#22c55e'
                },

            },
            zIndex: {
                fixed: '10',
                modal: '50',
                overlay: '40'
            },
            gap: {
                'list': '1rem',
                'form': '1.5rem',
                'small': '.5rem'
            },
            padding: {
                'layout': '1rem',
                'layout-sm': '3rem',
                'layout-lg': '6rem',
            },
            keyframes: {
                'pop-in': {
                    '0%': { transform: 'scale(0)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            animation: {
                'pop-in': 'pop-in 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
    },
    plugins: [
        function({addComponents, theme}) {
            addComponents({
                '.flex-center': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                },
                '.flex-between': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                },
                '.flex-stretch': {
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'center',
                    flexDirection: 'row',
                },
                '.flex-column': {
                    display: 'flex',
                    flexDirection: 'column',
                },
                '.animate-transform': {
                    transitionProperty: 'transform',
                    transitionDuration: '300ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                },
            })
        }
    ],
};
