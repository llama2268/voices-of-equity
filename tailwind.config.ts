import { type Config } from "tailwindcss";
import { theme } from "./src/styles/theme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: theme.colors,
      spacing: theme.spacing,
      boxShadow: theme.shadows,
      backgroundImage: theme.gradients,
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-montserrat)', 'system-ui', 'sans-serif'], // Enforce single font style (AHA)
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} satisfies Config;