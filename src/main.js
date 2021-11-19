// javascript
import Vue from 'vue'
import App from './App.vue'
import { Swiper, Pagination } from 'swiper'
import 'boxicons'

// styles
import '@/assets/styles/main.sass'

Swiper.use(Pagination)

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
