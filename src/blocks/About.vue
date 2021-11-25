<template>
    <section class="section about" id="about">
        <div class="about__container container grid">
            <div class="about__data" v-scroll-reveal.reset="{ origin: 'left' }">
                <h2 class="about__title section__title">{{ title }}</h2>
                <p class="about__description">{{ description }}</p>
                <a href="#" class="button">Know more</a>
            </div>
            <img :src="img" alt="" class="about__img" v-scroll-reveal.reset="{ origin: 'right' }" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',

    data() {
        return {
            title: 'About Halloween Night',
            img: require('@/assets/images/about-img.png'),
            description: `  Night of all the saints, or all the dead, is celebrated 
                            on October 31 and it is a very fun international celebration, 
                            this celebration comes from ancient origins, and 
                            is already celebrated by everyone.`,
        }
    },
}
</script>
