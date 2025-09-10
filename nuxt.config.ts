// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["primeicons/primeicons.css", "@/assets/style.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@primevue/nuxt-module",
    "@nuxt/image",
  ],
  i18n: {
    defaultLocale: "en",
    locales: [{ code: "en", name: "English", file: "en.json" }],
    langDir: "locales/",
    strategy: "no_prefix",
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: "none",
          cssLayer: false,
        },
      },
    },
  },
  experimental: {
    payloadExtraction: false,
  },
});
