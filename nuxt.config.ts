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
    preset: "bun",
    routeRules: {
      '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/*.svg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
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
  ssr: false,
  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ["stores"],
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        "workbox-window",
        "@vueuse/core",
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
