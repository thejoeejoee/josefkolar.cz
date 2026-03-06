// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

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
        { name: 'description', content: 'Josef Kolář – Senior Developer @ Seznam.cz, Golang & Kubernetes, open-source contributor' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://josefkolar.cz/' },
        { property: 'og:title', content: 'Josef Kolář' },
        { property: 'og:description', content: 'Senior Developer @ Seznam.cz, Golang & Kubernetes, open-source contributor' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Josef Kolář',
            alternateName: 'Joe',
            url: 'https://josefkolar.cz',
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
            knowsAbout: ['Go', 'Kubernetes', 'Python', 'ArgoCD', 'CDN', 'Media Streaming']
          })
        }
      ]
    }
  },

  css: [
    'latex.css/style.css',
    '@/assets/main.scss'
  ],

  modules: [
    '@nuxt/content',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark'
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      compileTimestamp: new Date().toISOString()
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  nitro: {
    preset: 'static',
    prerender: {
      failOnError: false,
    }
  }
})
