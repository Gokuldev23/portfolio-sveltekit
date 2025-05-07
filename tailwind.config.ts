import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors:{
        primary:'#4D96EE',
        secondary:'#7446D1',
        warning:'#99D139'
      },
      screens : {
        xs:"578px"
      }
    },
  },

  plugins: [typography]
} satisfies Config;
