// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/content'],

  ui: {
    colorMode: false,
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16',

  nitro: {
    preset: 'cloudflare-module',
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
      wrangler: {
        name: 'quomix',
        observability: {
          logs: {
            enabled: true,
          }
        },
        routes: [
          {
            pattern: 'quomix.io',
            custom_domain: true,
          },
          {
            pattern: 'www.quomix.io',
            custom_domain: true,
          }
        ],
        d1_databases: [
          {
            binding: 'DB',
            database_id: import.meta.env.CLOUDFLARE_D1_ID,
          }
        ],
      },
    },
  },
})