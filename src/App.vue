<template>
    <div id="app">
        <header class="header" id="header">
            <Navbar />
        </header>

        <main class="main">
            <Category />
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Category from '@/pages/Category.vue'

export default {
    name: 'App',
    components: {
        Navbar,
        Category,
    },
}
</script>
