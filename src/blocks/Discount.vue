<template>
    <section class="section discount" id="discount">
        <div class="discount__container container grid">
            <div class="discount__data" v-scroll-reveal.reset="{ origin: 'right' }">
                <h2 class="discount__title">50% Discount <span>on new products</span></h2>
                <a href="#" class="button">Go to new</a>
            </div>

            <img :src="img" alt="" class="discount__img" v-scroll-reveal.reset="{ origin: 'left' }" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Discount',

    data() {
        return {
            img: require('@/assets/images/discount-img.png'),
        }
    },
}
</script>
