/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '340px',
		},
		extend: {
			colors: {
				primary: 'red',
			},
		},
	},
	plugins: [],
};
