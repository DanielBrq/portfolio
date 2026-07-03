import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  experimental: {
    componentIslands: true,
  },
  nitro: {
    routeRules: {
      "/fonts/**": {
        headers: { "cache-control": "public, max-age=31536000, immutable" },
      },
      "/*.svg": {
        headers: { "cache-control": "public, max-age=31536000, immutable" },
      },
      "/img/**": {
        headers: { "cache-control": "public, max-age=31536000, immutable" },
      },
    },
  },
  sourcemap: {
    client: false,
    server: false,
  },
  ssr: false,
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@nuxt/image", "@vercel/analytics"],
  image: {
    provider: "vercel",
  },
  pinia: {
    storesDirs: ["stores"],
  },
  i18n: {
    defaultLocale: "en",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.json",
      },
      {
        code: "es",
        language: "es-CR",
        file: "es.json",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["workbox-window", "gsap", "gsap/ScrollTrigger"],
    },
    build: {
      reportCompressedSize: true,
      sourcemap: false,
      minify: true,
      rollupOptions: {
        onwarn(warning: any, defaultHandler: any) {
          if (warning.message.includes("Sourcemap is likely to be incorrect"))
            return;
          defaultHandler(warning);
        },
      },
    },
  },
  css: ["@/assets/css/main.css"],
});
