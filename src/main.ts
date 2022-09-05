/* Side Effects */
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { debugPlugin } from '@/plugins'

import App from './App.vue'
import router from '@/router'

createApp(App)
  .use(debugPlugin)
  .use(createPinia())
  .use(router)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
