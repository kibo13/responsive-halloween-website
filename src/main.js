// javascript
import Vue from 'vue'
import App from './App.vue'
import { Swiper, Pagination } from 'swiper'
import VueScrollReveal from 'vue-scroll-reveal'
import 'boxicons'

// styles
import '@/assets/styles/main.sass'

Swiper.use(Pagination)

Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal',
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
