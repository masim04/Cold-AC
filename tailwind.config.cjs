/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cold: {
          950: '#021024', // Deepest obsidian navy
          900: '#052659', // Deep nautical navy
          800: '#113567', // Rich midnight
          700: '#1d4d80', // Royal ocean
          600: '#5483B3', // Steel blue
          500: '#6992be', // Mid frost blue
          400: '#7DA0CA', // Soft glacial sky
          300: '#9ec1e8', // Light frost
          200: '#b8dcfa', // Powder ice
          100: '#C1E8FF', // Crisp ice highlight
          50:  '#F0F7FD'  // Clean cold white background
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 30px rgba(2, 16, 36, 0.06)',
        'frost': '0 8px 32px 0 rgba(84, 131, 179, 0.15)',
        'glow-ice': '0 0 25px rgba(193, 232, 255, 0.45)',
        'glow-navy': '0 10px 40px -10px rgba(5, 38, 89, 0.5)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse at top, #0d3875 0%, #052659 50%, #021024 100%)',
        'ice-gradient': 'linear-gradient(135deg, #C1E8FF 0%, #7DA0CA 100%)',
        'navy-gradient': 'linear-gradient(135deg, #052659 0%, #021024 100%)',
        'card-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F5FAFE 100%)'
      }
    }
  },
  plugins: []
}

