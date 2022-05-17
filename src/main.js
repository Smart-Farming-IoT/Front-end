import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import navbarleft from './components/navbarleft.vue'


const app = createApp(App)
app.component('navbarleft', navbarleft)
app.use(router).mount('#app')
