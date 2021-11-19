<template>
    <section class="section new-arrivals" id="new-arrivals">
        <h2 class="section__title">New Arrivals</h2>

        <div class="new-arrivals__container container">
            <div class="swiper-new-arrivals">
                <div class="swiper-wrapper">
                    <div class="new-arrivals__content swiper-slide" v-for="arrival in arrivals" :key="arrival.id">
                        <div class="new-arrivals__tag">New</div>
                        <img :src="arrival.img" alt="" class="new-arrivals__img" />
                        <h3 class="new-arrivals__title">{{ arrival.name }}</h3>
                        <span class="new-arrivals__subtitle">{{ arrival.type }}</span>

                        <div class="new-arrivals__prices">
                            <span class="new-arrivals__discount">{{ discountedPrice(arrival.price) }}</span>
                            <span class="new-arrivals__price">${{ arrival.price }}</span>
                        </div>

                        <button class="button new-arrivals__button">
                            <box-icon name="cart" color="white"></box-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Swiper from 'swiper'

export default {
    name: 'NewArrivals',

    data() {
        return {
            discount: 50,
            arrivals: [
                {
                    id: 1,
                    name: 'Haunted House',
                    type: 'Accessory',
                    tag: 'New',
                    price: 29.99,
                    img: require('@/assets/images/new1-img.png'),
                },
                {
                    id: 2,
                    name: 'Halloween Candle',
                    type: 'Accessory',
                    tag: 'New',
                    price: 21.99,
                    img: require('@/assets/images/new2-img.png'),
                },
                {
                    id: 3,
                    name: 'Witch Hat',
                    type: 'Accessory',
                    tag: 'New',
                    price: 9.99,
                    img: require('@/assets/images/new3-img.png'),
                },
                {
                    id: 4,
                    name: 'Rip',
                    type: 'Accessory',
                    tag: 'New',
                    price: 44.99,
                    img: require('@/assets/images/new4-img.png'),
                },
                {
                    id: 5,
                    name: 'Terrifying Crystal Ball',
                    type: 'Accessory',
                    tag: 'New',
                    price: 12.99,
                    img: require('@/assets/images/new5-img.png'),
                },
                {
                    id: 6,
                    name: 'Witch Broom',
                    type: 'Accessory',
                    tag: 'New',
                    price: 14.99,
                    img: require('@/assets/images/new6-img.png'),
                },
            ],
        }
    },

    methods: {
        discountedPrice(originalPrice) {
            return '$' + (originalPrice - (originalPrice * this.discount) / 100).toFixed(2)
        },
    },

    mounted() {
        new Swiper('.swiper-new-arrivals', {
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            autoplay: true,
            loop: true,
        })
    },
}
</script>
