<template>
    <footer class="footer section">
        <div class="footer__container container grid">
            <div class="footer__content">
                <a href="" class="footer__logo">
                    <img :src="logo" alt="" class="footer__logo-img" />
                    Halloween
                </a>

                <p class="footer__description">Enjoy the scariest night of your life.</p>

                <div class="footer__social">
                    <a
                        class="footer__social-link"
                        v-for="social in socials"
                        :key="social.id"
                        :href="social.url"
                        target="_blank"
                    >
                        <box-icon type="logo" :name="social.icon" color="white" animation="tada-hover"></box-icon>
                    </a>
                </div>
            </div>

            <div class="footer__content" v-for="map in maps" :key="map.id">
                <h3 class="footer__title">{{ map.name }}</h3>
                <ul class="footer__links" v-for="section in map.sections" :key="section">
                    <li>
                        <a href="#" class="footer__link">{{ section }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <span class="footer__copy">&#169; All rigths reserved</span>

        <img
            v-for="image in images"
            :key="image.id"
            :class="`footer__img-${image.name}`"
            :src="image.url"
            :alt="image.name"
        />
    </footer>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            logo: require('@/assets/images/logo.png'),
            socials: [
                {
                    id: 1,
                    name: 'facebook',
                    url: 'https://www.facebook.com/',
                    icon: 'facebook',
                },
                {
                    id: 2,
                    name: 'twitter',
                    url: 'https://twitter.com/',
                    icon: 'twitter',
                },
                {
                    id: 3,
                    name: 'instagram',
                    url: 'https://www.instagram.com/',
                    icon: 'instagram',
                },
            ],
            maps: [
                {
                    id: 1,
                    name: 'About',
                    sections: ['About Us', 'Features', 'News'],
                },
                {
                    id: 2,
                    name: 'Our services',
                    sections: ['Pricing', 'Discounts', 'Shipping mode'],
                },
                {
                    id: 3,
                    name: 'Our company',
                    sections: ['Blog', 'About us', 'Our mision'],
                },
            ],
            images: [
                {
                    id: 1,
                    name: 'one',
                    url: require('@/assets/images/footer1-img.png'),
                },
                {
                    id: 2,
                    name: 'two',
                    url: require('@/assets/images/footer2-img.png'),
                },
            ],
        }
    },
}
</script>
