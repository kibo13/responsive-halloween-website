<template>
    <section class="section trick" id="trick">
        <h2 class="section__title">Trick or Treat</h2>
        <div class="trick__container container grid">
            <div class="trick__content" v-for="trick in tricks" :key="trick.id" v-scroll-reveal.reset>
                <img :src="trick.img" alt="" class="trick__img" />
                <h3 class="trick__title">{{ trick.name }}</h3>
                <span class="trick__subtitle">{{ trick.type }}</span>
                <span class="trick__price">{{ trick.price }}</span>
                <button class="button trick__button">
                    <box-icon name="cart" color="white"></box-icon>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Trick',

    data() {
        return {
            tricks: [
                {
                    id: 1,
                    name: 'Toffee',
                    type: 'Candy',
                    price: '$11.99',
                    img: require('@/assets/images/trick-treat1-img.png'),
                },
                {
                    id: 2,
                    name: 'Bone',
                    type: 'Accessory',
                    price: '$8.99',
                    img: require('@/assets/images/trick-treat2-img.png'),
                },
                {
                    id: 3,
                    name: 'Scarecrow',
                    type: 'Accessory',
                    price: '$15.99',
                    img: require('@/assets/images/trick-treat3-img.png'),
                },
                {
                    id: 4,
                    name: 'Candy Cane',
                    type: 'Candy',
                    price: '$7.99',
                    img: require('@/assets/images/trick-treat4-img.png'),
                },
                {
                    id: 5,
                    name: 'Pumpkin',
                    type: 'Accessory',
                    price: '$19.99',
                    img: require('@/assets/images/trick-treat5-img.png'),
                },
                {
                    id: 6,
                    name: 'Ghost',
                    type: 'Accessory',
                    price: '$17.99',
                    img: require('@/assets/images/trick-treat6-img.png'),
                },
            ],
        }
    },
}
</script>
