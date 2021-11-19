<template>
    <div id="app">
        <header class="header" :class="{ 'header--scroll': isActive }">
            <Navbar />
        </header>

        <main class="main">
            <Home />
            <Category />
            <About />
            <Trick />
            <Discount />
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

import Home from '@/blocks/Home'
import Category from '@/blocks/Category'
import About from '@/blocks/About'
import Trick from '@/blocks/Trick'
import Discount from '@/blocks/Discount'

export default {
    name: 'App',

    components: {
        Navbar,
        Home,
        Category,
        About,
        Trick,
        Discount,
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
