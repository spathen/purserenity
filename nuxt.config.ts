// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, user-scalable=0",
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["/assets/styles/global.css"],
});
