<template>
    <nav class="nav container">
        <a href="#" class="nav__logo">
            <img src="../assets/images/logo.png" alt="" class="nav__logo-img" />
            Halloween
        </a>

        <div class="nav__menu" ref="menu">
            <ul class="nav__list">
                <li class="nav__item" v-for="item in items" :key="item.id">
                    <a class="nav__link" :href="`#${item.name}`" @click="closeMenu">
                        {{ item.name }}
                    </a>
                </li>

                <a href="#" class="button button--ghost">Support</a>
            </ul>

            <button class="nav__close" @click="closeMenu">
                <box-icon name="x" color="white"></box-icon>
            </button>

            <img src="../assets/images/nav-img.png" alt="" class="nav__img" />
        </div>

        <button class="nav__toggle" @click="showMenu">
            <box-icon name="grid-alt" color="white"></box-icon>
        </button>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return {
            items: [
                { id: 1, name: 'home' },
                { id: 2, name: 'about' },
                { id: 3, name: 'trick' },
                { id: 4, name: 'new-arrivals' },
            ],
        }
    },

    methods: {
        showMenu() {
            this.$refs.menu.style.top = '0'
        },

        closeMenu() {
            this.$refs.menu.style.top = '-150%'
        },
    },
}
</script>
