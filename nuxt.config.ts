export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
      '@nuxt/devtools',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: {
    enabled: true,
  },
})
