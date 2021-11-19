<template>
    <section class="home container" id="home">
        <div class="swiper-home">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="ghost in ghosts" :key="ghost.id">
                    <div class="home__content grid">
                        <div class="home__group">
                            <img class="home__img" :src="ghost.img" alt="" />
                            <div class="home__indicator"></div>
                            <div class="home__details-img">
                                <h4 class="home__details-title">
                                    {{ ghost.name }}
                                </h4>
                                <span class="home__details-subtitle">
                                    {{ ghost.category }}
                                </span>
                            </div>
                        </div>

                        <div class="home__data">
                            <h3 class="home__subtitle">#{{ ghost.id }} {{ ghost.type }}</h3>
                            <h1 class="home__title">{{ ghost.sound }}</h1>
                            <p class="home__description">
                                {{ ghost.description }}
                            </p>

                            <div class="home__buttons">
                                <a href="#" class="button">Book Now</a>
                                <a href="#" class="button--link button--flex">
                                    Track Record
                                    <box-icon name="right-arrow-alt" color="white"></box-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<script>
import Swiper from 'swiper'

export default {
    name: 'Home',

    data() {
        return {
            ghosts: [
                {
                    id: 1,
                    name: 'The Labu "Reiza"',
                    category: 'The Living Pumpkin',
                    type: 'Top Scariest Ghost',
                    img: require('@/assets/images/home1-img.png'),
                    sound: 'UOOOO TRICK OR TREAT',
                    description: `  Hi, I'm Reiza, people call me "El Labu". 
                                    I am currently trying to learn something new, 
                                    building my own bike with parts made only in Malaysia.`,
                },
                {
                    id: 2,
                    name: 'Adino & Grahami',
                    category: 'No words can describe them',
                    type: 'Top Best Duo',
                    img: require('@/assets/images/home2-img.png'),
                    sound: 'BRING BACK MY COTTON CANDY',
                    description: `  Adino steals cotton candy from his 
                                    brother and eats them all in one bite, 
                                    a hungry beast. Grahami can no longer 
                                    contain his anger towards Adino.`,
                },
                {
                    id: 3,
                    name: 'Captain Sem',
                    category: 'Veteran Spooky Ghost',
                    type: 'Top Scariest Ghost',
                    img: require('@/assets/images/home3-img.png'),
                    sound: 'RESPAWN THE SPOOKY SKULL',
                    description: `  In search for cute little puppy, 
                                    Captain Sem has come back from his tragic death. 
                                    With his hogwarts certified power he promise 
                                    to be a hero for all of ghostkind.`,
                },
            ],
        }
    },

    mounted() {
        new Swiper('.swiper-home', {
            spaceBetween: 30,
            loop: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })
    },
}
</script>
