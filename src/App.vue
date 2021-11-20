<template>
    <div id="app">
        <Header />
        <Main />
    </div>
</template>

<script>
import Header from '@/partials/Header'
import Main from '@/partials/Main'

export default {
    name: 'App',

    components: {
        Header,
        Main,
    },
}
</script>
