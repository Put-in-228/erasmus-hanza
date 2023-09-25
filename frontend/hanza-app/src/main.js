import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import Vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(Vuetify)
  .mount('#app')


