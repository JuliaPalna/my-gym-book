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

                    //border outline
                    border: '#a3a3a3',
                    'border-dark': '#1a1a1a',
                    'border-hover': '#0d9488',

                    disabled: '#a3a3a3',
                    placeholder: '#a3a3a3',
                    overlay: '#26262666',
                    shadow: '#'
                },
                status: {
                    error: '#991b1b', //red
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
            },
            padding: {
                'layout': '1rem',
                'layout-sm': '3rem',
                'layout-lg': '6rem',
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

            })
        }
    ],
};
