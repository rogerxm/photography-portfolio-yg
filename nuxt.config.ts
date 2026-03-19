import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "Playfair Display": [400, 700],
      Inter: [300, 400, 600],
    },
  },
});
