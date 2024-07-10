import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const gray = {
  100: "#F5F5F5",
  200: "#EBEBEB",
  300: "#C9C9C9",
  400: "#ABABAB",
  500: "#878787",
  600: "#636363",
  700: "#4D4D4D",
  800: "#2B2B2B",
  900: "#0F0F0F",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        kinde: {
          amber: {
            100: "#FFF4DB",
            900: "#95680E"
          },
          blue: {
            100: "#EBF2FF",
            900: "#002D80"
          },
          grey: {
            50: "#F5F5F5",
            100: "#EBEBEB",
            200: "#DBDBDB",
            300: "#C9C9C9",
            400: "#ABABAB",
            500: "#878787",
            600: "#636363",
            700: "#4D4D4D",
            800: "#2B2B2B",
            900: "#0F0F0F"
          },
          purple: {
            100: "#F4E5FF",
            500: "#903DD1"
          },
          red: {
            100: "#FFEBEB",
            900: "#800000"
          }
        },
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.black,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: gray
      },
      fontFamily: {
        // Your preferred text font. Starlight uses a system font stack by default.
        sans: ['"Inter"']
      },
      boxShadow: {
        "elevation-3":
          "0 -.25rem .75rem #1214170d,0 .9375rem 1.5rem #12141712,0 .375rem .75rem #1214170f",
        "elevation-4":
          "0 .1875rem .375rem #12141714,0 .625rem 1.25rem #12141714,0 -.1875rem .75rem #1214170a"
      }
    }
  },
  plugins: [starlightPlugin()]
};
