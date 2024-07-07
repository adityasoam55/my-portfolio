/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      keyframes: {
        // 'fade-in': {
        //   '0%': { opacity: '0' },
        //   '100%': { opacity: '1' },
        // },
        'bounce': {
          '0%, 100%': {
              transform: 'translateY(-25%)',
              'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
              transform: 'none',
              'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          }
      }
      },
      animation: {
        // 'fade-in': 'fade-in 1s ease-out',
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
}



