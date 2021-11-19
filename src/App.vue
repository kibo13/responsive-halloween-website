<template>
    <div id="app">
        <header class="header" :class="{ 'header--scroll': isActive }">
            <Navbar />
        </header>

        <main class="main">
            <Category />
            <About />
            <Trick />
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

import Category from '@/blocks/Category'
import About from '@/blocks/About'
import Trick from '@/blocks/Trick'

export default {
    name: 'App',

    components: {
        Navbar,
        Category,
        About,
        Trick,
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
