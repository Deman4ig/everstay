/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                script: ['"League Script"', 'cursive'],
                montserrat: ['"Montserrat"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
