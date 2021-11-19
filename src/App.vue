<template>
    <div id="app">
        <header class="header" :class="{ 'header--scroll': isActive }">
            <Navbar />
        </header>

        <main class="main">
            <Category />
            <About />
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

import Category from '@/pages/Category'
import About from '@/pages/About'

export default {
    name: 'App',

    components: {
        Navbar,
        Category,
        About,
    },

    data() {
        return {
            isActive: false,
        }
    },

    created() {
        window.addEventListener('scroll', this.scrollHeader)
    },

    destroyed() {
        window.removeEventListener('scroll', this.scrollHeader)
    },

    methods: {
        scrollHeader() {
            this.isActive = window.scrollY >= 50 ? true : false
        },
    },
}
</script>
