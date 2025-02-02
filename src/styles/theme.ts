export const theme = {
  colors: {
    primary: {
      main: '#607AD4',
      light: '#7C92E6',
      dark: '#4C62AA',
      50: '#F5F7FE',
      100: '#E8ECFC',
      200: '#C5D0F7',
      300: '#A2B4F2',
      400: '#7F98ED',
      500: '#607AD4', // main
      600: '#4C62AA',
      700: '#394A80',
      800: '#263155',
      900: '#13192B'
    },
    secondary: {
      main: '#E4826D',
      light: '#F2A08C',
      dark: '#B66857'
    },
    accent: {
      main: '#498B86',
      light: '#5AABA5',
      dark: '#3A6F6B'
    },
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    }
  },
  spacing: {
    section: {
      sm: '2rem',    // 32px
      md: '3rem',    // 48px
      lg: '4rem',    // 64px
      xl: '5rem',    // 80px
      '2xl': '6rem', // 96px
    },
    content: {
      sm: '1rem',    // 16px
      md: '1.5rem',  // 24px
      lg: '2rem',    // 32px
      xl: '2.5rem',  // 40px
    }
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
  },
  gradients: {
    primary: 'linear-gradient(to right, #4C62AA, #607AD4)',
    secondary: 'linear-gradient(to right, #B66857, #E4826D)',
    accent: 'linear-gradient(to right, #498B86, #5AABA5)',
    light: 'linear-gradient(to right, #F5F7FE, #E8ECFC)',
    dark: 'linear-gradient(to right, #374151, #4B5563)',
    text: {
      primary: 'linear-gradient(to right, #4C62AA, #607AD4)',
      accent: 'linear-gradient(to right, #B66857, #E4826D)',
      subtle: 'linear-gradient(to right, #4B5563, #6B7280)',
    }
  },
  layout: {
    maxWidth: '1280px', // Consistent max-width
    contentPadding: {
      x: '1rem',
      sm: '1.5rem',
      lg: '2rem'
    }
  }
}; 