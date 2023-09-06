/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      miniPhone: '320px',
      // => @media (min-width: 320px) { ... }

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      big: '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'slate-gray': '#708090',
        'toolbeng-blue': '#0A3771',
        'toolbeng-red': '#AD4043',
        'bubblechat-blue-toolbeng': '#0A3771',
        'purple-chat-toolbeng': '#4D476C',
        'blue-background-toolbeng': '#B9C2CE',
        'blue-border-toolbeng': '#0A3771',
        'red-background-toolbeng': '#DAC4C4',
        'purple-background-toolbeng': '#8368D0',
        'salmon-background-toolbeng': '#E3B0AE',
        'red-text-toolbeng': '#8E3F42',
      },
      fontSize: {
        vSize: '10px',
        cSize: '12px',
        aSize: '14px',
        kSize: '16px',
        sSize: '18px',
        mSize: '20px',
        nSize: '24px',
        rSize: '32px',
        lSize: '64px',
        xSize: '48px',
        hSize: '56px',
      },
    },
  },
  plugins: [],
};
