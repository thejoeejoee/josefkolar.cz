export default {
    mode: 'universal',

    head: {
        title: 'Josef Kolář',
        htmlAttrs: {
            lang: 'cs'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Osobní stránky jednoho IT nadšence'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    env: {
        compileTimestamp: new Date()
    },

    loading: {color: '#fff'},

    css: [
        {src: 'latex.css/style.css', lang: 'css'},
        '@/assets/main.scss'
    ],

    plugins: [
        {src: './plugins/vue-typer.client.ts', mode: 'client'},
        {src: './plugins/vue-rough-notation.client.ts', mode: 'client'},
        {src: './plugins/vue-intersection-observer.client.ts', mode: 'client'},
    ],

    buildModules: [
        '@nuxt/typescript-build',
        ['@nuxtjs/google-analytics', {
            id: 'UA-108072995-4'
        }]
    ],

    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        'nuxt-protected-mailto',
        'nuxt-responsive-loader',
    ],
    styleResources: {
        scss: [
            'assets/scss/file/_path.scss',
            'assets/scss/file/_path-two.scss'
        ]
    },

    build: {

        extend(config, ctx) {
        }
    }
}
