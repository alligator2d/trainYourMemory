import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import "./main.css";


import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use( BootstrapVue3).mount('#app')
createApp(App).use(store)
