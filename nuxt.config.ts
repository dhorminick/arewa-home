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
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  i18n: {
    // defaultLocale: "en",
    // locales: [
    //   { code: "en", language: "en-US", name: "English", file: "en.json" },
    //   { code: "de", language: "de-DE", name: "Deutsch", file: "de.json" },
    // ],
    // langDir: "locales/",
    vueI18n: "./i18n.config.ts",
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
  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV || "development",
    },
  },
});
