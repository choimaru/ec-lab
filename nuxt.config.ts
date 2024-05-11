// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/styles/destyle.css', '~/assets/styles/style.scss'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL,
    head: {
      title: 'EC-Lab',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/round_flask_black.svg' }],
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },
});
