import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  experimental: {
    viewTransition: true,
    payloadExtraction: true,
    componentIslands: true,
  },
  nitro: {
    preset: "node-server",
    routeRules: {
      '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/*.svg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/img/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
    }
  },
  app: {
    head: {
      link: [{ rel: "preload", as: "script", href: "/_nuxt/entry.js" }],
    },
  },
  sourcemap: {
    client: false,
    server: false,
  },
  ssr: true,
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image'],
  image: {
    provider: 'vercel'
  },
  pinia: {
    storesDirs: ["stores"],
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en.json'
      },
      {
        code: 'es',
        language: 'es-CR',
        file: 'es.json'
      }
    ]
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        "workbox-window",
        'gsap',
        'gsap/ScrollTrigger',
      ],
    },
    build: {
      reportCompressedSize: true,
      sourcemap: false,
      minify: true,
      rollupOptions: {
        output: { manualChunks: {} },
        onwarn(warning: any, defaultHandler: any) {
          if (warning.message.includes("Sourcemap is likely to be incorrect"))
            return;
          defaultHandler(warning);
        },
      },
    },
  },
  css: ['@/assets/css/main.css']
});