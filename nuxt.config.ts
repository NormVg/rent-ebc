// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@primevue/nuxt-module', 'nuxt-mongoose'],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
}
})