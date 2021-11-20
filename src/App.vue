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
}
</script>
