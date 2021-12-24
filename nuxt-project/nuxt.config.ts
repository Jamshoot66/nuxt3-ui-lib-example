import {defineNuxtConfig} from 'nuxt3'
import path from 'path'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // vite: {
  //   resolve: {
  //     alias: {
  //       "@vue": path.resolve(__dirname, './node_modules/@vue'),
  //       "vue": path.resolve(__dirname, './node_modules/vue'),
  //     },
  //
  //     // error when use dedupe:
  //     // "require is not defined in ES module scope, you can use import instead"
  //     // but fixing server.mjs does not help with component's slot issue
  //     dedupe: ['vue', '@vue'],
  //     preserveSymlinks: false,
  //   }
  // }
})
