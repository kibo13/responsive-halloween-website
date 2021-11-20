<template>
    <div id="app">
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Header from '@/partials/Header'
import Main from '@/partials/Main'
import Footer from '@/partials/Footer'

export default {
    name: 'App',

    components: {
        Header,
        Main,
        Footer,
    },
}
</script>
