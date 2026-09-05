// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = 'https://josefkolar.cz'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      title: 'Jsem Josef Kolář',
      titleTemplate: '%s | Jsem Josef Kolář',
      htmlAttrs: {
        lang: 'cs'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Josef Kolář – Senior Developer @ Seznam.cz, Golang & Kubernetes, sandboxing AI agentů, open-source contributor' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Josef Kolář' },
        { property: 'og:title', content: 'Josef Kolář' },
        { property: 'og:description', content: 'Senior Developer @ Seznam.cz, Golang & Kubernetes, sandboxing AI agentů, open-source contributor' },
        // Absolute URL — crawlers (LinkedIn, Slack, X) do not resolve relative og:image.
        { property: 'og:image', content: `${siteUrl}/jk.jpg` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '801' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: `${siteUrl}/jk.jpg` }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icon.png' }
      ],
      script: [
        {
          // Marks the document as JS-capable before first paint, so the scroll
          // animations can hide their sections without breaking no-JS readers.
          innerHTML: 'document.documentElement.classList.add("js")',
          tagPosition: 'head'
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Josef Kolář',
            alternateName: 'Joe',
            url: siteUrl,
            image: `${siteUrl}/jk.jpg`,
            jobTitle: 'Senior Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Seznam.cz',
              url: 'https://www.seznam.cz'
            },
            sameAs: [
              'https://github.com/thejoeejoee',
              'https://www.linkedin.com/in/josef-kolar/'
            ],
            knowsAbout: ['Go', 'Kubernetes', 'Python', 'ArgoCD', 'CDN', 'Media Streaming', 'AI coding agents', 'OpenCode', 'Sandboxing']
          })
        }
      ]
    }
  },

  css: [
    'latex.css/style.css',
    '@/assets/main.scss'
  ],

  modules: [],

  runtimeConfig: {
    public: {
      siteUrl,
      compileTimestamp: new Date().toISOString()
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  nitro: {
    preset: 'static'
  }
})
