import './assets/main.css'
import { createApp } from 'vue'
import { VueFire } from 'vuefire'
import { firebaseApp } from '@/firebase'
import App from './App.vue'
import router from './router'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'

const app = createApp(App)

app.use(router)
app.use(VueFire, {
  firebaseApp,
  modules: [
    // VueFireAuth(),
  ],
})
app.use(createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.red.darken1,
          secondary: colors.deepOrange.accent2,
          accent: colors.grey.base,
          background: colors.grey.lighten2,
        },
      },
      dark: {
        colors: {
          primary: colors.red.darken1,
          secondary: colors.deepOrange.accent2,
          accent: colors.grey.base,
          background: colors.grey.darken3,
        },
      },
    },
  },
}))

app.mount('#app')
