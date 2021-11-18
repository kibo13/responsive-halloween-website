<template>
    <section class="section category">
        <h2 class="section__title">Favorite Scare Category</h2>
        <div class="category__container container grid">
            <div class="category__data" v-for="ghost in ghosts" :key="ghost.id">
                <img class="category__img" :src="ghost.img" alt="" />
                <h3 class="category__title">{{ ghost.name }}</h3>
                <p class="category__description">{{ ghost.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Category',

    data() {
        return {
            ghosts: [
                {
                    id: 1,
                    name: 'Ghosts',
                    img: require('@/assets/images/category1-img.png'),
                    description: 'Choose the ghosts, the scariest there are.',
                },
                {
                    id: 2,
                    name: 'Pumpkins',
                    img: require('@/assets/images/category2-img.png'),
                    description: 'You look at the scariest pumpkins there is.',
                },
                {
                    id: 3,
                    name: 'Witch Hat',
                    img: require('@/assets/images/category3-img.png'),
                    description: 'Pick the most stylish witch hats out there.',
                },
            ],
        }
    },
}
</script>
