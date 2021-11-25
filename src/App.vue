<template>
    <div id="app">
        <Header />
        <Main />
        <Footer />

        <ScrollUp />
    </div>
</template>

<script>
import Header from '@/partials/Header'
import Main from '@/partials/Main'
import Footer from '@/partials/Footer'

import ScrollUp from '@/components/ScrollUp'

export default {
    name: 'App',

    components: {
        Header,
        Main,
        Footer,
        ScrollUp,
    },

    data() {
        return {
            sections: null,
        }
    },

    methods: {
        scrollActive() {
            const scrollY = window.pageYOffset

            this.sections.forEach((current) => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 58
                const sectionId = current.getAttribute('id')

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                } else {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        },
    },

    mounted() {
        this.sections = document.querySelectorAll('section[id]')
        window.addEventListener('scroll', this.scrollActive)
    },
}
</script>
