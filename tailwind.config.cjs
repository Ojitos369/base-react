// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        },
    },
    plugins: [
        plugin(function({ addBase, theme }) {
            addBase({
                'h1': { fontSize: theme('fontSize.2xl') },
                'h2': { fontSize: theme('fontSize.xl') },
                'h3': { fontSize: theme('fontSize.lg') },
                'a': {
                    color: theme('colors.blue.600'),
                    textDecorationLine: 'underline',
                }
            })
        })
    ],
}