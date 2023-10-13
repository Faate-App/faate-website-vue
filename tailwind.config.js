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
      background: '#0f0e17',
      accent: '#ff8906',
      headline: '#fffffe',
      paragraph: '#a7a9be',
      secondary: '#f25f4c',
      tertiary: '#e53170'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}