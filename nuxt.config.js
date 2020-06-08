export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'cs',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  env: {
    compileTimestamp: new Date(),
  },

  loading: {color: '#fff'},

  css: [
    {src: 'latex.css/style.css', lang: 'css'}
  ],

  plugins: [],

  buildModules: [
    '@nuxt/typescript-build'
  ],

  modules: [
    '@nuxtjs/pwa'
  ],

  build: {

    extend(config, ctx) {
    }
  }
}
