import { createApp, VueElement , Vue} from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import navbarleft from './components/navbarleft.vue'
// ติดตรงไม่เจอ Vue
// import Vue from 'vue'
// import store from './vuex'
//  Vue.config.productionTip = false
// new Vue({
//     router,
//     store,
//     render: h=> h(Aap)
//  }).mount('#app')


const app = createApp(App)
app.config.globalProperties.firebaseBase = "https://us-central1-iot-systems-1bd8a.cloudfunctions.net/webApi"
app.config.globalProperties.apiBase = "/api/v1"
app.component('navbarleft', navbarleft)
app.use(router).mount('#app')
// app.use(router,store).mount('#app')
