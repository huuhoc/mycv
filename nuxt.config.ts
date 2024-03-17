// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/svg-sprite",
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: [400, 500, 700],
        },
        outputDir: "assets",
      },
    ],
  ],
  devtools: { enabled: true },
});
