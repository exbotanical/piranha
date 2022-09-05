/* Side Effects */
import 'virtual:svg-icons-register'

import { createApp } from 'vue'

import { debugPlugin } from '@/plugins'

import App from './App.vue'

createApp(App)
  .use(debugPlugin)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
