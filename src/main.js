import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// .use(store)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './mock/index'

createApp(App).use(router).use(ElementPlus).mount('#app')
