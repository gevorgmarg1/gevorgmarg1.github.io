export default {
  target: 'static',
  ssr: false,
  head: {
    titleTemplate: 'Ethics Final Project',
    title: 'Ethics Final Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        hid: 'description',
        content:
          'Interactive website exploring the ethical issues of monopolies in the tech industry.'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
      }
    ]
  },
  loadingIndicator: {
    name: 'rectangle-bounce',
    color: '#F29B9B',
    background: '#2E1414'
  },
  css: ['aos/dist/aos.css', '~/assets/font/biko.css'],
  plugins: [
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/lenis', ssr: false }
  ],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],
  vuetify: {
    customVariables: ['~/assets/scss/main.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#F29B9B',
          accent: '#2E1414',
          background: '#551616'
        }
      }
    }
  },
  build: {
    transpile: ['lenis']
  }
}
