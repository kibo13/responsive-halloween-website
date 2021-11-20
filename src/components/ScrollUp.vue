<template>
    <a class="scroll-up" :class="{ 'scroll-up--scroll': isActive }" href="#">
        <box-icon class="scroll-up__icon" name="up-arrow-alt" color="white"></box-icon>
    </a>
</template>

<script>
export default {
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
            this.isActive = window.scrollY >= 460 ? true : false
        },
    },
}
</script>
