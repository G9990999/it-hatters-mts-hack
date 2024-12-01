// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module'],
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    },
    components: {
      include: '*',
	},
	directives: {
      include: '*',
    },
  },
  components: {
    dirs: [
      {
        extensions: ['vue'],
        global: true,
        path: '~/components/common/',
        pathPrefix: false
      }
    ]
  },
  css: [
    //'@/primevue/resources/themes/aura-light-indigo/theme.css',
	//'public/themes/lara-light-indigo/theme.css',
	'~/assets/styles.scss',
	'~/assets/tailwind.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css',
    'prismjs/themes/prism-coy.css',
    //'~/assets/styles/layout.scss',
    //'~/assets/demo/flags/flags.css'
  ],

  // @ts-ignore
  googleFonts: {
    families: {
      Inter: true
    }
  }, 
  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },
  
})