export default {
    head: {
        title: 'Josef Kolář',
        htmlAttrs: {
            lang: 'cs'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Osobní stránky jednoho IT nadšence'},

            {hid: 'og:type', name: 'og:type', content: 'website'},
            {hid: 'og:url', name: 'og:url', content: 'https://josefkolar.cz/'},
            {hid: 'og:title', name: 'og:title', content: 'josefkolar.cz'},
            {hid: 'og:description', name: 'og:description', content: 'Osobní stránky jednoho IT nadšence'},

            {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
            {hid: 'twitter:url', name: 'twitter:url', content: 'https://josefkolar.cz/'},
            {hid: 'twitter:title', name: 'twitter:title', content: 'josefkolar.cz'},
            {hid: 'twitter:description', name: 'twitter:description', content: 'Osobní stránky jednoho IT nadšence'},
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
        '@nuxtjs/pwa',
        ['@nuxtjs/google-analytics', {
            id: 'UA-108072995-4'
        }]
    ],

    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        "@nuxt/content",
        'nuxt-protected-mailto',
        'nuxt-responsive-loader',
    ],
    styleResources: {
        scss: [
        ]
    },

    build: {
        extend(config, ctx) {
        }
    },

    pwa: {
        meta: {
            theme_color: '#4a148c',
        }
    },

    responsiveLoader: {
        min: 540,
        max: 1080,
        quality: 65,
    },

    hooks: {
        'content:file:beforeInsert': (document) => {
            const reg = /(\d{4})-(\d{2})-(\d{2})-(\w+)/

            document.slug = document.slug.replace(reg, '$1/$2/$3/$4')

            document.path = '/' + document.slug.replace(reg, '$1/$2/$3/$4')

            // console.log(document)
        },
        'content:options': (opts/*: IContentOptions*/) => {
            opts.markdown.remarkPlugins.push(  {
                instance: require('./utils/remark-unjekyll-images'),
                name: 'remark-unjekyll-images',
                options: undefined
            })

            return opts;
        },
    }
}
