import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    screens : {
       'min-xs':'280px',
       'min-xs-g':'360px',
       'mid-xs':'412px',
       'higher-mid-xs':'540px',
       'sm':'640px',
       'md':'768px',
       'greater-mid-xs':'820px',
       'greater-2xl-xs':'912px',
       'lg':'1024px',
       'xl':'1280px',
       '2xl':'1536px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
