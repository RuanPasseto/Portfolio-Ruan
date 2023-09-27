import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['var(--font-montserrat)']
        },
        colors:{
          "stone":{
            '800': '#0D0D0D',
            '300':'#DAE2DC'
  
          },
          'blue':{
              '700': '#011640',
              '200': '#49E1F2'
            },
            'yellow':{
              '300': '#F2CA50',
              '500': '#F2B950'
            },
          },
    },
  },
  plugins: [],
}
export default config
