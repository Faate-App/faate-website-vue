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
      headline: '#2C2C2C', // Dark color for text to ensure readability
      paragraph: '#4B4B4B', // Slightly lighter text color for contrast
      secondary: '#FFC75F', // Warm secondary color to make CTAs stand out
      tertiary: '#FF61A6' // A vibrant pink to add a playful, romantic vibe
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}