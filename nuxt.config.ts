// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@element-plus/nuxt',
    '@nuxtjs/storybook',
    '@nuxtjs/sanity',
  ],
  sanity: {
    projectId: "kq560jzr",
    apiVersion: "2024-03-11"
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Rubik: {
        wght: [400, 500, 600, 700],
      },
      Inter: {
        wght: [400],
      }
    }
  },
  storybook: {
    url: 'http://localhost:6006',
    storybookRoute: '/__storybook__',
    port: 6006,
  },
})
