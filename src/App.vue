<template>
  <div id="app">
    <h2 class="intro">Halloween Website</h2>
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>

<style lang="sass">
.intro
    text-transform: uppercase
</style>
