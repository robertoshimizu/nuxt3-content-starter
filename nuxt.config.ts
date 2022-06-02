import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  buildModules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    // Options
  },
  modules: ['@nuxt/content'],
  content: {
    // Options
    base: '/_content',
  },
});
