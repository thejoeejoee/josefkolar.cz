export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'cs'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    compileTimestamp: new Date()
  },

  loading: { color: '#fff' },

  css: [
    { src: 'latex.css/style.css', lang: 'css' }
  ],

  plugins: [{ src: './plugins/vue-typer.client.ts', mode: 'client' }],

  buildModules: [
    '@nuxt/typescript-build'
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'

  ],
  styleResources: {
    scss: [
      'assets/scss/file/_path.scss',
      'assets/scss/file/_path-two.scss'
    ]
  },

  build: {

    extend (config, ctx) {
    }
  }
}
