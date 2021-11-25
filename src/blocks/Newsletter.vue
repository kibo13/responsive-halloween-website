<template>
    <section class="section newsletter">
        <div class="newsletter__container container" v-scroll-reveal.reset>
            <h2 class="section__title">Our newsletter</h2>
            <p class="newsletter__description">Promotion new products and sales. Directly to your inbox</p>
            <form class="newsletter__form">
                <input class="newsletter__input" type="email" required placeholder="Enter your email" />
                <button class="button">Subscribe</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Newsletter',
}
</script>
