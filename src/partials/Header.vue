<template>
    <header class="header" :class="{ 'header--scroll': isActive }">
        <Navbar />
    </header>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    name: 'Header',

    components: {
        Navbar,
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
