module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: '#f9f9f9', // Light background to keep it fresh and clean
      accent: '#FF6B6B', // Soft red for a romantic touch
      accentHover: '#C15054', // Soft red for a romantic touch
      headline: '#2C2C2C', // Dark color for text to ensure readability
      paragraph: '#4B4B4B', // Slightly lighter text color for contrast
      secondary: '#FFC75F', // Warm secondary color to make CTAs stand out
      tertiary: '#FF61A6', // A vibrant pink to add a playful, romantic vibe
      darkBackground: '#1e1e2b',  // Darker background
      darkHeadline: '#E0E0E0',  // Light color for text on dark background
      darkParagraph: '#B0B0B0',  // Lighter text color for contrast
      darkBlock: '#2E2E3D',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}