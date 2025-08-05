// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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