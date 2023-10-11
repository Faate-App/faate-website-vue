export default {
  modules: ['@nuxtjs/tailwindcss'],
  script: [
    {
      src: '/vendor/preline/dist/preline.js',
      body: true,
      defer: true
    }
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
};