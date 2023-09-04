import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'

createApp(App).use(store).use(router).mount('#app')
